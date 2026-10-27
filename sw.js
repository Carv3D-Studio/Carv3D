/**
 * @file sw.js
 * @description Service Worker für den Offline-Betrieb von Carv3D als Progressive Web App (PWA).
 * Nutzt Network-First für Navigationsanfragen und Stale-While-Revalidate für statische Assets
 * derselben Herkunft (JS, CSS, WASM, Icons).
 */

/**
 * Name und Version des App-Caches.
 * WICHTIG: Bei jedem öffentlichen Release (z. B. 0.1.0 -> 0.1.1) muss `CACHE_VERSION` erhöht werden,
 * damit veraltete Cache-Bestände im `activate`-Schritt zuverlässig bereinigt werden.
 */
const CACHE_VERSION = 'carv3d-v3';

/** Erlaubte HTTP-Methode für das Caching. */
const HTTP_METHOD_GET = 'GET';

/** Request-Modus für Seitennavigationen. */
const REQUEST_MODE_NAVIGATE = 'navigate';

/** Erlaubter Response-Typ für gecachte Ressourcen derselben Herkunft. */
const RESPONSE_TYPE_BASIC = 'basic';

/** Relativer Fallback-Pfad für das Startdokument bei Offline-Navigation. */
const FALLBACK_START_URL = './';

/** Alternativer Fallback-Pfad auf `index.html` bei Offline-Navigation. */
const FALLBACK_INDEX_URL = './index.html';

/** HTTP-Statuscode für den Offline-Fallback, falls weder Netzwerk noch Cache verfügbar sind. */
const HTTP_STATUS_SERVICE_UNAVAILABLE = 503;

/**
 * Prüft, ob eine HTTP-Antwort im Cache abgelegt werden darf (`response.ok` und `type === 'basic'`).
 *
 * @param {Response | undefined | null} response - Die zu prüfende Fetch-Antwort.
 * @returns {boolean} True, wenn die Antwort gültig und von gleicher Herkunft ist.
 */
function isCacheableResponse(response) {
  return Boolean(response && response.ok && response.type === RESPONSE_TYPE_BASIC);
}

/**
 * Schreibt eine Antwort fehlertolerant in den aktuellen Cache.
 * Fängt Speicherlimit-Fehler (z. B. QuotaExceededError unter iOS/Safari bei großen WASM-Dateien) ab,
 * damit die eigentliche Netzwerkantwort niemals verloren geht.
 *
 * @param {RequestInfo | URL} request - Schlüssel (Request oder URL) für den Cache-Eintrag.
 * @param {Response} response - Geklonte Antwort, die gespeichert werden soll.
 * @returns {Promise<void>}
 */
async function safeCachePut(request, response) {
  try {
    const cache = await caches.open(CACHE_VERSION);
    await cache.put(request, response);
  } catch (_err) {
    // Speicherlimit (z. B. iOS Safari) überschritten: Fehler ignorieren, Antwort bleibt nutzbar.
  }
}

/**
 * Löscht beim Aktivieren einer neuen Service-Worker-Version alle alten Caches,
 * deren Name nicht mit `CACHE_VERSION` übereinstimmt.
 *
 * @returns {Promise<void>}
 */
async function deleteOutdatedCaches() {
  const keys = await caches.keys();
  const deletions = keys
    .filter(key => key !== CACHE_VERSION)
    .map(key => caches.delete(key));
  await Promise.all(deletions);
}

/**
 * Bearbeitet Seitennavigationen (`request.mode === 'navigate'`) nach dem Network-First-Prinzip.
 * Bei erfolgreicher Netzwerkantwort wird diese unter der Anfrage sowie unter `./` gecacht;
 * im Offline-Fall wird auf den gecachten Eintrag für die Anfrage, `./` oder `./index.html` zurückgegriffen.
 *
 * @param {Request} request - Eingehende Navigationsanfrage.
 * @returns {Promise<Response>} Netzwerkantwort oder gecachtes Startdokument.
 */
async function handleNavigationRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (isCacheableResponse(networkResponse)) {
      await safeCachePut(request, networkResponse.clone());
      await safeCachePut(FALLBACK_START_URL, networkResponse.clone());
    }
    return networkResponse;
  } catch (_err) {
    const cache = await caches.open(CACHE_VERSION);
    const cachedExact = await cache.match(request);
    if (cachedExact) {
      return cachedExact;
    }
    const cachedStart = await cache.match(FALLBACK_START_URL);
    if (cachedStart) {
      return cachedStart;
    }
    const cachedIndex = await cache.match(FALLBACK_INDEX_URL);
    if (cachedIndex) {
      return cachedIndex;
    }
    return new Response('Offline', { status: HTTP_STATUS_SERVICE_UNAVAILABLE });
  }
}

/**
 * Bearbeitet statische Anfragen derselben Herkunft (JS, CSS, WASM, Icons) nach dem
 * Stale-While-Revalidate-Prinzip: Antwortet sofort aus dem Cache (sofern vorhanden)
 * und aktualisiert den Cache-Eintrag im Hintergrund über das Netzwerk.
 *
 * @param {Request} request - Eingehende GET-Anfrage derselben Herkunft.
 * @param {FetchEvent} event - Das zugehörige FetchEvent zur Hintergrundaktualisierung via `waitUntil`.
 * @returns {Promise<Response>} Gecachte oder frisch geladene Antwort.
 */
async function handleStaleWhileRevalidate(request, event) {
  const cache = await caches.open(CACHE_VERSION);
  const cachedResponse = await cache.match(request);

  const networkPromise = fetch(request)
    .then(async networkResponse => {
      if (isCacheableResponse(networkResponse)) {
        await safeCachePut(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => undefined);

  if (cachedResponse) {
    event.waitUntil(networkPromise);
    return cachedResponse;
  }

  const freshResponse = await networkPromise;
  if (freshResponse) {
    return freshResponse;
  }
  return new Response('Offline', { status: HTTP_STATUS_SERVICE_UNAVAILABLE });
}

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      await deleteOutdatedCaches();
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== HTTP_METHOD_GET) {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  // Live-Brücke zu Codex (Ereignisstrom, Befehle, Angaben des Servers) nie zwischenspeichern
  if (url.pathname.startsWith('/__carv3d/')) {
    return;
  }

  // Lernvideos und Bereichsanfragen (Range) laufen am Service Worker vorbei: Der Browser braucht für Video echte Teilantworten (206), die ein Cache nicht liefern kann
  if (request.headers.has('range') || url.pathname.includes('/demos/')) {
    return;
  }

  if (request.mode === REQUEST_MODE_NAVIGATE) {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  event.respondWith(handleStaleWhileRevalidate(request, event));
});

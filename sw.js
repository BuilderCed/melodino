// Melodino — Service Worker v2.0.0
// Cache-first, self-hosted assets, COPPA compliant

const CACHE_NAME = 'melodino-v5';
const ASSETS = [
  './',
  './index.html',
  './privacy.html',
  './404.html',
  './_assets/manifest.json',
  './_assets/icon-192.svg',
  './_assets/icon-512.svg',
  './_assets/fonts/fonts.css',
  './_assets/fonts/nunito.woff2',
  './_assets/fonts/inter.woff2',
  './_assets/fonts/lexend.woff2',
  './_assets/js/soundfont-player.min.js',
];

// Install: pre-cache all core assets (fonts, JS, HTML)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for local assets, network-first for external (soundfont samples)
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Skip non-GET
  if (e.request.method !== 'GET') return;

  // External requests (soundfont samples from gleitz.github.io): cache after first fetch
  if (url.origin !== self.location.origin) {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        return fetch(e.request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }

  // HTML: stale-while-revalidate
  if (e.request.destination === 'document' || url.pathname.endsWith('.html')) {
    e.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(e.request);
        const fetchPromise = fetch(e.request).then((response) => {
          if (response.ok) cache.put(e.request, response.clone());
          return response;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Other local assets: cache-first
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return response;
      });
    })
  );
});

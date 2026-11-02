const CACHE_NAME = 'fs-responder-v5';
const STATIC_ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'assets/css/app.css',
  'assets/js/app.js',
  'assets/i18n/en.json',
  'assets/i18n/bg.json',
  'assets/i18n/es.json',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/favicon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  return self.clients.claim();
});

// Notify all clients when a new service worker is waiting
function notifyClients() {
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'UPDATE_AVAILABLE', cacheName: CACHE_NAME });
    });
  });
}

// Listen for skipWaiting signal from new SW
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    ).then(() => {
      notifyClients();
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => {
      if (event.request.destination === 'document') return caches.match('./');
    }))
  );
});

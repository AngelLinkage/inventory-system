const CACHE_NAME = 'linkage-v2';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // Toma el control de la página inmediatamente
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});

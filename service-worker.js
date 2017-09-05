self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('version1').then((cache) => {
      return cache.addAll(
        [
          '/pirates.html',
          '/styles/pirates.css',
          '/images/i-love-pirates.jpg',
          '/script.js'
        ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
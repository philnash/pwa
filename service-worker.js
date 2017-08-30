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
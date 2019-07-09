self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('restaurantReviews').then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/restaurant.html`,
        `/css/styles.css`,
        `/data/restaurants.json`,
        `/js/dbhelper.js`,
        `/js/main.js`,
        `/js/restaurant_info.js`,
        `img/1.jpg`,
        `img/2.jpg`,
        `img/3.jpg`,
        `img/4.jpg`,
        `img/5.jpg`,
        `img/6.jpg`,
        `img/7.jpg`,
        `img/8.jpg`,
        `img/9.jpg`,
        `img/10.jpg`,
        `https://unpkg.com/leaflet@1.3.1/dist/leaflet.css`,
        `https://unpkg.com/leaflet@1.3.1/dist/leaflet.js`,
      ])
          .then(() => self.skipWaiting());
    })
  );
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('restaurantReviews')
      .then(cache => cache.match(event.request))
      .then(response => {
      return response || fetch(event.request);
    })
  );
})

// self.addEventListener('activate', event => {
//   event.waitUntil(self.clients.claim());
// })

// Register service worker
registerServiceWorker = () => {
  if (!navigator.serviceWorker) return;
  navigator.serviceWorker.register('./sw.js').then(()=> console.log('it worked!'));
}

registerServiceWorker();
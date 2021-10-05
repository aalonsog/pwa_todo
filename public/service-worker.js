// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = ['/', '/offline.html', '/index.html', '/css/app.css', '/js/app.js'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(
  	(async () => {
  		let cache = await caches.open(cacheName);
  		cache.addAll(precacheResources);
  	})()
  );
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, 
// otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
  	(async () => {
  		try {
  			let cachedResponse = await caches.match(event.request);
  			if (cachedResponse) {
  				// Returning page from cache
  				return cachedResponse;
  			} 
  			// Returning online page
  			const networkResponse = await fetch(event.request);
        return networkResponse;
  		}	catch (e) {
  			// Returning offline fallback
				let cache = await caches.open(cacheName);
        let cachedResponse = await cache.match('/offline.html');
        return cachedResponse;
      }
  	})()
  );
});



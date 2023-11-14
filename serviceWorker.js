const CACHE_CURRICULUM = "curriculum-cache";
const PRE_CACHED_RESOURCES = ["/", "index.html", "\style.css", "app.js", "foto.jpg"];

self.addEventListener("fetch", event => {
  console.log('WORKER: Fetching', event.request);
});

self.addEventListener("install", event => {
    console.log("WORKER: install event in progress.");
});

self.addEventListener("activate", event => {
    console.log("WORKER: activate event in progress.");
});

self.addEventListener("install", event => {
    self.skipWaiting();
    // …
});

self.addEventListener("install", event => {
  async function preCacheResources() {
    // Open the app's cache.
    const cache = await caches.open(CACHE_CURRICULUM);
    // Cache all static resources.
    cache.addAll(PRE_CACHED_RESOURCES);
  }


  event.waitUntil(preCacheResources());
});

self.addEventListener("fetch", event => {
  async function returnCachedResource() {
    // Open the app's cache.
    const cache = await caches.open(CACHE_CURRICULUM);
    // Find the response that was pre-cached during the `install` event.
    const cachedResponse = await cache.match(event.request.url);

    if (cachedResponse) {
      // Return the resource.
      return cachedResponse;
    } else {
      // The resource wasn't found in the cache, so fetch it from the network.
      const fetchResponse = await fetch(event.request.url);
      // Put the response in cache.
      cache.put(event.request.url, fetchResponse.clone());
      // And return the response.
      return fetchResponse;
    }
  }

  event.respondWith(returnCachedResource());
});

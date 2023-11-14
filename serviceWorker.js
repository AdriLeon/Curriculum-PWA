let curriculum_cache = 'cache-curriculum';
let urlsToCache = [
  '/',
  '/style.css',
  '/script.js',
  '/app.js',
  '/foto.jpg',
  '/index.html'
]

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


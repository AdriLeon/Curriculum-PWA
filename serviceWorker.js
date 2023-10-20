let curriculum_cache = 'cache-curriculum';
let urlsToCache = [
  '/',
  '/style.css',
  '/script.js',
  '/app.js',
  '/foto.jpg',
  '/index.html'
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(curriculum_cache).then(cache => {
      cache.addAll(urlsToCache)
    })
  )
})


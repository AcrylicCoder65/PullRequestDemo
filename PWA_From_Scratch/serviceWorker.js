const PWAScratch = "PWA From Scratch"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open().then(cache => {
      cache.addAll(assets)
    })
  )
})
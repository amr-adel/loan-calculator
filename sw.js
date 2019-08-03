importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.802501e1.ico",
    "revision": "af5de196fd3a863fee3da5c4c13b0e56"
  },
  {
    "url": "icons.52dcd769.svg",
    "revision": "7815a8163cbc86c939d6f9742306d84c"
  },
  {
    "url": "index.html",
    "revision": "eefa798e528dd69b00a37727af546636"
  },
  {
    "url": "js.cab8c689.js",
    "revision": "92463b507938573ad467f87763f9acf2"
  },
  {
    "url": "loan-calc-icon.50e4b08a.png",
    "revision": "b7e172ceaf906511e11fa945b52cbed7"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f0f2fd9bb139bb6a5fa064f2e50d6a13"
  },
  {
    "url": "styles.5ad45673.css",
    "revision": "8eb3b6956815c17def9f679d8e70a54f"
  }
])

// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
)

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365
      })
    ]
  })
)

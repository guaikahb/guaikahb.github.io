const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"怪咖"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"02574193c853c63659cbf422424b341a",url:"./404.html"},{revision:"dcf6cbd9bd3b6d032e5e231bce885864",url:"./index.html"},{revision:"4802a927bf0b57f3859b3be8ed0b0351",url:"./js/main.js"},{revision:"df7519bd1dcf8da89c9b0fc9a35bdfb5",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();
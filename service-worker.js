const CACHE_NAME = 'cp-posture-v12-pwa-2-icons';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  event.respondWith(fetch(request).then(response => {
    if(response.ok){const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(request,copy)).catch(()=>{});}
    return response;
  }).catch(()=>caches.match(request).then(result=>result || caches.match('./index.html'))));
});
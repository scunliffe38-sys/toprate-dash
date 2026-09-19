// SPM dashboard. Installability only -- this worker caches NOTHING on purpose:
// the page carries live prices and a cached copy would be worse than no tile at all.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});   // no respondWith: the network answers as normal

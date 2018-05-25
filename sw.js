const v = "0";
addEventListener('install', e => e.waitUntil(
  caches.open(v).then(cache => cache.addAll(['/']))
));

addEventListener('fetch', e => {
  console.log('fetch', e.request);
  e.respondWith((async () => {
    if (e.request.mode === "navigate" &&
      e.request.method === "GET" &&
      registration.waiting &&
      (await clients.matchAll()).length < 2
    ) {
      registration.waiting.postMessage('skipWaiting');
      return new Response("", {headers: {"Refresh": "0"}});
    }
    return await caches.match(e.request) ||
      fetch(e.request);
  })());
});

addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => {
    return Promise.all(keys.map(key => {
      if (key != v) return caches.delete(key);
    }));
  }));
});

addEventListener('message', e => {
  if (e.data === 'skipWaiting') {
    skipWaiting();
  }
});
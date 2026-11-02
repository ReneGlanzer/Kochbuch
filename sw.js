// Offline-Cache. Bei Änderungen an der App die Versionsnummer erhöhen.
const CACHE = 'kochbuch-v11';
const DATEIEN = [
  './', 'index.html', 'tablet.html', 'manifest.json', 'css/style.css', 'js/app.js', 'js/rezepte.js', 'js/rezepte-henssler.js', 'js/rezepte-ramsay.js',
  'js/kurzform.js', 'js/rezepte-gesund.js', 'js/rezepte-schnell.js',
  'js/rezepte-hausmannskost.js', 'js/rezepte-huhn-faschiertes.js', 'js/rezepte-kalt-einfach.js',
  'js/rezepte-pasta-reis.js', 'js/rezepte-sport.js',
  'js/rezepte-mehr-vorspeisen.js', 'js/rezepte-mehr-hauptspeisen.js', 'js/rezepte-mehr-desserts.js',
  'js/rezepte-mehr-luxury.js', 'js/rezepte-mehr-sterne.js', 'js/menues-mehr.js',
  'js/rezepte-asiatisch.js',
  'js/rezepte-mexikanisch.js',
  'js/rezepte-deutsch.js',
  'js/rezepte-oesterreich.js',
  'js/rezepte-vorrat.js',
  'js/rezepte-billig.js',
  'js/rezepte-amerikanisch.js',
  'js/rezepte-backen.js',
  'js/menues-welt.js',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Zuerst aus dem Cache antworten, im Hintergrund aktualisieren
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const alt = await cache.match(e.request);
    const neu = fetch(e.request).then(res => {
      if (res.ok) cache.put(e.request, res.clone());
      return res;
    }).catch(() => alt);
    return alt || neu;
  }));
});

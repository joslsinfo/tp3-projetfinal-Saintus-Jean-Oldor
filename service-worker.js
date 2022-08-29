//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v5';
//Add list of files to cache here.
const FILES_TO_CACHE = [
    'offline.html',
    'index.html',
    '/images/jos-coworking-black-bg.png'
    
];


/** Ces lignes de codes permettent, à l'installation du site, quand le servicce worker est chargé puis l'événement install est levé, 
de créer une cache dans le navigateur ou de mettre en cache tous les fichiers qu'on souhaite mettre en cache listés dans const FILES_TO_CACHE */
self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Precache static resources here.
    evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
    })
    );
    self.skipWaiting();
   });



/**Ces lignes de codes permettent de vider la cache actuelle pour une nouvelle cache si les noms de cahes est différent 
 * Sinon, ca va garder en mémoire l'ancienne cache qui pourrait empécher que le site fonctionne correctement.
 * Alors, il faut toujours changer la version de la cache pour que ca prenne en compte les nouvelles modifications des informations faites dans les fichiers du site web.
*/

   self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    //Remove previous cached data from disk.
    evt.waitUntil(
    caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
    if (key !== CACHE_NAME) {
    console.log('[ServiceWorker] Removing old cache',
   key);
    return caches.delete(key);
    }
    }));
    })
    );
    self.clients.claim();
   });


/** Gestion de la perte de connexion
 * Ces lignes de codes permettent de rediriger vers la page offline mise en cache si l'usager perd la connexion pendant qu'il navigue sur notre PWA 
 * A chaque fois que l'événement fetch est levé c'est-à-dire à chaque fois que le navigateur va chercher une ressource à afficher à l'usager, ça peut être une image, un fichier html et autres, 
 * si jamais on n'est pas en train de naviguer et il y a un problème avec l'événement fetch, va ouvrir la cache qui porte le nom de la version actuelle, puis
 * va chercher le fichier qui est dans cache.match('/TP3-Saintus-Jean-Oldor/offline.html' ), car il n'y a plus de connexion d'internet. Dans ce cas-ci c'est offline.html, mais ça peut être un autre fichier
 * */
   self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    //Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
    }
    evt.respondWith(
    fetch(evt.request)
    .catch(() => {
    return caches.open(CACHE_NAME)
    .then((cache) => {
   return cache.match('offline.html' );
    });
    })
    );
   });
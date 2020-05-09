/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'SIESGSTarena';
const urlsToCache = [
  '/',
  '/auth/signin',
  '/auth/signup',
  '/auth/forgot',
  '/auth/reset/:key',
  '/auth/confirm/:userId',
  '/contests',
  '/contests/:contestId',
  '/contests/:contestId/status',
  '/contests/:contestId/my',
  '/contests/:contestId/scoreboard',
  '/contests/:contestId/change',
  '/contests/:contestId/submit',
  '/contests/:contestId/problem/:problemId',
  '/contests/:contestId/submission/:submissionId',
  '/ratings',
  '/blogs',
  '/blogs/create',
  '/blogs/my',
  '/blogs/:blogId',
  '/blogs/:blogId/edit',
  '/problem-set',
  '/playlists',
  '/playlists/home',
  '/playlists/topic/UNI01',
  '/playlists/topic/UNI02',
  '/playlists/topic/UNI03',
  '/playlists/topic/UNI04',
  '/playlists/topic/UNI05',
  '/playlists/topic/UNI06',
  '/goodies',
  '/profile/:userId',
  '/profile/:userId/settings',
  '/about',
  '/competitions',
  '/contact',
  '/our-team',
  '/feedback',
  '/faq',
  '/privacy',
  '/search',
  'admin/:contestId/annoucements',
  'admin/:contestId',
  'admin/:contestId/plagiarism',
  'admin/:contestId/reset/:problemId',
  'admin/:contestId/create',
  'admin/:contestId/:problemId/edit',
  'admin/:contestId/:problemId/test',
  'admin/:contestId/:problemId',
  'superuser/ratings',
  'superuser/contests',
  'superuser/contests/create',
  'superuser/contests/:contestId/edit',
  'superuser/ratings/:contestId/update',
];

// Install a service worker
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache worker.js');
        return cache.addAll(urlsToCache);
      }),
  );
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

// Update a service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['your-app-name'];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.lete(cacheName);
        }
      }),
    )),
  );
});

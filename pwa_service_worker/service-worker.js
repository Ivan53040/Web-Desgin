// Service Worker with Update Management

const CACHE_VERSION = 'v1';  // Increment this when you want to force an update

self.addEventListener("install", (event) => {
    console.log("Service Worker installed");
    // Force the waiting service worker to become active
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activated");
    // Take control of all clients as soon as the service worker activates
    event.waitUntil(clients.claim());
    
    // Clear old caches if you decide to use caching in the future
    event.waitUntil(
    caches.keys().then(cacheNames => {
        return Promise.all(
        cacheNames.filter(cacheName => {
            return cacheName.startsWith('pwa-') && cacheName !== CACHE_VERSION;
        }).map(cacheName => {
            return caches.delete(cacheName);
        })
        );
    })
    );
});

self.addEventListener("fetch", (event) => {
    // Let all fetch requests pass through without caching
    event.respondWith(fetch(event.request));
});
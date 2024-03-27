// src/index.ts
addEventListener('fetch', (event) => {
  event.respondWith(new Response('Hello, worker!', { status: 200 }));
});


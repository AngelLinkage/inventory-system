self.addEventListener('fetch', function(event) {
  // Este código vacío es suficiente para engañar al navegador 
  // y que permita la instalación de la App.
  event.respondWith(fetch(event.request));
});

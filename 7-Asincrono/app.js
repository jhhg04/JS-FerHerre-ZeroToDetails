/*
  Asincrono : Solo tiene un hilo, hasta que no termine con la primera funcion no hace la otra
*/
function imprimir() {
  for (let i = 0; i < 8000; i++) {
    console.log('Imprimio');
  }
}

function presionoClick() {
  console.log('Click en Boton');
}
imprimir();

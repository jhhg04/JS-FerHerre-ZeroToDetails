/*
 Varia Explicita: var nom='John'
 
 Var Anonima: se crea cuando se llama una funtion imprimir('John')

 Si no se envia un param devuelve undifined

*/

function obtenerAleatorio() {
  return Math.random();
}
function obtenerNombre() {
  return 'John';
}

console.log(obtenerAleatorio() + 10);
console.log(obtenerNombre() + 'Herrera');

var nombre = obtenerNombre();
console.log(nombre);

function esMayor05() {
  if (obtenerAleatorio() > 0.5) {
    return true;
  } else {
    return false;
  }
}
console.log(esMayor05());
// esMayor05() ? console.log('Es Mayor a 05') : console.log('Es menor a 05');

if (esMayor05()) {
  console.log('Es Mayor a 05');
} else {
  console.log('Es menor a 05');
}

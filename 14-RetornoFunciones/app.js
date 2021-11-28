/*
  Se Pueden enviar funciones como parametro y return funciones

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

function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

var persona = crearPersona('Edwin', 'Guateque');
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);

function crearFuncion() {
  return function (nombre) {
    console.log('Me Creo ' + nombre);
    return function () {
      console.log('Segunda Funcion');
    };
  };
}

var nuevaFuncion = crearFuncion();
nuevaFuncion('Arley');

var segunaFuncion = nuevaFuncion(persona.nombre);

segunaFuncion();

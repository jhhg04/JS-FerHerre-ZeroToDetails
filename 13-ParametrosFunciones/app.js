/*
 Var Explicita: var nom='John'
 
 Var Anonima: se crea cuando se llama una funtion imprimir('John')

 Si no se envia un param devuelve undifined

*/

function imprimir(nombre, apellido) {
  /*
  if (apellido === undefined) {
    apellido = 'Colombia';
  }
  */
  apellido = apellido || 'Colombia';
  console.log(nombre + ' ' + apellido);
}

imprimir('John', 'Herrera');
imprimir('John');

function imprimir2(persona) {
  console.log(persona.nombre + ' ' + persona.apellido);
}

imprimir2({
  nombre: 'Harold',
  apellido: 'Guateque',
});

var persona = {
  nombre: 'Edwin',
  apellido: 'Guzman',
};
imprimir2(persona);

function imprimir3(fn) {
  fn();
}
imprimir3(function () {
  console.log('funcion Anonima');
});

var miFuncion2 = function () {
  console.log('Mi funcion');
};

imprimir3(miFuncion2);

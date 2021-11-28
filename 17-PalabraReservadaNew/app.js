/*
  La palabra Persona en mayus indica que es como un a clase

  new crea un objeto vacion pero se debe especificar su tipo
  
  Si no se usa new se vuelve una funcion normal y sus atributos caen en el Obj global

  Si se envian parametros se crearia como un constructor de otros lenguajes
*/

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 28;
  this.imprimirPersona = function () {
    return this.nombre + ' ' + this.apellido + '(Edad: ' + this.edad + ')';
  };
  // console.log('Paso por aqui');
}
var john = new Persona('John', 'Herrera');
console.log(john);
console.log(john.nombre);
console.log(john.imprimirPersona());

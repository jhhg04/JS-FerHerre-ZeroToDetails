/*
  Si no se usa this el metodo busca en el scope global
  
  this tiene el valor de window e/d esl objeto global

  Se debe imprimir el this para estar seguros de su scope

  Aun dentro de un objet el this  en JS puede tener el valor global

  Se debe crear una var llamada self=this con la refercia al Obj donde se necesita

  self no es palabra reservada de JS

*/
var nombre = 'Harold';
var persona = {
  nombre: 'John',
  apellido: 'Herera',
  imprimirNombre: function () {
    // console.log('Nombre Completo');
    console.log(nombre);
    console.log(this.nombre + ' ' + this.apellido);
  },
  direccion: {
    pais: 'Colombia',
    city: 'Bogota',
    obtenerPais: function () {
      // console.log(this);
      // console.log('La direccion es en ' + this.pais);
      var self = this;
      var nuevaDireccion = function () {
        console.log(self);
        console.log('La direccion es en ' + self.pais);
      };
      nuevaDireccion();
    },
  },
};

persona.nombre = 'Arley';
persona.imprimirNombre();
persona.direccion.obtenerPais();

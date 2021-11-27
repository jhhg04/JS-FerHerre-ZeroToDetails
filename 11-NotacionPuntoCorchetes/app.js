/*
  Notacion Punto: Poder acceder a los valores de un Obj
    persona.edad , si no lo encuentra envia undefined
  
  Como se puede pasar por referencia se pueden crear var apuntando a una parte del Obj  
  
  Notacion Corchete: Se usa para datos dinamicos que pueden cambiar, 
    para no enviarlos quemados, si no lo encuentra envia undefined

*/

var persona = {
  nombre: 'John',
  apellido: 'Herrera',
  edad: 28,
  direccion: {
    pais: 'Colombia',
    city: 'Bogota',
    edificio: {
      nombre: 'Monaco',
      tel: '2030405',
    },
  },
};

console.log('nombre persona: ', persona.nombre);
console.log('edad persona: ', persona.edad);
console.log('direccion persona: ', persona.direccion);
console.log('direccion persona: ', persona.direccion.pais);

persona.direccion.zipCode = 11101;
console.log('direccion persona: ', persona.direccion);

console.log(persona.direccion.edificio.tel);

var edificio = persona.direccion.edificio;
edificio.numPiso = '10 Piso';
console.log(persona);

var campo = 'edad';
console.log(persona['nombre']);
console.log(persona[campo]);
console.log(persona.edad2);

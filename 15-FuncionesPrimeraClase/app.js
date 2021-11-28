/*
  Las funciones son Obj

  Seles pueden asignar atributos

*/

function a() {
  console.log('Funcion a');
}
a();

a.nombre = 'John';

a.direccion = {
  pais: 'Colombia',
  city: 'Bogota',
  edificio: {
    nombre: 'Monaco',
    tel: '2030405',
  },
};

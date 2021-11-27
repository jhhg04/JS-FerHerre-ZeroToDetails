/*
  Paso Valor: Los tipos primitivos siempre se pasan por valor
    cada uno tiene su espacio en memoria independiente
  
    Paso Referencia: Los Obj siempre se pasan por referencia
    si se hace esto d = c quedan amarradas al mismo espacio en memoria
    si se cambia alguno se cambiamambos

*/
var a = 10;
var b = a;
console.log('a: ', a);
console.log('b: ', b);

a = 20;
console.log('a: ', a);
console.log('b: ', b);

var c = {
  nombre: 'John',
};
var d = c;
console.log('c: ', c);
console.log('d: ', d);

c.nombre = 'Harold';
console.log('c: ', c);
console.log('d: ', d);

d.nombre = 'Edwin';
console.log('c: ', c);
console.log('d: ', d);

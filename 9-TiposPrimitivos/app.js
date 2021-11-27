/*
  Tipos Primitivos: 5
  
  Js puede cambiar el tipo de variable
  
  En los Objetos todo esta en nomemclatura de Pares van separado por coma
  
  Pueden haber obj arr y var dentro de un obj
*/
var num = 10;
var str = 'texto';
var bol = true;
var und = undefined;
var nul = null;

console.log(num);
num = str;
console.log(num);

var obj = {
  numero: 10,
  texto: 'New Text',
  objHijo: {
    numero2: 20,
    texto2: 'Text Two',
  },
};
console.log(obj);

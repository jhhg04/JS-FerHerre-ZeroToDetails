/*
  La funcion primero busca la var en su scope o contexto si no busca en el Obj global
  
  si la var esta despues de la invocacion saldria undefined
  
  si la var no la encuantra sale error is not defined

  // FunctionDeclaration
  function foo(){
    // Some code goes here...
  }
 
  // FunctionExpression
  var foo = function(){
    // Some code goes here...
  }

*/
// var a = 30;

function primeraFuncion() {
  // var a = 20;
  console.log(a);
}

// primeraFuncion();

// var a = 40;

function invocaFuncion() {
  console.log('Funcion Invocada');
}

miFuncion = invocaFuncion;

/*
  La palabra Jugador en mayus indica que es como un a clase

  Se envias params tipo Constructor
  
*/

function Jugador(nombre) {
  this.nombre = nombre;
  this.puntosVida = 100;
  this.secialPower = 100;
  this.curarJugador = function (jugadorObjetivo) {
    if (this.secialPower >= 40) {
      this.secialPower -= 40;
      // jugadorObjetivo.puntosVida = jugadorObjetivo.puntosVida + 20;
      jugadorObjetivo.puntosVida += 20;
    } else {
      console.info(this.nombre + ' No tiene SP');
    }
    this.estado(jugadorObjetivo);
  };
  this.estado = function (jugadorObjetivo) {
    console.info(this);
    console.info(jugadorObjetivo);
  };
  this.disprarFlecha = function (jugadorObjetivo) {
    if (jugadorObjetivo.puntosVida > 40) {
      jugadorObjetivo.puntosVida -= 40;
    } else {
      jugadorObjetivo.puntosVida = 0;
      console.error(jugadorObjetivo.nombre + ' Murio!!');
    }
    this.estado(jugadorObjetivo);
  };
}
var gandalf = new Jugador('Gandalf');
var legolas = new Jugador('Legolas');

console.log(gandalf);
console.log(legolas);

gandalf.curarJugador(legolas);

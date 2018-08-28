var listaPalabras = ["camion", "mueble", "tablon", "estufa", "percha", "regalo"];
var palabra;
var letra1;
var letra2;
var letra3;
var letra4;
var letra5;
var letra2off = "_";
var letra3off = "_";
var letra4off = "_";
var letra5off = "_";
var letra6;
var vidas = 8;

window.onload = function(){
  elegirPalabra();
  escribirPalabra();

}

function elegirPalabra(){
  var random = parseInt(Math.random()* listaPalabras.length);
  palabra = listaPalabras[random];
}

function escribirPalabra(){
  letra1 = palabra.substring(0,1);
  letra6 = palabra.substring(5,6);

  document.getElementById("palabraPrincipal").innerHTML = "Palabra: " + letra1 + " " + letra2off + " " + letra3off + " " + letra4off + " " + letra5off + " " + letra6;

  letra2 = palabra.substring(1,2);
  letra3 = palabra.substring(2,3);
  letra4 = palabra.substring(3,4);
  letra5 = palabra.substring(4,5);
  console.log(letra1 + ' ' +letra2 + ' '+letra3 + ' '+letra4 + ' '+letra5 + ' '+letra6 + ' ');
}

function ingresarLetra(){
  var letraIngresada = prompt("Ingrese una letra: ");

  switch (letraIngresada) {
    case letra2:
      letra2off = letra2;
      break;
    case letra3:
      letra3off = letra3;
      break;
    case letra4:
      letra4off = letra4;
      break;
    case letra5:
      letra5off = letra5;
      break;
    default:
      alert("error");
      vidas--;
      checkearVida();
      break;
  }
  actualizarPalabra();
}

function checkearVida(){
  
  document.getElementById("vidas").innerHTML = "Vidas: " + (vidas);
  switch (vidas) {
    case 7:
      document.getElementById("imagenAhorcado").src = "img/intento1.png";
      break;
    case 6:
      document.getElementById("imagenAhorcado").src = "img/intento2.png";
      break;
    case 5:
      document.getElementById("imagenAhorcado").src = "img/intento3.png";
      break;
    case 4:
      document.getElementById("imagenAhorcado").src = "img/intento4.png";
      break;
    case 3:
      document.getElementById("imagenAhorcado").src = "img/intento5.png";
      break;
    case 2:
      document.getElementById("imagenAhorcado").src = "img/intento6.png";
      break;
    case 1:
      document.getElementById("imagenAhorcado").src = "img/intento7.png";
      break;
    case 0:
      alert("perdiste");
      location.reload(true);
      break;
  }
}

function actualizarPalabra(){
  document.getElementById("palabraPrincipal").innerHTML = "Palabra: " + letra1 + " " + letra2off + " " + letra3off + " " + letra4off + " " + letra5off + " " + letra6;
}

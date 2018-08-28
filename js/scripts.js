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
      if(vidas>0){
        document.getElementById("vidas").innerHTML = "Vidas: " + (vidas);
      }else {
        alert("perdiste");
        location.reload(true);
      }
      break;
  }
  actualizarPalabra();
}

function actualizarPalabra(){
  document.getElementById("palabraPrincipal").innerHTML = "Palabra: " + letra1 + " " + letra2off + " " + letra3off + " " + letra4off + " " + letra5off + " " + letra6;
}

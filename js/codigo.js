if(document.addEventListener) {
   document.addEventListener("DOMContentLoaded", inicio);
} else {
   alert("Por favor, actualice el navegador");
}

function inicio() {
   //aquí se empezaría a ejecutar nuestro código al cargar el DOM
}

var arrayNombres;
var arrayRegaladores;

function obtenerNombres() {
   var nombres = document.querySelector("#nombres").value;
   arrayNombres = nombres.split(",");

   //recorremos el array para quitarle los espacios blancos si los hay
   for (var i=0; i<= arrayNombres.length-1; i++) {
      arrayNombres[i] = arrayNombres[i].trim();
   }

   for (var j=0; j<= arrayNombres.length-1; j++) {
      console.log(arrayNombres[i]);
   }

  
}



function prueba() {
   alert("entro");
}
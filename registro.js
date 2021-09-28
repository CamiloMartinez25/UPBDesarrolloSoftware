//ARREGLO DE OBJETOS

var arreglo = [];


function agregarRegistro() {
    
    let nuevoRegistro = {

        username: document.getElementById('username').value,
        contrasena: document.getElementById('contrasena').value,
        preguntaSeguridad: document.getElementById('preguntas-seguridad').value,
        respuestaSeguridad: document.getElementById('respuesta-seguridad').value
    }
   
    arreglo.push(nuevoRegistro);
    //console.log(arreglo);
    
}


//ORDENACIÓN DEL ARREGLO

function ordenarArreglo(arreglo) {
    
}


//OBTENER REGISTROS CON NÚMEROS

function obtenerUsername(arreglo) {
    
}


//FILTRADO DE REGISTROS

function filtrarUsername(arreglo) {
      return arreglo.filter(function (registro) {return registro.username.length > 10 })
}


//EXPORTACIÓN DE FUNCIONES

module.exports = {
    agregarRegistro,
    ordenarArreglo,
    obtenerUsername,
    filtrarUsername
  };
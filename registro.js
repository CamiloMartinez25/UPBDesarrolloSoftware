//ARREGLO DE OBJETOS

var arreglo = [];


function agregarRegistro() {
    
    const nuevoRegistro = {
        username: document.getElementById('username').value,
        contrasena: document.getElementById('contrasena').value,
        preguntaSeguridad: document.getElementById('preguntas-seguridad').value,
        respuestaSeguridad: document.getElementById('respuesta-seguridad').value
    }
    console.log(nuevoRegistro);
    arreglo.push(nuevoRegistro);
}


//ORDENACIÓN DEL ARREGLO

function ordenarArreglo(arreglo) {
    return  arreglo.sort((a, b) =>{
        if(a.username <b.username) return -1;
        if(a.username >b.username) return  1;
        return 0;
    })
}


//OBTENER REGISTROS CON NÚMEROS

let numbers = "0123456789";

function obtenerUsername(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        if(numbers.indexOf(arreglo.username.charAt(i),0)!=-1){
            console.log(arreglo.username[i]);
            return 1;
        }
    }
    return 0;
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
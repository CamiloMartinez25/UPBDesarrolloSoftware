//ARREGLO DE OBJETOS

var arreglo = new Array();

function agregarRegistro() {
    
    
    let registroUsuario = new Array(4);
    
    registroUsuario[0] = document.getElementById('username').value;
    registroUsuario[1] = document.getElementById('contrasena').value;
    registroUsuario[2] = document.getElementById('preguntas-seguridad').value;
    registroUsuario[3] = document.getElementById('respuesta-seguridad').value;

       
    arreglo.push(registroUsuario);
    console.log(arreglo);

    //esta sería la solución llenando el array principal con un diccionario en lugar de otro array

    /*let username = document.getElementById('username').value;
    let contrasena = document.getElementById('contrasena').value;
    let preguntaSeguridad = document.getElementById('preguntas-seguridad').value;
    let respuestaSeguridad = document.getElementById('respuesta-seguridad').value;

    let registroUsuario = [

        {name:'username', value:username},
        {name:'password', value:contrasena},
        {name:'preguntaSeguridad', value:preguntaSeguridad},
        {name:'respuestaSeguridad', value:respuestaSeguridad}
    ];
    
    arreglo.push(registroUsuario);
    console.log(arreglo);*/
    
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
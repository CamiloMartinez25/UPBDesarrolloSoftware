//ARREGLO DE OBJETOS

function agregarRegistro() {
    
}

//ORDENACIÓN DEL ARREGLO

function ordenarArreglo(arreglo) {
    
}


//OBTENER REGISTROS CON NÚMEROS

function obtenerUsername(arreglo) {
    
}


//FILTRADO DE REGISTROS

function filtrarUsername(arreglo) {
      return arreglo.filter(function (registro) {return registro.Username.length > 10 })
}


//EXPORTACIÓN DE FUNCIONES

module.exports = {
    agregarRegistro,
    ordenarArreglo,
    obtenerUsername,
    filtrarUsername
  };
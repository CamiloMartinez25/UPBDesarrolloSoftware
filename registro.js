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
    let usersOrdered = arreglo.sort((a, b) =>{
        if(a.username <b.username) return -1;
        if(a.username >b.username) return  1;
        return 0;
    })
    console.log(usersOrdered);
    return usersOrdered;
}


//OBTENER REGISTROS CON NÚMEROS

//let numbers = "0123456789"; //PRIMERA OPCION

function obtenerUsername(arreglo) {
    /*for (var i = 0; i < arreglo.length; i++) {
        if(numbers.indexOf(arreglo.username.charAt(i),0)!=-1){
            console.log(arreglo.username[i]);
            return 1;
        }
    }
    return 0;*/  //FIN PRIMERA OPCION
    
    /*let regxp = "^[a-zA-Z0-9]+$"; //SEGUNDA OPCION
    
    for (var i = 0; i < arreglo.length; i++) {
        if(regxp.test(arreglo[i].username)){
            console.log(arreglo[i].username);
            return 1;
        }
    }
    return 0;*/  //FIN SEGUNDA OPCION

    let regxp = "^[a-zA-Z0-9]+$";  //TERCERA OPCION
    let usersWithNumbers = arreglo.filter((registro) =>  registro.username.test(regxp) );
    console.log(usersWithNumbers);
    return usersWithNumbers; //FIN TERCERA OPCION
}


//FILTRADO DE REGISTROS

function filtrarUsername(arreglo) {
    let usersFiltered = arreglo.filter(registro => registro.username.length > 10 ); 
    console.log(usersFiltered);
    return usersFiltered;
}


//EXPORTACIÓN DE FUNCIONES

module.exports = {
    agregarRegistro,
    ordenarArreglo,
    obtenerUsername,
    filtrarUsername
};
//ARREGLO DE OBJETOS
var registros = [];
import { post } from '../ajax/postRequest.mjs';

export async function agregarRegistro() {
    const formElements = document.getElementById('form-registro').elements;
    const url = 'API/users';

    const nuevoRegistro = {
        username: formElements[0].value ,
        contrasena: formElements[1].value,
        preguntaSeguridad: Number(formElements[2].value),
        respuestaSeguridad: formElements[3].value
    }
    
    return await post(url, nuevoRegistro);
    
}


//ORDENACIÓN DEL ARREGLO

function ordenarArreglo(registros) {
    let usersOrdered = registros.sort((a, b) =>{
        if(a.username <b.username) return -1;
        if(a.username >b.username) return  1;
        return 0;
    })
    console.log(usersOrdered);
    return usersOrdered;
}


//OBTENER REGISTROS CON NÚMEROS

//let numbers = "0123456789"; //PRIMERA OPCION

function obtenerUsername(registros) {
    /*for (var i = 0; i < registros.length; i++) {
        if(numbers.indexOf(registros.username.charAt(i),0)!=-1){
            console.log(registros.username[i]);
            return 1;
        }
    }
    return 0;*/  //FIN PRIMERA OPCION
    
    /*let regxp = "^[a-zA-Z0-9]+$"; //SEGUNDA OPCION
    
    for (var i = 0; i < registros.length; i++) {
        if(regxp.test(registros[i].username)){
            console.log(registros[i].username);
            return 1;
        }
    }
    return 0;*/  //FIN SEGUNDA OPCION

    let regxp = /^[A-Za-z0-9]+$/g;  //TERCERA OPCION
    let usersWithNumbers = registros.filter((registro) =>  regxp.test(registro.username) );
    console.log(usersWithNumbers);
    return usersWithNumbers; //FIN TERCERA OPCION
}


//FILTRADO DE REGISTROS

function filtrarUsername(registros) {
    let usersFiltered = registros.filter(registro => registro.username.length > 10 ); 
    console.log(usersFiltered);
    return usersFiltered;
}


//EXPORTACIÓN DE FUNCIONES

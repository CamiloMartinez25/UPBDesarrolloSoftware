//VALIDACIÓN NOMBRE DE USUARIO

function checkUsername(valor){
    let campoUsername = document.getElementById("username");
     let regxp = /^([a-zA-Z0-9]){1,30}$/;

    if(campoUsername.value != ""){

      
       if (regxp.test(campoUsername.value)==true){
           document.getElementById("contrasena").focus();
           alert("Campo username: Correcto")
           return true;
       }else{
           alert("El Campo username debe contener máximo 30 caracteres y usar sólo letras o números");
           document.getElementById("username").focus();
           return false;
       }
   }else{
       alert("El campo username no puede estar vacío")
       document.getElementById("username").focus();
       return false;

   }

}
//module.exports = checkUsername;



//VALIDACIÓN CONTRASEÑA

function checkContrasena(valor){
    var passregex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})$/
    if (valor.match(passregex)) {
        alert("Válida");
        return true;
    }
    else {
        alert("No es válida");
        return false;
    }
}

//module.exports = checkContrasena;


//VALIDACIÓN PREGUNTA SEGURIDAD




//VALIDACIÓN CAMPO RESPUESTA DE SEGURIDAD

//document.getElementById("btn-registrar").onclick=checkRespuestaSeg();

function checkRespuestaSeg(valor){
    
    let campoRespuesta = document.getElementById("respuesta-seguridad");
    let regxp = /^([a-zA-Z0-9]){1,30}$/;
    
    if(campoRespuesta.value != ""){
                   
        if (regxp.test(campoRespuesta.value)==true){
            document.getElementById("btn-registrar").focus();
            alert("Campo respuesta seguridad: Correcto");
            return true;
        }else{
            alert("El Campo respuesta debe contener máximo 30 caracteres y usar sólo letras o números");
            document.getElementById("respuesta-seguridad").focus();
            return false;
        }
    }else{
        alert("el campo respuesta de seguridad no puede estar vacío");
        document.getElementById("respuesta-seguridad").focus();
        return false;
      
    }
}
    
//module.exports = checkRespuestaSeg;


//VALIDACIÓN INTEGRAL DE TODAS LAS FUNCIONALIDADES




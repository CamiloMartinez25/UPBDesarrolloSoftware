//VALIDACIÓN NOMBRE DE USUARIO

function checkUsername(valor) {
  //let campoUsername = document.getElementById("username"); no se debe llamar al campo porque ya estas recibiendo el valor
  let regxp = /^([a-zA-Z0-9]){1,30}$/;
  const usernameError = document.querySelector("#usernameError");

  //if(campoUsername.value != ""){ Debe validarse el valor que se recibe y no el obtenido del campo directamente

  if (valor) {
    if (regxp.test(valor) == true) {
      usernameError.textContent = "";
      return true;
    } else {
      usernameError.textContent =
        "El Campo username debe contener máximo 30 caracteres y usar sólo letras o números";
      document.getElementById("username").focus();
      return false;
    }
  } else {
    usernameError.textContent = "El campo username no puede estar vacío.";
    document.getElementById("username").focus();
    return false;
  }

  //Aqui dejo el codigo refactorizado para que lo analices
  /* if (!valor) {
    usernameError.textContent = "El campo username no puede estar vacío.";
    document.getElementById("username").focus();
    return false;
  }

  usernameError.textContent = regxp.test(valor) ? "" : "El Campo username debe contener máximo 30 caracteres y usar sólo letras o números";
  return regxp.test(valor); */
}

//VALIDACIÓN CONTRASEÑA

function checkContrasena(valor) {
  const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})$/;
  const contrasenaError = document.querySelector("#contrasenaError");

  if (!valor) {
    contrasenaError.textContent = "El campo contraseña no puede estar vacío.";
    document.getElementById("contrasena").focus();
    return false;
  }

  contrasenaError.textContent = valor.match(passregex) ? "" : "La contraseña debe contener almenos una letra mayúscula, una minúscula, un número y con una longitud mayor o igual a 8 dígitos"

  if (valor.match(passregex)) {
    return true;
  } else {
    return false;
  }

  //refactorización del codigo
  //return valor.match(passregex);
}

//VALIDACIÓN PREGUNTA SEGURIDAD

function checkPreguntaSeg(valor){
  let campoPregunta = document.getElementById("preguntas-seguridad");
  const preguntaSegError = document.querySelector("#preguntaSeguridadError");

  if(campoPregunta.value == ''){
    preguntaSegError.textContent = "El campo pregunta de seguridad debe tener alguna selección.";
    document.getElementById("preguntas-seguridad").focus();
    return false;
  }
}

//VALIDACIÓN CAMPO RESPUESTA DE SEGURIDAD

function checkRespuestaSeg(valor) {
  //let campoRespuesta = document.getElementById("respuesta-seguridad");  No se debe llamar el campo solo recibir el parametro a evaluar
  let regxp = /^([a-zA-Z0-9]){1,30}$/;
  const respuestaSeguridadError = document.querySelector("#respuestaSeguridadError");

  if (!valor) {
    respuestaSeguridadError.textContent = "El campo respuesta de seguridad no puede estar vacío.";
    document.getElementById("respuesta-seguridad").focus();
    return false;
  }

  respuestaSeguridadError.textContent = regxp.test(valor) ? '' : "El Campo respuesta debe contener máximo 30 caracteres y usar sólo letras o números";
  return regxp.test(valor);
}

module.exports = {
  checkRespuestaSeg,
  checkContrasena,
  checkUsername,
};

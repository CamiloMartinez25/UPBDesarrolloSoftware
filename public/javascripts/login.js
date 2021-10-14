let registros = [];

function login() {
    
}

function agregarRegistro() {
    const formElements = document.getElementById('form-registro').elements

    const nuevoRegistro = {
        username: formElements[0].value ,
        contrasena: formElements[1].value,
        preguntaSeguridad: formElements[2].value,
        respuestaSeguridad: formElements[3].value
    }
    console.log(registros)
    registros.push(nuevoRegistro);
}

function validarCAPTCHA(valor) {
    return (valor == 9000 ? true : false)
}

module.exports = {login, agregarRegistro, validarCAPTCHA};
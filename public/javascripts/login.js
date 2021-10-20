let registros = [];

function login() {
    const formElements = document.getElementById('form-login').elements
    const isValidCaptcha = validarCAPTCHA(formElements[2].value)
    
    if (!isValidCaptcha) { return false;}
    
    const userNameAndPasswordIsValid = registros.find((user) => user.username == formElements[0].value && user.contrasena == formElements[1].value);
    
    if (userNameAndPasswordIsValid) { return true;}
    
    return false;
 
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
    return Number(valor) === 9000;
}

module.exports = {login, agregarRegistro, validarCAPTCHA, registros};
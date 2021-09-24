const userNameInput = document.getElementById('username');
const contrasenaInput = document.getElementById('contrasena');
const preguntaSeguridadInput = document.getElementById('preguntas-seguridad');
const respuestaSeguridadInput = document.getElementById('respuesta-seguridad');


userNameInput.addEventListener('input', () => {
    checkUsername(userNameInput.value);
})

contrasenaInput.addEventListener('input', () => {
    checkContrasena(contrasenaInput.value);
})

preguntaSeguridadInput.addEventListener('input', () => {
    checkPreguntaSeg(preguntaSeguridadInput.value);
})

respuestaSeguridadInput.addEventListener('input', () => {
    checkRespuestaSeg(respuestaSeguridadInput.value);
})
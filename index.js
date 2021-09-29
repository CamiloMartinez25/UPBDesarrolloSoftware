const userNameInput = document.getElementById('username');
const contrasenaInput = document.getElementById('contrasena');
const preguntaSeguridadInput = document.getElementById('preguntas-seguridad');
const respuestaSeguridadInput = document.getElementById('respuesta-seguridad');
const registerForm = document.getElementById('form-registro');
const userSuccess = document.getElementById('user-register');


userNameInput.addEventListener('input', () => {
    checkUsername(userNameInput.value);
})

contrasenaInput.addEventListener('input', () => {
    checkContrasena(contrasenaInput.value);
})

respuestaSeguridadInput.addEventListener('input', () => {
    checkRespuestaSeg(respuestaSeguridadInput.value);
})



registerForm.addEventListener('submit', ($event) => {
    $event.preventDefault();
    if (validateForm()) {
        agregarRegistro();
        userSuccess.style.display = 'block';
        setTimeout(() => {
            userSuccess.style.display = 'none';
            registerForm.reset();
        }, 1000)
    }
})




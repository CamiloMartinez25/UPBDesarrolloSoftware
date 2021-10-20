import { post } from '../CRUD/postRequest.mjs';


const loginForm = document.getElementById('form-login');
const loginFail = document.getElementsByClassName('login-fail')
const loginSuccess = document.getElementsByClassName('login-success')

loginForm.addEventListener('submit', async ($event) => {
    $event.preventDefault();
    await login().then((data) => {
            if (data.status === 200) {
                loginSuccess[0].style.display = 'block'
                setTimeout(() => {
                    loginSuccess[0].style.display = 'none';
                    loginForm.reset();
                 }, 2000);
            } else {
                loginFail[0].style.display = 'block';
            }
        });
        
})

async function login() {
    const formElements = document.getElementById('form-login').elements
    const isValidCaptcha = validarCAPTCHA(formElements[2].value)
    const url = '/API/login';
    
    if (!isValidCaptcha) { return false;}
    
    const credentials = {
         username: formElements[0].value ,
         contrasena: formElements[1].value,
    }
    
    return await post(url, credentials);
 
}

function validarCAPTCHA(valor) {
    return Number(valor) === 9000;
}

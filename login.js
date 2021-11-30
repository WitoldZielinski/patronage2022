const btn = document.getElementById("btn-login");
const username = document.getElementById('username');
const password = document.getElementById('password');

let userFlag = false; 
let passworFlag = false;


function checkPassword () {
    for (let i = 0; i < sessionStorage.length; i++) {
        const user = sessionStorage.key(i);
        if (JSON.parse(sessionStorage.getItem(user)).password === password.value) {
            passworFlag = true;
            password.setCustomValidity('');
            password.reportValidity();
        } else {
            passworFlag = false;
            password.setCustomValidity('Nieprawidłowa nazwa użytkownika i/lub hasło');
            password.reportValidity();
        }
    }
}

function checkUser () {  
    if (sessionStorage.getItem('' + username.value) === null) {
        userFlag = false;
    } else {
        userFlag = true;
    }
}

function logIn(e) {
    e.preventDefault();
    userFlag = false;
    passworFlag = false;
    checkUser();
    checkPassword();

    if (userFlag && passworFlag) {
        window.location = "logged.html";
    }
}


btn.addEventListener('click', logIn);
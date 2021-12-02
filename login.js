const btn = document.getElementById("btn-login");
const username = document.getElementById('username');
const password = document.getElementById('password');




function checkPassword () {
    for (let i = 0; i < sessionStorage.length; i++) {
        const user = sessionStorage.key(i);
        if (JSON.parse(sessionStorage.getItem(user)).password === password.value) {
            return true;
        } else {
            return false;
        }
    }
}

function checkUser () {  
    if (sessionStorage.getItem(username.value) === null) {
        return false;
    } else {
        return true;
    }
}

function logIn(e) {
    e.preventDefault();
    if (checkUser() && checkPassword()) {
        password.setCustomValidity('');
        password.reportValidity();
        window.location.assign("logged.html");
    } else {
        password.setCustomValidity('Nieprawidłowa nazwa użytkownika i/lub hasło');
        password.reportValidity();
        return false;
    }
}


btn.addEventListener('click', logIn);
const btn = document.getElementById("btn-login");
const username = document.getElementById('username');
const password = document.getElementById('password');




function logIn (e) {
    e.preventDefault();
    if (JSON.parse(sessionStorage.getItem(username.value)) === null) {
        username.setCustomValidity('Nieprawidłowa nazwa użytkownika i/lub hasło');
        username.reportValidity();
        return false;
    } else {
        if (JSON.parse(sessionStorage.getItem(username.value)).password === password.value) {
            window.location.href = './logged.html';
            return true;
        } else {
            username.setCustomValidity('Nieprawidłowa nazwa użytkownika i/lub hasło');
            username.reportValidity();
            return false;
        }
    }
}


btn.addEventListener('click', logIn);
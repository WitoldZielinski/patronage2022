const registerBtn = document.getElementById("btn-register");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const confEmail = document.getElementById("confemail");



function checkEmail() {
    for (let i = 0; i < sessionStorage.length; i++) {
        const user = sessionStorage.key(i);
        if (JSON.parse(sessionStorage.getItem(user)).email === email.value) {
            email.setCustomValidity('Użytkownik o tym adresie email już istnieje!');
            email.reportValidity();
            email.value = "";
            confEmail.value = "";
            return false;
        } 
    } 
    return true;
}



function register(e) {
    e.preventDefault();


    if (sessionStorage.getItem(username.value) === null) {
        if (checkEmail()) {
            if (email.value === confEmail.value) {

                const userDetails = { password: password.value, email: email.value };

                sessionStorage.setItem(username.value, JSON.stringify(userDetails));
                window.location.href = "logged.html"
                return true
            } else {
                confEmail.setCustomValidity('Błędnie potwierdzony email!');
                confEmail.reportValidity();
                return false
            }
        } else {
            email.setCustomValidity('Użytkownik o tym adresie email już istnieje!');
            email.reportValidity();
            email.value = "";
            confEmail.value = "";
            return false;
        }    
    } else {
        username.setCustomValidity('Użytkownik o tej nazwie już istnieje! Wybież inną nazwę lub się zaloguj!');
        username.reportValidity();
        return false;
    }
}
   

registerBtn.addEventListener('click', register);

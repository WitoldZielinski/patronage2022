const registerBtn = document.getElementById("btn-register");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const confEmail = document.getElementById("confemail");



function register() {
    // e.preventDefault();

    const userDetails = { 
        password: password.value, 
        email: email.value 
    };

    if (sessionStorage.getItem(username.value) === null) {
        for (let i = 0; i < sessionStorage.length; i++) {
            const user = sessionStorage.key(i);
            if (JSON.parse(sessionStorage.getItem(user)).email === email.value) {
                email.setCustomValidity('Użytkownik o tym adresie email już istnieje!');
                email.reportValidity();
                email.value = "";
                confEmail.value = "";
            } else {
                if (email.value === confEmail.value) {
                    sessionStorage.setItem(username.value, JSON.stringify(userDetails));
                } else {
                    confEmail.setCustomValidity('Adres mailowy został potwierdzony niepoprawnie');
                    confEmail.reportValidity();
                }
            }
        }
    } else {
        username.setCustomValidity('Użytkownik o tej nazwie już istnieje! Wybież inną nazwę lub się zaloguj!');
        username.reportValidity();
    }
}
   

registerBtn.addEventListener('click', register);
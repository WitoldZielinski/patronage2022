const registerBtn = document.getElementById("btn-register");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const confEmail = document.getElementById("confemail");


let userFlag = false;
let emailFlag = false;
let confEmailFlag = false;


function resetFlags () {
    userFlag = false;
    emailFlag = false;
    confEmailFlag = false;
}


function pushToSession () {
    const userDetails = {password: password.value, email: email.value};

    if (confEmailFlag && emailFlag && userFlag) {
        sessionStorage.setItem(username.value, JSON.stringify(userDetails));
        window.location = "logged.html";
    }
}

function validateUser() {
    if (sessionStorage.getItem(username.value) === null) {
        userFlag = true;
        username.setCustomValidity('')
        username.reportValidity();
        // console.log('username ==> true');
        
    } else {
        userFlag = false;
        username.setCustomValidity('Użytkownik o tej nazwie już istnieje! Wybież inną nazwę lub się zaloguj!');
        username.reportValidity();
        username.value = "";
        password.value ="";
        email.value = "";
        confEmail.value = "";
        // console.log('username ==> false');
    }
};

function validateEmail() {
    for (let i = 0; i < sessionStorage.length; i++) {
        const user = sessionStorage.key(i);
        if (JSON.parse(sessionStorage.getItem(user)).email === email.value) {
            email.setCustomValidity('Użytkownik o tym adresie email już istnieje!');
            email.reportValidity();
            emailFlag = false;
            email.value = "";
            confEmail.value = "";
            // console.log('validateEmail ==> false');
        } else {
            emailFlag = true;
            email.setCustomValidity('');
            email.reportValidity();
            // console.log('validateEmail ==> true');
        }
    }
}


function checkConfEmail () {
    userFlag = false;
    emailFlag = false;
    confEmailFlag = false;
    if(email.value === confEmail.value) {
        confEmailFlag = true; 
        confEmail.setCustomValidity('');
        confEmail.reportValidity();
        // console.log('confirm email ==> true');
    } else {
        confEmailFlag = false;
        confEmail.setCustomValidity('Adres mailowy został potwierdzony niepoprawnie');
        confEmail.reportValidity();
        confEmail.value = "";
        // console.log('confirm email ==> false')
    }  
};

function register(e) {
    e.preventDefault();
    resetFlags();
    checkConfEmail();
    validateEmail();
    validateUser();
    pushToSession();
}
   

registerBtn.addEventListener('click', register);





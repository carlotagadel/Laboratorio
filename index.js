function validateUser () {
    var userField = document.getElementById ('user');
    var validUser = /^[a-zA-Z0-9\_\-]{4,16}$/; //Permito poner números porque entiendo que se refiere a un usuario y no a un nombre como tal
    var errorUser = document.getElementById ('userError');

if (userField.value == 0) {
    errorUser.innerHTML = "Rellene este campo";
    userField.classList.add ("invalid");
    userField.classList.add ("errorIcon");
    userField.classList.remove ("valid");
    userField.classList.remove ("successIcon");
    return false;
}

else if (validUser.test(userField.value)) {
    userField.classList.remove ("invalid");
    userField.classList.remove ("errorIcon");
    errorUser.innerHTML ="";
    userField.classList.add ("valid");
    userField.classList.add ("successIcon");
    return true;
}

else {
    errorUser.innerHTML = "Usuario inválido";
    userField.classList.add ("invalid");
    userField.classList.add ("errorIcon");
    userField.classList.remove ("valid")
    userField.classList.remove ("successIcon")
    return false;
}

}

function validatePassword () {
    var passwordField = document.getElementById ('password');
    var validPassword = /^[\s\S]{1,8}$/;
    var errorPassword = document.getElementById ('passError');

if (passwordField.value == 0) {
    errorPassword.innerHTML = "Rellene este campo";
    passwordField.classList.add ("invalid");
    passwordField.classList.add ("errorIcon");
    passwordField.classList.remove ("valid");
    passwordField.classList.remove ("successIcon");
    return false;
}

else if (validPassword.test(passwordField.value)) {
    passwordField.classList.remove ("invalid");
    passwordField.classList.remove ("errorIcon");
    errorPassword.innerHTML = "";
    passwordField.classList.add ("valid");
    passwordField.classList.add ("successIcon");
    return true;
}

else {
    errorPassword.innerHTML = "No debe tener más de 8 caracteres";
    passwordField.classList.add ("invalid");
    passwordField.classList.add ("errorIcon");
    passwordField.classList.remove ("valid");
    passwordField.classList.remove ("successIcon");
}
}

function validateConfirm () {
    var passwordField = document.getElementById ('password');
    var confirmField = document.getElementById ('confirm');
    var errorConfirm = document.getElementById ('confirmError');

if (confirmField.value == 0) {
    errorConfirm.innerHTML = "Rellene este campo";
    confirmField.classList.add ("invalid");
    confirmField.classList.add ("errorIcon");
    confirmField.classList.remove ("valid");
    confirmField.classList.remove ("successIcon");
    return false;
}

else if (passwordField.value == confirmField.value) {
    confirmField.classList.remove ("invalid");
    confirmField.classList.remove ("errorIcon");
    errorConfirm.innerHTML = "";
    confirmField.classList.add ("valid");
    confirmField.classList.add ("successIcon");
    return true;
}

else {
    errorConfirm.innerHTML = "Las contraseñas no coinciden";
    confirmField.classList.add ("invalid");
    confirmField.classList.add ("errorIcon");
    confirmField.classList.remove ("valid");
    confirmField.classList.remove ("successIcon");
    return false;
}
}

function validateEmail(){
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	var errorEmail = document.getElementById('emailError');

if(emailField.value == 0){
	errorEmail.innerHTML = "Rellene este campo";
	emailField.classList.add("invalid");
	emailField.classList.add("errorIcon");
    emailField.classList.remove ("valid");
    emailField.classList.remove ("successIcon");
	return false; 
}

else if(validEmail.test(emailField.value) ){
	emailField.classList.remove("invalid");
	emailField.classList.remove("errorIcon");
	errorEmail.innerHTML = "";
	emailField.classList.add("valid");
	emailField.classList.add("successIcon");
	return true; 
}
    
else {
	errorEmail.innerHTML = "Email inválido";
	emailField.classList.add("invalid");
	emailField.classList.add("errorIcon");
    emailField.classList.remove ("valid");
    emailField.classList.remove ("successIcon");
return false; 
}
} 

function validateTelephone(){
	var telephoneField = document.getElementById('telephone');
	var validTelephone =  /^\d{9}$/; //He intentado añadir un parámetro +XX para los prefijos pero no he sido capaz
	var errorTelephone = document.getElementById('telephoneError');

if(telephoneField.value == 0){
    errorTelephone.innerHTML = "Rellene este campo";
	telephoneField.classList.add("invalid");
	telephoneField.classList.add("errorIcon");
    telephoneField.classList.remove ("valid");
    telephoneField.classList.remove ("successIcon");
	return false; 
}

else if(validTelephone.test(telephoneField.value) ){
	telephoneField.classList.remove("invalid");
	telephoneField.classList.remove("errorIcon");
	errorTelephone.innerHTML = "";
	telephoneField.classList.add("valid");
	telephoneField.classList.add("successIcon");
	return true; 
}
    
else {
	errorTelephone.innerHTML = "Formato de teléfono inválido";
	telephoneField.classList.add("invalid");
	telephoneField.classList.add("errorIcon");
    telephoneField.classList.remove ("valid");
    telephoneField.classList.remove ("successIcon");
	return false; 
}
} 

function validateForm() {
    if (validateConfirm () && validatePassword () && validateEmail () && validateTelephone () && validateUser ()) {
        alert ("La inscripción ha sido correcta");
        return true; 
    }
    
    else { 
        return false;
    }
    }
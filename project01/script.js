const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// All Functions

// Function to Show Error
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}


// Function to Show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


// Function to check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// This is an Event Listener for a form submit
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    if(username.value === "") {
        showError(username,"Username is Required");
    } else {
        showSuccess(username);
    }

    if(email.value === "") {
        showError(email,"Email is Required");
    } else if (!(isValidEmail(email.value))) {
        showError(email,"Email is invalid");
    } else {
        showSuccess(email);
    }

    if(password.value === "") {
        showError(password,"Password is Required");
    } else { 
        showSuccess(password);
    }

    if(password2.value === "") {
        showError(password2,"Password2 is Required");
    } else { 
        showSuccess(password2);
    }
})

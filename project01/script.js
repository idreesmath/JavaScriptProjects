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

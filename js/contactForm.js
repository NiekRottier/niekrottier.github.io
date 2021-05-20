// Get input values and submitbutton
let submitBtn = document.getElementById("submit")
let nameField = document.getElementById("name")
let emailField = document.getElementById("email")
let messageField = document.getElementById("message")

submitBtn.addEventListener("click", handleSubmit)

function handleSubmit(){
    let fields = {
        "name": nameField,
        "email": emailField,
        "message": messageField
    }

    if (isValid(fields)) {
        updateButton()
    }
}

// Change button style and content
function updateButton() {
    submitBtn.value = "Message sent!"
    submitBtn.classList.add("messageSent")
    submitBtn.removeEventListener("click", handleSubmit)
    setInterval(() => {
        submitBtn.value = "Send message"
        submitBtn.classList.remove("messageSent")
        submitBtn.addEventListener("click", handleSubmit)
    }, 1000)
}

// Do validation checks
function isValid(fields){
    // If valid is true change it to the return of fieldValidation(), if valid is false don't change it
    let valid = true;
    
    valid &= fieldValidation(fields.name, isNotEmpty)
    valid &= fieldValidation(fields.email, isNotEmpty)
    valid &= fieldValidation(fields.email, isEmail)
    valid &= fieldValidation(fields.message, isNotEmpty)

    return valid
}

// Check if value isn't empty
function isNotEmpty(value) {
    return (value == null || typeof value == 'undefined' ) ?  false :  (value.length > 0);
}

// Check if email is valid
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

// Used to validate fields
function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'error';
    } else {
        field.className = '';
    }
   
    return isFieldValid;
}
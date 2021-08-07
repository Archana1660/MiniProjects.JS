const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//get field name
function getFieldName(input) {
    const firstChar = input.id.charAt(0).toUpperCase()
    const fullLabel = firstChar + input.id.slice(1).toLowerCase()
    return fullLabel;
}

//check email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'enter valid email')
    }
}

//check password match
function checkPasswordMatch(input, input2) {
    if (input.value !== input2.value) {
        showError(input2, 'password does not match')
    } else {
        showSuccess(input2)
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

//check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, 'minimum charater 3')
    } else if (input.value.length > max) {
        showError(input, 'maximum charater 12')
    } else {
        showSuccess(input)
    }
}

//check if error
function showError(input, message) {
    const parent = input.parentElement;
    parent.className = 'form-control error';
    parent.querySelector('small').innerText = message;
}

function showSuccess(input) {
    const parent = input.parentElement;
    parent.className = 'form-control success';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([userName, email, password, password2])
    checkLength(userName, 3, 12);
    checkLength(password, 3, 12);
    checkEmail(email);
    checkPasswordMatch(password, password2);
})
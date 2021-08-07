const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, 'is required')
        } else {
            showSuccess(input)
        }
    })
}

function showError(input, message) {
    const parent = input.parentElement;
    parent.className = 'form-control error';
    document.querySelector('small').innerText = message;
}

function showSuccess(input) {
    const parent = input.parentElement;
    parent.className = 'form-control success';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if (userName.value === '') {
    //     showError(userName, 'username is required')
    // } else {
    //     showSuccess(userName)
    // }
    checkRequired([userName, email, password, password2])
})
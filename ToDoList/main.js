let inputItem = document.querySelector('#item');
let submitButton = document.querySelector('#submit-button');
let listItems = document.querySelector('#list-item');

const addItem = () => {
    let inputItemValue = inputItem.value;
    if(inputItemValue !== ''){
        listItems.innerHTML += "<li>" + inputItemValue + "</li>"
    } else {
        alert('enter valid value')
    }
}

submitButton.addEventListener('click', addItem)
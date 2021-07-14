let inputItem = document.querySelector('#item');
let submitButton = document.querySelector('#submit-button');
let listItems = document.querySelector('#list-item');

const addItem = (e) => {
    e.preventDefault()
    let inputItemValue = inputItem;
    if (inputItemValue !== '') {

        const item = document.createElement('li');
        item.innerHTML = inputItemValue.value;
        listItems.appendChild(item);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'X';
        item.appendChild(deleteButton);
        inputItemValue.value = '';

    } else {
        alert('enter valid value')
    }
}

submitButton.addEventListener('click', addItem)
listItems.addEventListener('click', removeItem)

function removeItem(e) {
    const item = e.target;
    const todo = item.parentElement;
    todo.classList.add('fall')
    todo.remove();
}
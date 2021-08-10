const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionariesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser)
}

//double money
function doubleMoney() {
    data = data.map((user) => {
        return {
            ...user,
            money: user.money * 2
        }
    })

    updateDom();
}

// Sort user by money
function sortByMoney() {
    data.sort((a, b) => b.money - a.money);

    updateDom();
}

//filter only millionaries
function showMillionaries() {
    data = data.filter((user) => user.money > 1000000);

    updateDom();
}

//calculate the total money
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    // console.log(formatMoney(wealth))
    const wealthElement = document.createElement('div');
    wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthElement);
}

//Add new obj to data arr
function addData(obj) {
    data.push(obj)
    // console.log(data)

    updateDom();
}

//To show in DOM
function updateDom(provideData = data) {
    //clear the main div
    main.innerHTML = ' <h2><strong>Person</strong> Wealth</h2>'

    provideData.forEach(item => {
        const ele = document.createElement('div');
        ele.classList.add('person');
        ele.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`
        main.appendChild(ele);
    })
}

//format money
function formatMoney(num) {
    return '$' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByMoney);
showMillionariesBtn.addEventListener('click', showMillionaries);
calculateWealthBtn.addEventListener('click', calculateWealth);
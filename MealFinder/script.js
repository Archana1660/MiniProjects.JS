const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');


//search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    //clear single meal
    single_mealEl.innerHTML = '';

    //get the search term
    const term = search.value;

    if (term.trim()) {
        fetch(`https://fakestoreapi.com/products/category/${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                resultHeading.innerHTML = `<h2>Search result for '${term}':</h2>`;

                if (data.length === 0) {
                    resultHeading.innerHTML = `<p>There are no search result. Try again! </p>`
                } else {
                    mealsEl.innerHTML = data.map(item => `
                    <div class="meal">
                    <img src="${item.image}" alt="${item.title}"/>
                    <div class="meal-info" data-mealID="${item.id}">
                    <h3>${item.title}</h3>
                    </div>
                    </div>
                    `)
                        .join('');
                }
            })
        //Clear search text
        search.value = '';
    } else {
        alert('Please enter a search term')
    }
}

//Fetch meal by ID
function getMealId(mealID) {
    fetch(`https://fakestoreapi.com/products/${mealID}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            addToDOM(data)
        })
}

function addToDOM(data) {
    console.log(data)
    single_mealEl.innerHTML = `
    <div class="single-meal">
        <h1>${data.title}</h1>
        <img src="${data.image}" class="product-image"/>
        <p class="product-category">Category: ${data.category}</p>
        <p class="product-description">About: ${data.description}</p>
    </div>`

}

//Event Listener
submit.addEventListener('submit', searchMeal);

mealsEl.addEventListener('click', e => {
    console.log(e.path)
    const mealID = e.path.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info')
        } else {
            return false
        }
    })

    if (mealID) {
        const theID = mealID.getAttribute('data-mealid')
        console.log(theID)
        getMealId(theID)
    }
})
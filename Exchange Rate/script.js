const currencyElement_One = document.getElementById('currency-one');
const currencyElement_Two = document.getElementById('currency-two');
const amountElement_One = document.getElementById('amount-one');
const amountElement_Two = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');

const swap = document.getElementById('swap');

//fetch exchange rate and update the DOM
function calculate() {
    const currency_one = currencyElement_One.value;
    const currency_two = currencyElement_Two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];

            rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountElement_Two.value = (amountElement_One.value * rate).toFixed(2);

        })
}

//event listener
currencyElement_One.addEventListener('change', calculate)
amountElement_One.addEventListener('input', calculate) // change in the input uasing arrows or entering numbers
currencyElement_Two.addEventListener('change', calculate)
amountElement_Two.addEventListener('input', calculate)

calculate();

swap.addEventListener('click', () => {
    const temp = currencyElement_One.value;
    currencyElement_One.value = currencyElement_Two.value;
    currencyElement_Two.value = temp
    calculate()
})
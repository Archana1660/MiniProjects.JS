const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')
let ticketPrice = +movieSelect.value; //change string to number type

populateUI();

//set movie data in local storage
function setMovieData(movie, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movie)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

//update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected') //in div row div with class seat and selected i.e <div class="row"><div class="seat selected"></div></div >

    const seatsIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat) //find the "seat" in the "...seats" array, which is the array of all ".row .seat:not(.occupied)"
    })

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    count.innerText = selectedSeats.length
    total.innerText = selectedSeats.length * ticketPrice
}

//get data from localStorage and populate in UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }

}

//movie select event
movieSelect.addEventListener('change', (e) => {
    // console.log(e.target.value)
    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value)

    updateSelectedCount();

})

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))) {
        e.target.classList.toggle('selected')
        updateSelectedCount();

    }
})

//initial count and total set
updateSelectedCount();
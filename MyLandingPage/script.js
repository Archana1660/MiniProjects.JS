const toggleBtn = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')

//toggle-nav
toggleBtn.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
)

//show modal
open.addEventListener('click', () => {
    return modal.classList.add('show-modal')
})

//hide modal
close.addEventListener('click', () => {
    return modal.classList.remove('show-modal')
})

//hide modal in outside click
window.addEventListener('click', (e) => e.target == modal ? modal.classList.remove('show-modal') : false)
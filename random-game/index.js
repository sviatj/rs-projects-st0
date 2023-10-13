const cards = document.querySelectorAll('.card-to-open');
const container = document.querySelector('.cards_container');

function changeCard() {
    this.classList.toggle('change');
}
cards.forEach(card => card.addEventListener('click', changeCard))


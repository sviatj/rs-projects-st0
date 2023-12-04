const cards = document.querySelectorAll('.card-to-open');
const container = document.querySelector('.cards_container');
let timer = document.querySelector('.timer');
let score = document.querySelector('.atttempts');
let startBtn = document.querySelector('.start');
let startTitle = document.querySelector('.start-title');
let restartBtn = document.querySelector('.restart');
let restartTitle = document.querySelector('.restart-title');
let overlay = document.querySelector('.overlay');
let scoreItem = document.querySelector('.score-item');



let changedCard = false;
let elementCliked = false;
let cardOne, cardTwo;
let flip = 200;
let time = 30;
let timeToShowCards = 10000;


let restartTimer = setInterval(timerUpdate, 1000);


(function sort() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 16)
        card.style.order = random;
    })
})();


overlay.addEventListener('click', function() {
    overlay.style.display = 'none';

 
    cards.forEach(card => {
        card.classList.add('change')
        setTimeout(() => {
            card.classList.remove('change')
        }, timeToShowCards);
    });
    
})


function timerUpdate() {
    let seconds = time;
    timer.innerHTML = `Time left: ${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(restartTimer);
        gameOver();
        youWin();
    }
}

function changeCard() {
    if (elementCliked)
    return;
    if (this === cardOne)
    return;
    this.classList.add('change');

    if (changedCard) {
        cardOne = this;
        changedCard = false;
    }

    else if (!changedCard) {
        cardTwo = this;
        changedCard = true;
        return
    }

    findPair();
}

function countFlips() {
    flip = flip + 100;
    score.innerHTML = `Score: ${flip}`;
    scoreItem.innerHTML = `Score: ${flip}`;
}

cards.forEach(card => card.addEventListener('click', changeCard))

function findPair () {
    if (cardOne.dataset.id === cardTwo.dataset.id) {
        lockCards();
        countFlips();
        return;
    }
    flipBack();
}



function flipBack() {
elementCliked = true;

    setTimeout(() => {
        elementCliked = false;
        cardOne.classList.remove('change');
        cardTwo.classList.remove('change');
        elementCliked = false;
    }, 800);
}


restartBtn.addEventListener('click', function() {
    restart();
})

function gameOver() {
    cards.forEach(card => card.classList.remove('change'));
    clearInterval(restartTimer);
    overlay.style.display = 'flex';
    overlay.innerHTML = `Game Over`;
    location.reload();
  
}

function youWin() {
    if (cardOne.dataset.id === cardTwo.dataset.id) {
        clearInterval(restartTimer);
        cards.forEach(card => card.classList.remove('change'));
        overlay.style.display = 'flex';
        overlay.innerHTML = `You win`;
        setTimeout(() => {
            location.reload()
        }, 10000);
    }
    return
}


function restart() {
    changedCard = false;
    changedCard = false;
    cardOne = null;
    cardTwo = null;
}

function lockCards() {
    cardOne.removeEventListener('click', changeCard);
    cardTwo.removeEventListener('click', changeCard);

    restart();
}




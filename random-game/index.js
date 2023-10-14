const cards = document.querySelectorAll('.card-to-open');
const container = document.querySelector('.cards_container');
let timer = document.querySelector('.timer');
let score = document.querySelector('.atttempts');
let startBtn = document.querySelector('.start');
let startTitle = document.querySelector('.start-title');
let restartBtn = document.querySelector('.restart');
let restartTitle = document.querySelector('.restart-title');

let changedCard = false;
let elementCliked = true;
let cardOne;
let cardTwo;
let flip = 200;



startBtn.addEventListener('click', function() {
    startBtn.style.display = 'none';
    restartBtn.style.display = 'block';
    restartTitle.style.display = 'block';
    let time = 30;
    let restartTimer = setInterval(timerUpdate, 1000);
    function timerUpdate() {
        let seconds = time;
    
        timer.innerHTML = `Time left: ${seconds}`;
        time--;
    
        if (time < 0) {
            clearInterval(restartTimer);
            gameOver();
        }
    }
    return
})


function changeCard() {
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
    startTitle.innerHTML = `Click to restart`;
}

function countFlips() {
    flip = flip + 100;
    score.innerHTML = `Score: ${flip}`;
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
    setTimeout(() => {
        cardOne.classList.remove('change');
        cardTwo.classList.remove('change');
    }, 800);
}


restartBtn.addEventListener('click', function() {
    restart();
})

function gameOver() {
    cards.forEach(card => card.classList.remove('change'))
}


function lockCards() {
    cardOne.removeEventListener('click', changeCard);
    cardTwo.removeEventListener('click', changeCard);
}






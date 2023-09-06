
const body = document.body;
const header = document.querySelector('.header');
const burger = document.querySelector('.burger_btn');
const cross = document.querySelector('.header.full .burger_btn');

burger.addEventListener('click', () => {
header.classList.toggle('full');
burger.classList.toggle('full')
})

body.addEventListener('click', (click) => {
    if (!header.contains(click.target) || (!burger.contains(click.target))) {
        header.classList.remove('full');
        burger.classList.remove('full')
    }
})



/*

burger.onclick = function(openBurger) { 
    if (openBurger.IsClicked = true)
    header.classList.toggle("full")
    return;
   
}
body.onclick = function(openBurger)  {
    if (openBurger.IsClicked)  return;
    header.classList.remove("full");
};
*/


//About slider//

const sliderWrapper = document.querySelector('.slider_wrapper')
const sliderCont = document.querySelector('.slider_container')
const slide = document.querySelector('.slide')
const pagination = document.querySelector('.pagination-container')
const dots = document.querySelectorAll('.dot')
const nextBtn = document.querySelector('.btn-next')
const prevBtn = document.querySelector('.btn-prev')

let start = 0;
let dotI = 0;


const nextImg = () => {
    if (start < 1860) {
        start += 475
        dotI++
    } else {
        start = 0
        dotI = 0
    }
    sliderCont.style.left = -start + 'px'
    dotActive(dotI)
}


const prevImg = () => {
    if (start > 0) {
        start -= 475
        dotI--
    } else {
        start = (dots.length - 1) * 475
        dotI = (dots.length - 1)
    }
    sliderCont.style.left = -start + 'px'
    dotActive(dotI)
}

nextBtn.addEventListener('click', nextImg)
prevBtn.addEventListener('click', prevImg)

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        start = 475 * i
        sliderCont.style.left = -start + 'px'
        dotI = i
        dotActive(dotI)
    })
})

const dotActive = (i) => {
    for (let dot of dots) {
        dot.classList.remove('active') 
    }
    dots[i].classList.add('active')
}

//Favorites slider//

const inputButtons = document.querySelectorAll('.radio-btn-container input')
const seasonSections = document.querySelectorAll('.favorites_section')
const startBtn = document.getElementById('winter')

const showSection = e => {

    document.querySelector('.visible').classList.remove('visible')
    e.target.classList.add('visible')

    seasonSections.forEach(favorites_section => {
        favorites_section.classList.add('hidden')

        if (favorites_section.dataset.name === e.target.dataset.name) {
            favorites_section.classList.remove('hidden');
        }
    }) 
}


inputButtons.forEach(input => input.addEventListener('click', showSection))

window.addEventListener('load', function() {
    startBtn.click();
})

//User profile no auth


const userIcon = document.querySelector('.profile-icon')
const dropMenuAuth = document.querySelector('.drop-menu-auth')

userIcon.addEventListener('click', () => {
    dropMenuAuth.classList.toggle('open');
})

body.addEventListener('click', (click) => {
    if (!userIcon.contains(click.target)) {
        dropMenuAuth.classList.remove('open')
    }
})

//Register

const registerBtn = document.querySelector('.modal-title-3')
const closeFormBtnLog = document.querySelector('.form-close-1')
const closeFormBtnReg = document.querySelector('.form-close-2')
const dropMenu = document.querySelector('.drop-menu-register-container')
const loginBtn = document.querySelector('.modal-title-2')
const droploginMenu = document.querySelector('.drop-menu-login-container')
const modalLinkLogin = document.querySelector('.login-form-link')
const modalLinkReg = document.querySelector('.register-form-link')

loginBtn.addEventListener('click', () => {
    droploginMenu.classList.toggle('open');
})
closeFormBtnLog.addEventListener('click', () => {
    droploginMenu.classList.remove('open')
})

registerBtn.addEventListener('click', () => {
    dropMenu.classList.toggle('open');
})

closeFormBtnReg.addEventListener('click', () => {
    dropMenu.classList.remove('open')
})

modalLinkLogin.addEventListener('click', () => {
    droploginMenu.classList.toggle('open');
    dropMenu.classList.remove('open')
})

modalLinkReg.addEventListener('click', () => {
    dropMenu.classList.toggle('open');
    droploginMenu.classList.remove('open')
})
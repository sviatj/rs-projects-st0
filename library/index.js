/*Self-grading
Этап 1: Пользователь не зарегистрирован - 44 points
Этап 2: Пользователь на этапе регистрации - 20 points
Этап 3: Пользователь на этапе входа в учётную запись после регистрации - 27 points
Этап 4: Пользователь после входа в учётную запись - 0 points

Т.к. задание выполнено частично, то оставляйте пожалуйста замечания по готовым пунктам, буду рада любой критике/помощи.

*/

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
        start = start + 475
        dotI++
    } 
    sliderCont.style.left = -start  + 'px'
    dotCurrent(dotI)
}

const prevImg = () => {
    if (start > 0) {
        start = start - 475
        dotI--
    } 
    sliderCont.style.left = -start + 'px'
    dotCurrent(dotI)
}
nextBtn.addEventListener('click', nextImg)
prevBtn.addEventListener('click', prevImg)

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        start = 475 * i 
        sliderCont.style.left = -start + 'px'
        dotI = i
        dotCurrent(dotI)
    })
})

const dotCurrent = (i) => {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
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
    mainCont.classList.toggle('overlay')
})





const registerBtn = document.querySelector('.modal-title-3')
const closeFormBtnLog = document.querySelector('.form-close-1')
const closeFormBtnReg = document.querySelector('.form-close-2')
const dropMenu = document.querySelector('.drop-menu-register-container')
const loginBtn = document.querySelector('.modal-title-2')
const droploginMenu = document.querySelector('.drop-menu-login-container')
const modalLinkLogin = document.querySelector('.login-form-link')
const modalLinkReg = document.querySelector('.register-form-link')
const mainCont = document.querySelector('.main-container')
const findCardBtnSignup = document.querySelector('.sign-up-btn')
const findCardBtnLogin = document.querySelector('.login-btn')
const buyBtn = document.querySelectorAll('#buy_btn')

/*

loginBtn.addEventListener('click', (e) => {
    droploginMenu.classList.toggle('open');
})
closeFormBtnLog.addEventListener('click', (e) => {
    droploginMenu.classList.remove('open')
})

registerBtn.addEventListener('click', (e) => {
    dropMenu.classList.toggle('open');
})

closeFormBtnReg.addEventListener('click', (e) => {
    dropMenu.classList.remove('open')
    droploginMenu.classList.remove('open')
})

modalLinkLogin.addEventListener('click', (e) => {
    droploginMenu.classList.toggle('open');
    dropMenu.classList.remove('open')
})

modalLinkReg.addEventListener('click', (e) => {
    dropMenu.classList.toggle('open');
    droploginMenu.classList.remove('open')
})

body.addEventListener('click', (click) => {
    if (!userIcon.contains(click.target)) {
        dropMenuAuth.classList.remove('open')
        droploginMenu.classList.remove('open')
        dropMenu.classList.remove('open')
    }
})
*/




loginBtn.addEventListener('click', event => {
    event.click = true;
    droploginMenu.classList.toggle('open');
    mainCont.classList.toggle('overlay')
});

registerBtn.addEventListener('click', event => {
    event.click = true;
    dropMenu.classList.toggle('open');
    mainCont.classList.toggle('overlay')
});

mainCont.addEventListener('click', event => {
    if (event.click) return;
    dropMenu.classList.remove('open')
    droploginMenu.classList.remove('open')
    dropMenuAuth.classList.remove('open');
    mainCont.classList.remove('overlay')
});

closeFormBtnReg.addEventListener('click', () => {
    dropMenu.classList.remove('open')
    mainCont.classList.remove('overlay')
})
closeFormBtnLog.addEventListener('click', () => {
    droploginMenu.classList.remove('open')
    mainCont.classList.remove('overlay')
})

modalLinkLogin.addEventListener('click', () => {
    droploginMenu.classList.toggle('open');
    dropMenu.classList.remove('open')
})

modalLinkReg.addEventListener('click', () => {
    dropMenu.classList.toggle('open');
    droploginMenu.classList.remove('open')
})



///submit login/registration form

const submitLoginForm = document.querySelector('.login-form-btn')
const submitRegistrationForm = document.querySelector('.signup-form-btn')



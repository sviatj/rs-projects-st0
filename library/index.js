
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
let dotIndex = 0;



const nextImg = () => {
    if (start < 1860) {
        start += 475
        dotIndex++
    } else {
        start = 0
        dotIndex = 0
    }
    sliderCont.style.left = -start + 'px'
    dotActive(dotIndex)
}


const prevImg = () => {
    if (start > 0) {
        start -= 475
        dotIndex--
    } else {
        start = (dots.length - 1) * 475
        dotIndex = (dots.length - 1)
    }
    sliderCont.style.left = -start + 'px'
    dotActive(dotIndex)
}

///

nextBtn.addEventListener('click', nextImg)
prevBtn.addEventListener('click', prevImg)

dots.forEach( (dot, i) => {
    dot.addEventListener('click', () => {
        start = 475 * i
        sliderCont.style.left = -start + 'px'
        dotIndex = i
        dotActive(dotIndex)
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

const showSection = e => {
    document.querySelector('.visible').classList.remove('visible')
    e.target.classList.add('visible')

    seasonSections.forEach(favorites_section => {
        favorites_section.classList.add('hide')
    }) 
}

inputButtons.forEach(input => input.addEventListener('click', showSection))

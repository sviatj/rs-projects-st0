
const body = document.body;
const header = document.querySelector('.header');
const burger = document.querySelector('.burger_btn');


burger.addEventListener("click", function(e) 
{   e.isClicked = true
    header.classList.toggle("full")
})
burger.addEventListener("click", e => {
    e.MenuIsClicked = true;
});
body.addEventListener('click', e => {
    if (e.MenuIsClicked) return;
    header.classList.remove("full")
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger_btn").addEventListener("click", function(e) 
    {
      e.isClick = true
      document.querySelector(".header").classList.toggle("full")
    })
})

document.getElementById("menu-header").addEventListener("click", e => {
    e._isClickWithInMenu = true;
});
document.getElementById("burger_btn").addEventListener("click", e => {
    e._isClickWithInMenu = true;
});
document.body.addEventListener('click', e => {
    if (e._isClickWithInMenu) return;
    document.querySelector(".header").classList.remove("full")
});
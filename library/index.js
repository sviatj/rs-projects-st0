/* Вёрстка соответствует макету. Ширина экрана 768px +26

блок <header> +2
секция Welcome +2
секция About +4
секция Favorites +2
секция CoffeShop +4
секция Contacts +4
секция LibraryCard +4
блок <footer> + 2

нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.
элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.
элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. 
На ширине экрана 768рх реализовано адаптивное меню +12 (Рекомендуется сделать появление бургер-меню на ширине 1024px): Eсли при ширине страницы в 768рх панель навигации не скрыта, а бургер-иконка не появилась (при этом учитывайте "Особенности проверки адаптивности в DevTools"), то ставим 0 за данный пункт, и дальше его не проверяем. Иначе:
-Версия Tablet, отступ иконки юзера от правого края - 105px. Такое же расстояние надо сделать и у открытого меню (сейчас там 92px). Сам крест желательно отцентрировать по поцентральной позиции бургер-иконки. Чтобы при переходе из одного состояния в другое ничего не прыгало. Само меню нужно прижать к правому краю целиком. Если иконка юзера не прыгает (не меняет позиции при открытии меню), независимо от величины отступа: +2
-Цвет выпавшего меню должен совпадать с цветом полоски навигации. Оценка снижаться не будет, если сделано по первому макету (#000000).

при нажатии на бургер-иконку плавно появляется адаптивное меню +4
при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2
размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2

оценка - 50 баллов
*/

const body = document.body;
const header = document.querySelector('.header');
const burger = document.querySelector('.burger_btn');



burger.onclick = function(openBurger) { 
    if (openBurger.IsClicked = true)
    header.classList.toggle("full")
    return;
   
}
body.onclick = function(openBurger)  {
    if (openBurger.IsClicked)  return;
    header.classList.remove("full");
};


/*

burger.addEventListener('click', () => {
header.classList.add('full');
return;
})

body.addEventListener('click', (click) => {
    if (!header.contains(click.target)) {
        header.classList.remove('full')
    }
})

*/



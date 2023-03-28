let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');

links.forEach(function (element) {
    element.addEventListener('click', toggleMenu);
})

function toggleMenu() {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('body--active-menu');
}

hamburger.addEventListener('click', toggleMenu);

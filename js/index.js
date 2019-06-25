let toggleMenu = () => {
    //toggle menu
    menu.classList.toggle('menu--open');
    console.log(toggleMenu);
}

//reference menu
let menu = document.querySelector('.menu');
console.log(menu);

//reference menu Button
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);
console.log('click', menuButton);

//reference menu Button close
const menuClose = document.querySelector('.menu-button-close');
menuClose.addEventListener('click', toggleMenu);
console.log(menuClose);

//carousel
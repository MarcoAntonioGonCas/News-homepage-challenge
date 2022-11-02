const btnCloseMenu = document.querySelector(".navbar-icon-menu-close");
const btnOpenMenu = document.querySelector(".navbar-icon-menu");
const menuContainer = document.querySelector(".navbar-rigth");


const toogleMenu = ()=>{
    menuContainer.classList.toggle("navbar-rigth--active");
}
btnOpenMenu.addEventListener('click',toogleMenu);
btnCloseMenu.addEventListener('click',toogleMenu);

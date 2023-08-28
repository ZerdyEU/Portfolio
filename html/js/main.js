let burgerTlacitko = document.querySelector(".burger-menu-tlacitko");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerMenuOpen = false;

burgerTlacitko.onclick = function () {
    if (!isBurgerMenuOpen) {
        burgerMenu.style.display = "block";
        burgerTlacitko.style.backgroundPosition = "center left 60px, center";
        isBurgerMenuOpen = true;
    }
    else if (isBurgerMenuOpen) {
        burgerMenu.style.display = "none";
        burgerTlacitko.style.backgroundPosition = "center, center left 60px";
        isBurgerMenuOpen = false;
    }
}
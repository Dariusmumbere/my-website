const mobileMenu = document.querySelector("#mobile-menu");
const navbarMenu = document.querySelector(".navbar__menu");

mobileMenu.addEventListener("click", function() {
    navbarMenu.classList.toggle("active");
});

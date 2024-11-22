const navbar = document.querySelector(".navbar")
const menuHamburguer = document.querySelector(".menuHamburguer")

menuHamburguer.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});


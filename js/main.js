const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header");
hamburger.addEventListener("click", function() {
    nav.classList.toggle("nav--open");
    header.classList.toggle("header--open")
    body.classList.toggle("body--max-height");
});
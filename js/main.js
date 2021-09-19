/*const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header");
hamburger.addEventListener("click", function() {
    nav.classList.toggle("nav--open");
    header.classList.toggle("header--open")
    body.classList.toggle("body--max-height");
})*/

const buttonRight = document.getElementById("button-right");
const buttonLeft = document.getElementById("button-left");
const cupcakeScrollable = document.getElementById("cupcake-scrollable");
buttonRight.addEventListener("click", function() {
    buttonRight.classList.add("button-right--clicked");
    buttonLeft.classList.add("button-left--clicked");
    cupcakeScrollable.scrollTo(1000, 0);
})

buttonLeft.addEventListener("click", function() {
    buttonLeft.classList.remove("button-left--clicked");
    buttonRight.classList.remove("button-right--clicked");
    cupcakeScrollable.scrollTo(0, 0);
})
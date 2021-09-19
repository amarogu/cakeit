const body = document.body
const x = window.matchMedia("(max-width: 320px)");
const y = window.matchMedia("(min-width: 768px)");

window.addEventListener("resize", function() {
    if(x.matches) {
        const screenWidth = screen.width;
        const zoom = (screenWidth - ((75 / 100) * screenWidth)) + "%";
        body.style.zoom = zoom;
    } else {
        body.style.zoom = "initial";
    }
    /* Removing the classes from the open state of the nav bar */
    if(y.matches) {
        nav.classList.remove("nav--open");
        header.classList.remove("header--open");
        body.classList.remove("body--max-height");
    }
})

if(x.matches) {
    const screenWidth = screen.width;
    const zoom = (screenWidth - ((75 / 100) * screenWidth)) + "%";
    body.style.zoom = zoom;
} else {
    body.style.zoom = "initial";
}
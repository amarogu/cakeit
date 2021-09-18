const body = document.body

window.addEventListener("resize", function() {
    const x = window.matchMedia("(max-width: 320px)");
    if(x.matches) {
        const screenWidth = screen.width;
        const zoom = (screenWidth - ((75 / 100) * screenWidth)) + "%";
        body.style.zoom = zoom;
    } else {
        body.style.zoom = "initial";
    }
})

const y = window.matchMedia("(max-width: 320px)");
if(y.matches) {
    const screenWidth = screen.width;
    const zoom = (screenWidth - ((75 / 100) * screenWidth)) + "%";
    body.style.zoom = zoom;
} else {
    body.style.zoom = "initial";
}
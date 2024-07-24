function menu() {
    var elemento = document.getElementById("menu");

    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none"
    }
};

function repair() {
    var elemento = document.getElementById("menu");

    if (window.innerWidth >= 768) {
        elemento.style.display = "flex"
    } else {
        elemento.style.display = "none"
    }
}
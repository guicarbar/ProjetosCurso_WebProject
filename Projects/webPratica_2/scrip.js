function menu() {
    var menu = document.getElementById('menu')

    if (menu.style.display === 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
};

function repair() {
    var elemento = document.getElementById('menu');

    if (window.innerWidth >= 768) {
        elemento.style.display = "flex"
    } else {
        elemento.style.display = "none"
    }
}
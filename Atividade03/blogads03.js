const inputCorTexto = document.getElementById('cor-texto');
const inputCorFundo = document.getElementById('cor-fundo');
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

if (inputCorTexto && inputCorFundo) {
    inputCorTexto.addEventListener('input', () => {
        let cor = inputCorTexto.value;
        document.body.style.color = cor;
    });

    inputCorFundo.addEventListener('input', () => {
        let cor = inputCorFundo.value;
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = cor;
    });
}

if (menuToggle && menuLinks) {
    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
    });
}
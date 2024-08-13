function ativarMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    const iconeMobile = document.querySelector('i');

    function menuMobileAtivo() {
        menuMobile.classList.toggle('ativo');
    }

    iconeMobile.addEventListener('click', menuMobileAtivo);
}

let changeIcon = function(icon) {
    icon.classList.toggle('bi-x');
}

ativarMenu();

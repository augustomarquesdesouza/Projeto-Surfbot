//Menu Hambúrguer
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

//Scroll suave
function initScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
};

initScroll();

//Animação ao scroll
function initAnimaScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowsMetade = window.innerHeight * 0.68;
    
    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowsMetade) < 0;
            if(isSectionVisible) {
                section.classList.add('ativo');
            }
        })
    };
    animaScroll();

    window.addEventListener('scroll', animaScroll);
};

initAnimaScroll();





const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.add('open');
    menuToggle.style.display = 'none'; 
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.style.display = 'block';
});

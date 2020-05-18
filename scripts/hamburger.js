const burger = document.querySelector('.hamburger');

const navbar = document.querySelector('.navbar')

burger.addEventListener('click', function () {
    navbar.classList.toggle('active');
})
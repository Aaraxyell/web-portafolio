document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuList = document.querySelector('.menu__list');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
    });
});

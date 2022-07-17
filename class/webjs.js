const mobile = document.querySelector('#menu-mobile');
const mobileItem = document.querySelector('nav .menu');

mobile.addEventListener('click', function() {
    mobile.classList.toggle('is-active');
    mobileItem.classList.toggle('active');
});
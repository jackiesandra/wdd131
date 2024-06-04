document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');

    menuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        menuBtn.innerHTML = nav.style.display === 'block' ? '&times;' : '&#9776;';
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                nav.style.display = 'none';
                menuBtn.innerHTML = '&#9776;';
            }
        });
    });
});

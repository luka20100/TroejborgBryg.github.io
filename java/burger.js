document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.querySelector('.burger-menu');
    var body = document.querySelector('body');
    var burgerMenuOverlay = document.createElement('div');
    burgerMenuOverlay.className = 'burger-menu-overlay';

    burgerMenu.addEventListener('click', function () {
        body.classList.toggle('menu-open');

        // Toggle the presence of the burger-menu-overlay in the body
        if (body.classList.contains('menu-open')) {
            body.appendChild(burgerMenuOverlay);
            burgerMenu.innerHTML = '<div class="close-icon"></div>';
        } else {
            body.removeChild(burgerMenuOverlay);
            burgerMenu.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
        }
    });

    burgerMenuOverlay.addEventListener('click', function () {
        body.classList.remove('menu-open');
        body.removeChild(burgerMenuOverlay);
        burgerMenu.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
    });
});

/*åben burgemenu*/
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

    // Select all elements with the class '.om_os'
    const toggleBtns = document.querySelectorAll('.om_os');

    // Iterate through each toggle button
    toggleBtns.forEach((toggleBtn) => {
        // Find the corresponding submenu based on the data attribute
        const submenuClass = toggleBtn.dataset.target;
        const dropDownMenu = document.querySelector(`.${submenuClass}`);

        // Add click event listener to each toggle button
        toggleBtn.addEventListener('click', function () {
            // Toggle the 'open' class on the submenu
            dropDownMenu.classList.toggle('open');
        });
    });


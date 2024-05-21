let menu_button = document.querySelector('#menu-button');
let navlist = document.querySelector('nav ul');
let menuIcon = document.querySelector('#menu-icon');

menu_button.addEventListener('click', () => {
    navlist.classList.toggle('open');
    if (navlist.classList.contains('open')) {
        menuIcon.innerHTML = '&times;'; // Sets the icon to "X"
    } else {
        menuIcon.innerHTML = '&#x2261;'; // Sets the icon back to "="
    }
});
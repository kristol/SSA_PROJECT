const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.getElementsByClassName('navbar-links')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navbarLinks.style.animation = 'navLinkFade 0.5s ease-in-out';
});
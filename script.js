
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('navbar-transparent')
        navbar.classList.add('navbar-scrolled')
    }
    else {
        navbar.classList.remove('navbar-scrolled')
        navbar.classList.add('navbar-transparent')
    }
})
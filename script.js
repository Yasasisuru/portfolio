var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        const navbarToggler = document.querySelector('.navbar-toggler');

        // Close the navbar
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});




/***************************************************************************************** */

var typed = new Typed(".text", {
    strings: ["Front-End Developer", "Fullstack Developer", "Flutter UI Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1200,
    loop: true
});

























var loader= document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
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
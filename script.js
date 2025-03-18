var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});




/***************************************************************************************** */


    new Typed(".text", {
        strings: ["Front-End Developer", "Fullstack Developer", "Flutter UI Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1200,
        loop: true
    });


    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 3 + 5; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

      
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.bottom = '-10px';

        const isLight = document.body.classList.contains('light-bg');
        particle.style.background = isLight ? 'rgba(243, 238, 106, 0.8)' : (Math.random() > 0.5 ? 'rgba(0, 255, 162, 0.8)' : 'rgba(12, 190, 239, 0.8)');

        document.body.appendChild(particle);

       
        setTimeout(() => particle.remove(), 10000);
    }

    function checkBackground() {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            const rect = page.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                if (getComputedStyle(page).backgroundColor === 'rgb(240, 240, 240)') {
                    document.body.classList.add('light-bg');
                } else {
                    document.body.classList.remove('light-bg');
                }
            }
        });
    }

    window.addEventListener('scroll', checkBackground);

  
    setInterval(createParticle, 150);











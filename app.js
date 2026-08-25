/* --------------------------------------------------
   Dutchess - Plants for London JavaScript
   Simplified Multi-Page Interactions
-------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Sticky Glassmorphic Navbar Behavior
    // ==========================================
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    // ==========================================
    // 2. Mobile Responsive Burger Menu Toggle
    // ==========================================
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // ==========================================
    // 3. Homepage Portfolio Slideshow
    // ==========================================
    let slideIndex = 1;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    let slideInterval;

    if (slides.length > 0) {
        function showSlides(n) {
            let i;
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
        }

        showSlides(slideIndex);
        
        slideInterval = setInterval(function() {
            window.plusSlides(1);
        }, 5000);

        window.plusSlides = function(n) {
            showSlides(slideIndex += n);
            resetInterval();
        };

        window.currentSlide = function(n) {
            showSlides(slideIndex = n);
            resetInterval();
        };
        
        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(function() {
                window.plusSlides(1);
            }, 5000);
        }
    }

});

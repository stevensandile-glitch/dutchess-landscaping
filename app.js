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

});

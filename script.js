// JavaScript for animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Intro animation
    const introScreen = document.getElementById('introScreen');
    const progressFill = document.getElementById('progressFill');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            // Fade out intro screen
            introScreen.style.opacity = '0';
            setTimeout(() => {
                introScreen.style.display = 'none';
                // Trigger scroll animations
                animateOnScroll();
            }, 800);
        }
        progressFill.style.width = progress + '%';
    }, 100);
    
    // Scroll animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            element.classList.add('appear');
        });
    }
    
    // Add scroll event for additional animations
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.animate-on-scroll:not(.appear)');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('appear');
            }
        });
    });
    
    // Cart button animation
    const cartButtons = document.querySelectorAll('.btn-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="bi bi-check2"></i> Added!';
            this.classList.remove('btn-cart');
            this.classList.add('btn-success');
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.add('btn-cart');
                this.classList.remove('btn-success');
            }, 2000);
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});
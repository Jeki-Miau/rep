document.addEventListener('DOMContentLoaded', function() {
    const introScreen = document.getElementById('introScreen');
    const progressFill = document.getElementById('progressFill');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            introScreen.style.opacity = '0';
            setTimeout(() => {
                introScreen.style.display = 'none';
                animateOnScroll();
            }, 800);
        }
        progressFill.style.width = progress + '%';
    }, 100);
    
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            element.classList.add('appear');
        });
    }
    
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
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const teamSection = document.querySelector('.team-section');
    
    if (teamSection) {
        const shape1 = document.createElement('div');
        shape1.classList.add('team-shape', 'shape-1');
        
        const shape2 = document.createElement('div');
        shape2.classList.add('team-shape', 'shape-2');
        
        teamSection.appendChild(shape1);
        teamSection.appendChild(shape2);
    }
});
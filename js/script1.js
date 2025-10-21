// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Back to top button
        window.addEventListener('scroll', function() {
            const backToTop = document.querySelector('.back-to-top');
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animated');
                }
            });
        }
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        
        // Initialize tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
document.addEventListener('DOMContentLoaded', function() {
            // Slider functionality
            const sliderTrack = document.getElementById('sliderTrack');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const sliderDots = document.getElementById('sliderDots');
            
            const cards = document.querySelectorAll('.certification-card');
            const cardWidth = cards[0].offsetWidth + 20; // card width + gap
            const visibleCards = Math.floor(document.querySelector('.slider-container').offsetWidth / cardWidth);
            const totalCards = cards.length;
            const maxSlideIndex = totalCards - visibleCards;
            
            let currentPosition = 0;
            
            // Create dots
            for (let i = 0; i <= maxSlideIndex; i++) {
                const dot = document.createElement('div');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    goToSlide(i);
                });
                sliderDots.appendChild(dot);
            }
            
            // Update buttons state
            function updateButtons() {
                prevBtn.disabled = currentPosition === 0;
                nextBtn.disabled = currentPosition >= maxSlideIndex;
                
                // Update active dot
                document.querySelectorAll('.slider-dot').forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentPosition);
                });
            }
            
            // Go to specific slide
            function goToSlide(position) {
                currentPosition = Math.max(0, Math.min(position, maxSlideIndex));
                sliderTrack.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
                updateButtons();
            }
            
            // Next slide
            nextBtn.addEventListener('click', () => {
                if (currentPosition < maxSlideIndex) {
                    goToSlide(currentPosition + 1);
                }
            });
            
            // Previous slide
            prevBtn.addEventListener('click', () => {
                if (currentPosition > 0) {
                    goToSlide(currentPosition - 1);
                }
            });
            
            // Initialize buttons
            updateButtons();
            
            // Animation on scroll
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, 100);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
            
            // Handle window resize
            window.addEventListener('resize', function() {
                const newVisibleCards = Math.floor(document.querySelector('.slider-container').offsetWidth / cardWidth);
                const newMaxSlideIndex = totalCards - newVisibleCards;
                
                if (currentPosition > newMaxSlideIndex) {
                    goToSlide(newMaxSlideIndex);
                }
            });
        });
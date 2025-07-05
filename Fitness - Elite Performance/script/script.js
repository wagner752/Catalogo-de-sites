// Typewriter Effect
        const phrases = [
            "Seu corpo reflete sua disciplina.",
            "Transformação começa com decisão.",
            "Excelência não é um acidente.",
            "O limite é onde você o coloca.",
            "Grandes resultados exigem grandes compromissos."
        ];
        
        let currentPhrase = 0;
        let currentLetter = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeWriter() {
            const element = document.getElementById('typewriter');
            
            if (isDeleting) {
                element.textContent = phrases[currentPhrase].substring(0, currentLetter - 1);
                currentLetter--;
                typingSpeed = 50;
            } else {
                element.textContent = phrases[currentPhrase].substring(0, currentLetter + 1);
                currentLetter++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && element.textContent === phrases[currentPhrase]) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end
            } else if (isDeleting && element.textContent === '') {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                typingSpeed = 500; // Pause before start
            }
            
            setTimeout(typeWriter, typingSpeed);
        }
        
        // Initialize typewriter
        document.addEventListener('DOMContentLoaded', () => {
            typeWriter();
            
            // Animate counters
            const counters = document.querySelectorAll('.counter');
            const speed = 200;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
                
                function updateCounter() {
                    const count = +counter.innerText;
                    const increment = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCounter, 1);
                    } else {
                        counter.innerText = target;
                    }
                }
            });
            
            // Initialize GSAP animations
            gsap.registerPlugin(ScrollTrigger);
            
            // Animate about section images on scroll
            gsap.from("#about-images img", {
                scrollTrigger: {
                    trigger: "#about-images",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            });
            
            // Animate philosophy slider
            const slider = document.getElementById('philosophy-slider');
            const slides = document.querySelectorAll('.philosophy-slide');
            let currentSlide = 0;
            
            function goToSlide(index) {
                if (index < 0) index = slides.length - 1;
                if (index >= slides.length) index = 0;
                
                slider.scrollTo({
                    left: slides[index].offsetLeft,
                    behavior: 'smooth'
                });
                
                currentSlide = index;
            }
            
            document.querySelector('.philosophy-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
            document.querySelector('.philosophy-next').addEventListener('click', () => goToSlide(currentSlide + 1));
            
            // Initialize tilt effect on service cards
            VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
            });
            
            // Fade in animations for about section paragraphs
            const fadeIns = document.querySelectorAll('.animate-fade-in');
            fadeIns.forEach((el, i) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    delay: i * 0.2
                });
            });
        });
        
        // Animate counters when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const increment = target / 200;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCounter, 1);
                    } else {
                        counter.innerText = target;
                    }
                    
                    function updateCounter() {
                        const count = +counter.innerText;
                        const increment = target / 200;
                        
                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCounter, 1);
                        } else {
                            counter.innerText = target;
                        }
                    }
                    
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('.counter').forEach(counter => {
            observer.observe(counter);
        });
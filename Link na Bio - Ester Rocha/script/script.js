document.addEventListener('DOMContentLoaded', function () {
    // Typing effect
    const text = "Realçando a beleza real.";
    const typingText = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                typingText.innerHTML = '';
                i = 0;
                typeWriter();
            }, 3000);
        }
    }

    typeWriter();

    // Sparkle animation
    const sparkleContainer = document.getElementById('sparkle-container');

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random size
        const size = Math.random() * 4 + 2;

        sparkle.style.left = `${x}%`;
        sparkle.style.top = `${y}%`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        // Random animation
        const duration = Math.random() * 3 + 2;
        sparkle.style.animation = `sparkleMove ${duration}s linear forwards`;

        // Add custom animation
        const keyframes = `
                    @keyframes sparkleMove {
                        0% {
                            transform: translate(0, 0) scale(1);
                            opacity: 1;
                        }
                        100% {
                            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
                            opacity: 0;
                        }
                    }
                `;

        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);

        sparkleContainer.appendChild(sparkle);

        // Remove after animation
        setTimeout(() => {
            sparkle.remove();
            style.remove();
        }, duration * 1000);
    }

    // Create initial sparkles
    for (let i = 0; i < 15; i++) {
        setTimeout(createSparkle, i * 200);
    }

    // Continuous sparkles
    setInterval(createSparkle, 300);

    // Carousel functionality
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
        });

        items[currentIndex].classList.add('active');
    }


    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    // Auto-rotate carousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 5000);

    // Modal functionality
    const portfolioBtn = document.getElementById('portfolio-btn');
    const portfolioModal = document.getElementById('portfolio-modal');
    const closePortfolioModal = document.getElementById('close-portfolio-modal');

    portfolioBtn.addEventListener('click', () => {
        portfolioModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closePortfolioModal.addEventListener('click', () => {
        portfolioModal.classList.add('hidden');
        document.body.style.overflow = '';
    });

    const bookingBtn = document.getElementById('booking-btn');
    const bookingModal = document.getElementById('booking-modal');
    const closeBookingModal = document.getElementById('close-booking-modal');

    bookingBtn.addEventListener('click', () => {
        bookingModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeBookingModal.addEventListener('click', () => {
        bookingModal.classList.add('hidden');
        document.body.style.overflow = '';
    });

    // Before/After modal
    const beforeAfterModal = document.getElementById('before-after-modal');
    const closeBeforeAfterModal = document.getElementById('close-before-after-modal');
    const beforeImage = document.getElementById('before-image');
    const afterImage = document.getElementById('after-image');

    document.querySelectorAll('.carousel-img').forEach(img => {
        img.addEventListener('click', () => {
            const modeloPath = img.getAttribute('data-modelo'); // ex: Modelo1.png
            const baseName = modeloPath.split('.')[0]; // Modelo1
            const ext = modeloPath.split('.').pop(); // png

            beforeImage.src = `img/${baseName} - antes.${ext}`;
            afterImage.src = `img/${modeloPath}`;

            beforeAfterModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });


    closeBeforeAfterModal.addEventListener('click', () => {
        beforeAfterModal.classList.add('hidden');
        document.body.style.overflow = '';
    });

    // Close modals when clicking outside
    [portfolioModal, bookingModal, beforeAfterModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    });

    // Animate elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkScroll() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial check
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});
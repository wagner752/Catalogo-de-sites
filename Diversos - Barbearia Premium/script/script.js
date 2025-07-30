document.addEventListener('DOMContentLoaded', () => {
        const videoEl = document.getElementById('hero-video');
        // Liste aqui os dois arquivos na ordem desejada
        const arquivos = [
        '../video/mixkit-barber-cutting-a-mans-beard-43227-4k.mp4',
        '../video/mixkit-barber-equipment-271-full-hd.mp4',
        '../video/mixkit-barber-cutting-hair-357-hd-ready.mp4'
        ];
        let idx = 0;

        // Quando o vídeo acabar, troca para o próximo e reinicia
        videoEl.addEventListener('ended', () => {
        idx = (idx + 1) % arquivos.length;
        const fonte = videoEl.querySelector('source');
        fonte.src = arquivos[idx];
        videoEl.load();
        videoEl.play();
        });
    });

videoEl.addEventListener('ended', () => {
    idx = (idx + 1) % arquivos.length;
    const fonte = videoEl.querySelector('source');
    fonte.src = arquivos[idx];
    videoEl.load();

    // Espera até que o vídeo esteja pronto para tocar
    videoEl.addEventListener('canplay', () => {
        videoEl.play();
    }, { once: true });
});

// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.classList.remove('bg-opacity-90');
                navbar.classList.add('bg-opacity-100');
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.classList.add('bg-opacity-90');
                navbar.classList.remove('bg-opacity-100');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.add('hidden');
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Typewriter effect
        const typewriterElement = document.getElementById('typewriter');
        const words = ['Corte', 'Barba', 'Estilo'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;
        
        function typeWriter() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 100;
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }
            
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500; // Pause before typing next word
            }
            
            setTimeout(typeWriter, typingSpeed);
        }
        
        // Start the typewriter effect
        setTimeout(typeWriter, 1000);

        // Ripple effect for buttons
        document.querySelectorAll('.ripple').forEach(button => {
            button.addEventListener('click', function(e) {
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-effect');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Modal functions
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.classList.remove('invisible');
            modal.classList.add('opacity-100');
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.classList.remove('opacity-100');
            modal.classList.add('invisible');
            document.body.style.overflow = 'auto';
        }

        // Gallery
        const galleryImages = [
            { src: 'https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg', caption: 'Corte Clássico' },
            { src: 'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg', caption: 'Barba Premium' },
            { src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg', caption: 'Ambiente Elegante' },
            { src: 'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg', caption: 'Detalhes Perfeitos' },
            { src: 'https://images.pexels.com/photos/12302331/pexels-photo-12302331.jpeg', caption: 'Toalha Quente' },
            { src: 'https://images.pexels.com/photos/2521978/pexels-photo-2521978.jpeg', caption: 'Navalha Artesanal' },
            { src: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg', caption: 'Estilo Moderno' },
            { src: 'https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg', caption: 'Produtos Premium' },
            { src: 'https://images.pexels.com/photos/2775269/pexels-photo-2775269.jpeg', caption: 'Atendimento Personalizado' }
        ];
        
        const galleryContainer = document.querySelector('#gallery .grid');
        let loadedImages = 0;
        const initialLoadCount = 6;
        
        function loadGalleryImages(count) {
            const endIndex = Math.min(loadedImages + count, galleryImages.length);
            
            for (let i = loadedImages; i < endIndex; i++) {
                const img = galleryImages[i];
                
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item overflow-hidden rounded-lg cursor-pointer';
                
                const imgElement = document.createElement('img');
                imgElement.src = img.src;
                imgElement.alt = img.caption;
                imgElement.className = 'w-full h-64 object-cover transition duration-500';
                
                galleryItem.appendChild(imgElement);
                galleryContainer.appendChild(galleryItem);
                
                // Lightbox functionality
                galleryItem.addEventListener('click', function() {
                    const lightbox = document.getElementById('lightbox');
                    const lightboxImage = document.getElementById('lightboxImage');
                    const lightboxCaption = document.getElementById('lightboxCaption');
                    
                    lightboxImage.src = img.src;
                    lightboxCaption.textContent = img.caption;
                    
                    lightbox.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                });
            }
            
            loadedImages = endIndex;
            
            // Hide load more button if all images are loaded
            if (loadedImages >= galleryImages.length) {
                document.getElementById('loadMoreBtn').classList.add('hidden');
            }
        }
        
        // Initial load
        loadGalleryImages(initialLoadCount);
        
        // Load more button
        document.getElementById('loadMoreBtn').addEventListener('click', function() {
            loadGalleryImages(3);
        });

        // Close lightbox
        document.getElementById('closeLightbox').addEventListener('click', function() {
            document.getElementById('lightbox').classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Testimonials slider
        const testimonials = [
            {
                name: 'Carlos Silva',
                role: 'Cliente VIP',
                text: 'A melhor barbearia que já frequentei. Ambiente premium, profissionais qualificados e um atendimento impecável. Recomendo!',
                photo: 'https://randomuser.me/api/portraits/men/32.jpg'
            },
            {
                name: 'Marcos Oliveira',
                role: 'Cliente desde 2018',
                text: 'Sempre saio satisfeito com o serviço. O cuidado com os detalhes e a atenção personalizada fazem toda a diferença.',
                photo: 'https://randomuser.me/api/portraits/men/44.jpg'
            },
            {
                name: 'Rafael Santos',
                role: 'Novo Cliente',
                text: 'Primeira vez que venho e já me senti em casa. Corte perfeito e a barba ficou impecável. Voltarei com certeza!',
                photo: 'https://randomuser.me/api/portraits/men/67.jpg'
            }
        ];
        
        const testimonialSlider = document.getElementById('testimonialSlider');
        let currentTestimonial = 0;
        
        function renderTestimonial(index) {
            const testimonial = testimonials[index];
            
            testimonialSlider.innerHTML = `
                <div class="testimonial-slide flex flex-col items-center text-center p-6">
                    <img src="${testimonial.photo}" alt="${testimonial.name}" class="w-20 h-20 rounded-full object-cover mb-4">
                    <h4 class="text-xl font-bold text-[var(--white)] mb-1">${testimonial.name}</h4>
                    <p class="text-[var(--gold)] mb-4">${testimonial.role}</p>
                    <p class="text-[var(--light-gray)] max-w-2xl">"${testimonial.text}"</p>
                </div>
            `;
        }
        
        // Initial render
        renderTestimonial(currentTestimonial);
        
        // Navigation
        document.getElementById('prevTestimonial').addEventListener('click', function() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            renderTestimonial(currentTestimonial);
        });
        
        document.getElementById('nextTestimonial').addEventListener('click', function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            renderTestimonial(currentTestimonial);
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            renderTestimonial(currentTestimonial);
        }, 5000);

        // Book now buttons
        document.getElementById('bookNowBtn').addEventListener('click', function() {
            window.location.href = '#booking';
        });
        
        document.getElementById('mobileBookNowBtn').addEventListener('click', function() {
            window.location.href = '#booking';
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.add('hidden');
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

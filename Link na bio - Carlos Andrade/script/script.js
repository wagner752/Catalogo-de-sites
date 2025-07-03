document.addEventListener('DOMContentLoaded', function () {
    // Create animated background elements
    createBackgroundElements();

    // Parallax effect for profile image
    setupParallax();

    // Animate links with staggered delay
    setupLinks();

    // Student counter animation
    animateCounter();

    // Motivational quotes rotation
    rotateQuotes();

    // Contact modal functionality
    setupContactModal();

});

function createBackgroundElements() {
    const container = document.getElementById('background-elements');
    const gymIcons = ['dumbbell', 'running', 'biking', 'weight-hanging', 'heartbeat'];
    const colors = ['#FFD60A', '#FFFFFF', '#FFD60A', '#FFFFFF', '#FFD60A'];

    // Add gym icons
    for (let i = 0; i < 15; i++) {
        const icon = document.createElement('i');
        const randomIcon = gymIcons[Math.floor(Math.random() * gymIcons.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        icon.className = `gym-icon fas fa-${randomIcon}`;
        icon.style.color = randomColor;
        icon.style.fontSize = `${Math.random() * 20 + 10}px`;
        icon.style.top = `${Math.random() * 100}%`;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.animationDelay = `${Math.random() * 5}s`;
        icon.style.animationDuration = `${Math.random() * 10 + 5}s`;

        container.appendChild(icon);
    }

    // Add pulse lines
    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'pulse-line';
        line.style.width = `${Math.random() * 200 + 100}px`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.left = `${Math.random() * 100}%`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = `${Math.random() * 3}s`;

        container.appendChild(line);
    }
}

function setupParallax() {
    const profileImg = document.querySelector('.profile-img');
    const container = document.getElementById('profile-container');

    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        profileImg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseenter', () => {
        profileImg.style.transition = 'none';
    });

    container.addEventListener('mouseleave', () => {
        profileImg.style.transition = 'transform 0.5s ease';
        profileImg.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    // For touch devices
    container.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const xAxis = (window.innerWidth / 2 - touch.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - touch.pageY) / 25;
        profileImg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('touchend', () => {
        profileImg.style.transition = 'transform 0.5s ease';
        profileImg.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
}
function setupLinks() {
    const links = [
        {
            icon: 'instagram',
            color: 'bg-gradient-to-r from-purple-500 to-pink-500',
            text: 'Instagram',
            url: '#',
            delay: 0.1
        },
        {
            icon: 'whatsapp',
            color: 'bg-gradient-to-r from-green-500 to-green-600',
            text: 'Agendar Consulta',
            url: '#',
            delay: 0.3
        },
        {
            icon: 'youtube',
            color: 'bg-gradient-to-r from-red-500 to-red-600',
            text: 'Treinos Online',
            url: '#',
            delay: 0.5
        },
        {
            icon: 'tiktok',
            color: 'bg-gradient-to-r from-black to-gray-700',
            text: 'Dicas Rápidas',
            url: '#',
            delay: 0.7
        },
        {
            icon: 'store',
            color: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
            text: 'Loja de Suplementos',
            url: '#',
            delay: 0.9
        }
    ];

    const container = document.getElementById('links-container');

    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = `link-btn opacity-0 animate-fade-in flex items-center justify-center p-4 rounded-lg ${link.color} text-white font-bold text-center`;
        linkElement.style.animationDelay = `${link.delay}s`;
        linkElement.style.border = "1px solid rgba(255, 255, 255, 0.1)";
        linkElement.innerHTML = `
            <i class="fab fa-${link.icon} text-xl mr-3"></i>
            <span>${link.text}</span>
        `;

        container.appendChild(linkElement);
    });
}


function animateCounter() {
    const counter = document.getElementById('student-counter');
    const target = 247;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            clearInterval(interval);
            current = target;
        }
        counter.textContent = Math.floor(current);
    }, 16);
}

function rotateQuotes() {
    const quotes = [
        '"A disciplina é a ponte entre metas e realizações."',
        '"O corpo alcança o que a mente acredita."',
        '"Não é sobre ser perfeito, é sobre ser melhor."',
        '"Sua única limitação é você mesmo."',
        '"Grandes resultados exigem grandes esforços."'
    ];

    const quoteElement = document.getElementById('motivational-quote');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % quotes.length;

        // Fade out
        quoteElement.style.opacity = 0;

        setTimeout(() => {
            quoteElement.textContent = quotes[currentIndex];
            // Fade in
            quoteElement.style.opacity = 1;
        }, 500);

    }, 5000);
}

function setupContactModal() {
    const contactButton = document.getElementById('contact-button');
    const contactModal = document.getElementById('contact-modal');
    const closeModal = document.getElementById('close-modal');

    contactButton.addEventListener('click', () => {
        contactModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        contactModal.classList.remove('active');
    });

    // Close modal when clicking outside
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
        }
    });
}

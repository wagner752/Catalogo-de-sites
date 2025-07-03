// Typing animation sem CSS, controle total por JS
document.addEventListener('DOMContentLoaded', () => {
  const phrases = [
    "Modelo & Criadora de Conteúdo",
    "Digital Artist",
    "Influencer"
  ];
  const typingElement = document.getElementById('typing-text');

  const typingSpeed = 100; // ms por caractere (mais lento = valor maior)
  const pauseTime   = 3000; // ms de leitura antes de apagar e começar próxima

  let currentPhrase = 0;

  function typeWriter(text, idx) {
    if (idx < text.length) {
      // adiciona próximo caractere
      typingElement.textContent += text.charAt(idx);
      setTimeout(() => typeWriter(text, idx + 1), typingSpeed);
    } else {
      // frase completa, aguarda leitura
      setTimeout(() => {
        // apaga tudo e vai pra próxima
        typingElement.textContent = '';
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typeWriter(phrases[currentPhrase], 0);
      }, pauseTime);
    }
  }

  // dispara a 1ª frase (pode trocar para setTimeout(typeWriter, 1000, ..., 0) se quiser delay inicial)
  typeWriter(phrases[currentPhrase], 0);





  // Parallax effect for profile image
  const parallaxImage = document.getElementById('parallax-image');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    parallaxImage.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px)`;
  });

  // Create floating lights
  function createLights() {
    const colors = ['#7A4FFF', '#00FFFF', '#FFFFFF'];
    const container = document.getElementById('lights-container');
    
    for (let i = 0; i < 8; i++) {
      const light = document.createElement('div');
      light.className = 'light';
      
      const size = Math.random() * 300 + 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      light.style.width = `${size}px`;
      light.style.height = `${size}px`;
      light.style.background = color;
      light.style.left = `${Math.random() * 100}%`;
      light.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(light);
      animateLight(light);
    }
  }
  
  function animateLight(light) {
    let x = parseFloat(light.style.left);
    let y = parseFloat(light.style.top);
    let xSpeed = (Math.random() - 0.5) * 0.2;
    let ySpeed = (Math.random() - 0.5) * 0.2;
    
    function move() {
      x += xSpeed;
      y += ySpeed;
      
      if (x > 100 || x < 0) xSpeed *= -1;
      if (y > 100 || y < 0) ySpeed *= -1;
      
      light.style.left = `${x}%`;
      light.style.top = `${y}%`;
      
      requestAnimationFrame(move);
    }
    
    move();
  }
  
  createLights();
  
  // Intersection Observer for link cards
  const linkCards = document.querySelectorAll('.link-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  linkCards.forEach(card => observer.observe(card));
});

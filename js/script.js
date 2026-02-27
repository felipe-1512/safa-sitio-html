// ========================================
// Inicializar AOS (Animate On Scroll)
// ========================================
AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: 'ease-in-out'
});

// ========================================
// Slideshow del Hero
// ========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
const totalSlides = slides.length;
let slideInterval;

const heroPhrases = [
    "Desde Maternal a Bachillerato, acompañamos cada etapa del crecimiento humano y espiritual.",
    "Educamos en base al Carisma Taboriniano y la Espiritualidad Nazarena.",
    "Todos podemos aprender, cada uno a su modo y ritmo.",
    "El aula se expande: aprender es hacer, sentir y pensar.",
    "Formamos personas críticas, libres, autónomas y comprometidas con la sociedad."
];

const heroPhraseEl = document.getElementById('heroPhrase');

function updateSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Cambiar frase con fade
    if (heroPhraseEl) {
        heroPhraseEl.classList.add('fade-out');
        setTimeout(() => {
            heroPhraseEl.textContent = heroPhrases[currentSlide];
            heroPhraseEl.classList.remove('fade-out');
        }, 400);
    }
}

function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    updateSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide(prev);
}

function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Iniciar slideshow automático
if (totalSlides > 1) {
    startAutoSlide();
    
    // Indicadores
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlide(index);
            startAutoSlide(); // Reiniciar timer
        });
    });
}

// ========================================
// Menú móvil
// ========================================
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-menu a');
const hasSubmenu = document.querySelectorAll('.has-submenu');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú al hacer click en un enlace (no en títulos con submenu)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            // No cerrar si el link abre un submenu
            if (link.closest('.has-submenu') && link.parentElement.classList.contains('has-submenu')) return;
            nav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// Submenú en móvil
hasSubmenu.forEach(item => {
    item.querySelector('a').addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('active');
        }
    });
});

// ========================================
// Header sticky y scroll
// ========================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Botón volver arriba
// ========================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Formulario de contacto
// ========================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Mostrar mensaje de envío
    formMessage.innerHTML = '<p class="sending">Enviando mensaje...</p>';
    formMessage.style.display = 'block';
    
    try {
        // Aquí puedes integrar con servicios como:
        // - Formspree: https://formspree.io
        // - EmailJS: https://www.emailjs.com
        // - O tu propio backend
        
        // Ejemplo con Formspree (reemplaza TU_FORM_ID):
        // const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
        //     method: 'POST',
        //     body: formData,
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // });
        
        // if (response.ok) {
        //     formMessage.innerHTML = '<p class="success">✓ ¡Mensaje enviado con éxito! Te responderemos pronto.</p>';
        //     contactForm.reset();
        // } else {
        //     throw new Error('Error al enviar');
        // }
        
        // Simulación (eliminar cuando integres un servicio real)
        await new Promise(resolve => setTimeout(resolve, 1500));
        formMessage.innerHTML = '<p class="success">✓ ¡Mensaje enviado! Te responderemos pronto.</p>';
        contactForm.reset();
        
    } catch (error) {
        formMessage.innerHTML = '<p class="error">✗ Hubo un error al enviar. Inténtalo nuevamente.</p>';
    }
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// ========================================
// Navegación activa según scroll
// ========================================
const sections = document.querySelectorAll('section[id]');

function activateNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavOnScroll);

// ========================================
// Smooth scroll para todos los enlaces ancla
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Mensaje de estilo para formulario
// ========================================
const style = document.createElement('style');
style.textContent = `
    .form-message {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        display: none;
    }
    
    .form-message .success {
        background-color: #D1FAE5;
        color: #065F46;
        padding: 1rem;
        border-radius: 8px;
        margin: 0;
    }
    
    .form-message .error {
        background-color: #FEE2E2;
        color: #991B1B;
        padding: 1rem;
        border-radius: 8px;
        margin: 0;
    }
    
    .form-message .sending {
        background-color: #DBEAFE;
        color: #1E40AF;
        padding: 1rem;
        border-radius: 8px;
        margin: 0;
    }
`;
document.head.appendChild(style);

// ========================================
// Logs de consola
// ========================================
console.log('%c🎓 Colegio SAFA', 'font-size: 20px; font-weight: bold; color: #2563EB;');
console.log('%cSitio desarrollado con HTML, CSS y JavaScript', 'color: #6B7280;');

// ========================================
// Lightbox para galerías de noticias
// ========================================
(function () {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<button class="lightbox-close" aria-label="Cerrar">&times;</button><img src="" alt="">';
    document.body.appendChild(overlay);

    const lightboxImg = overlay.querySelector('img');
    const closeBtn = overlay.querySelector('.lightbox-close');

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('gallery-img')) {
            lightboxImg.src = e.target.src;
            lightboxImg.alt = e.target.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });
})();

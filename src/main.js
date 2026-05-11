import './style.css';
import { Header } from './components/Header.js';
import { Categories } from './components/Categories.js';
import { Footer } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
      <section class="hero">
          <div class="hero-overlay"></div>
          <div class="hero-content">
              <h1 class="hero-title">Una Experiencia, <br><span>No Una Compra</span></h1>
              <p class="hero-subtitle">Descubre la colección exclusiva de lencería diseñada para realzar tu belleza natural con elegancia y sofisticación.</p>
              <a href="#colecciones" class="btn-primary">Descubrir Colección</a>
          </div>
      </section>

      ${Categories()}

      <section id="nosotros" class="about-section">
          <div class="container about-container">
              <h2 class="about-title">Nuestra Esencia</h2>
              <p class="about-text">En Encanto Véline, la lencería es el primer paso para celebrar tu esencia. No solo seleccionamos prendas; creamos experiencias de confianza, comodidad y seducción. Nuestra misión es recordarte que la sofisticación comienza en tu interior.</p>
          </div>
      </section>

      <section id="contacto" class="contact-section">
          <div class="contact-overlay"></div>
          <div class="container contact-container">
              <div class="contact-column contact-left">
                  <h2 class="section-title">Contáctanos</h2>
                  <p class="section-text">Estamos aquí para ofrecerte la mejor asesoría personalizada.</p>
                  <a href="https://api.whatsapp.com/send?phone=573014313926&text=Hola%20Encanto%20V%C3%A9line%20%E2%9C%A8%2C%20quisiera%20recibir%20asesor%C3%ADa." target="_blank" class="btn-whatsapp-solid">Escríbenos por WhatsApp</a>
              </div>
              <div class="contact-column contact-right">
                  <p class="social-text-large">Síguenos en nuestras redes sociales</p>
                  <div class="social-icons-large">
                      <a href="https://www.instagram.com/encantoveline/" target="_blank" class="social-link" aria-label="Instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100063749375526" target="_blank" class="social-link" aria-label="Facebook">
                          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                      </a>
                  </div>
              </div>
          </div>
      </section>
  </main>
  ${Footer()}

  <!-- Modal de Imagen -->
  <div id="imageModal" class="modal">
      <span class="modal-close">&times;</span>
      <img class="modal-content" id="modalImg">
  </div>

  <!-- Notificación Toast -->
  <div id="toast" class="toast">
    <div class="toast-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span>¡Añadido al carrito de compras! Abriendo WhatsApp...</span>
    </div>
  </div>
`;


setupUI();

function setupUI() {
    // Efecto Scroll del Encabezado
    const header = document.querySelector('.header');
    const headerContainer = document.querySelector('.header-container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerContainer.style.height = '80px';
            header.style.background = 'rgba(0, 0, 0, 0.85)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.borderBottom = 'none';
        } else {
            headerContainer.style.height = '120px';
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = 'none';
        }
    });

    // Menú Móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }

    // Modal de Zoom de Imagen
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".modal-close");
    const imageWrappers = document.querySelectorAll('.product-image-wrapper');

    imageWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function() {
            const img = this.querySelector('.product-img');
            modal.style.display = "flex";
            // Forzar repintado (reflow)
            void modal.offsetWidth;
            modal.classList.add('show');
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });

    // Toast de Añadido al Carrito
    const buyButtons = document.querySelectorAll('.btn-block');
    const toast = document.getElementById("toast");

    buyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {

            toast.classList.add("show");
            setTimeout(function(){ toast.classList.remove("show"); }, 3000);
        });
    });
}

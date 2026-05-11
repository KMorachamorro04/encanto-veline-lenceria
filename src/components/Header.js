export function Header() {
    return `
    <header class="header">
        <div class="header-container">
            <a href="#" class="logo-link">
                <img src="/logo.png" alt="Encanto Véline" class="logo-img">
            </a>
            <button class="mobile-menu-btn" aria-label="Abrir menú">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <nav class="nav">
                <a href="#colecciones" class="nav-link">Colecciones</a>
                <a href="#nosotros" class="nav-link">Nosotros</a>
                <a href="#contacto" class="nav-link">Contacto</a>
            </nav>
        </div>
    </header>
    `;
}

export function Footer() {
    return `
    <footer class="footer">
        <div class="footer-container">
            <p class="footer-text">&copy; 2026 Encanto Véline. Todos los derechos reservados.</p>
            <div class="footer-links">
                <a href="#">Privacidad</a>
                <a href="#">Términos</a>
            </div>
        </div>
    </footer>

    <a href="https://api.whatsapp.com/send?phone=573014313926&text=Hola%20Encanto%20V%C3%A9line%20%E2%9C%A8%2C%20%C2%BFMe%20podr%C3%ADas%20dar%20asesor%C3%ADa%3F"
        class="whatsapp-float" target="_blank">
        <span class="wa-tooltip">¿Necesitas asesoría?</span>
        <!-- Ícono de WhatsApp -->
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M12.01 2.014c-5.46 0-9.89 4.44-9.89 9.89 0 1.74.45 3.39 1.27 4.88L2 22l5.37-1.39c1.45.79 3.06 1.2 4.64 1.2 5.46 0 9.89-4.44 9.89-9.89 0-5.45-4.43-9.89-9.89-9.89zm5.35 14.18c-.23.63-1.34 1.21-1.85 1.25-.49.04-1.12.16-3.15-.68-2.48-1.03-4.06-3.56-4.18-3.73-.13-.16-1-1.33-1-2.54s.62-1.8 1-2.07c.28-.2.63-.26.85-.26.23 0 .47 0 .66.01.21.01.49-.08.77.58.28.67.97 2.37 1.05 2.54.09.16.15.35.05.55-.09.2-.14.31-.28.48-.14.16-.29.35-.42.48-.14.14-.29.29-.12.58.17.29.75 1.24 1.62 2.02 1.11.99 2.02 1.3 2.32 1.44.3.14.47.12.65-.08.18-.21.78-.9 1-1.21.21-.31.43-.26.7-.16.28.1 1.76.83 2.06.98.31.15.52.23.59.35.08.13.08.74-.15 1.37z" />
        </svg>
    </a>
    `;
}

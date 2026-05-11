const products = [
    {
        id: 1,
        title: "Conjunto Seducción",
        price: "$40.000 COP",
        img: "/prod1.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Conjunto Seducción que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 2,
        title: "Colección Bralette Divine x4",
        price: "<span class='price-old'>$140.000 COP</span> <span class='price-new'>$99.900 COP</span>",
        img: "/prod2.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en la Colección Bralette Divine x4 que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 3,
        title: "Cofre de Sedas & Encanto",
        price: "<span class='price-old'>$55.000 COP</span> <span class='price-new'>$39.900 COP</span>",
        img: "/prod3.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Cofre de Sedas & Encanto que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 4,
        title: "Colección Personajes Mágicos",
        price: "$35.000 COP",
        img: "/prod4.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en la Colección Personajes Mágicos que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 5,
        title: "Panties Dama",
        price: "$15.000 COP",
        img: "/prod5.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en los Panties Dama que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 6,
        title: "Panties Dama",
        price: "$15.000 COP",
        img: "/prod6.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en los Panties Dama que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 7,
        title: "Tanga Hilo Corrediza",
        price: "$7.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto1.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en la Tanga Hilo Corrediza que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 8,
        title: "Tanga Brasilera Hilo en Encaje",
        price: "$8.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto3.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en la Tanga Brasilera Hilo en Encaje que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 9,
        title: "Tanga Mariposa Sensual",
        price: "$8.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto4.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en la Tanga Mariposa Sensual que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 10,
        title: "Cachetero en Encaje",
        price: "$10.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto5.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Cachetero en Encaje que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 11,
        title: "Cachetero Encaje Talla Plus",
        price: "$15.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto6.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Cachetero Encaje Talla Plus que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 12,
        title: "Conjunto Sensual 'Noche'",
        price: "$45.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto7.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Conjunto Sensual 'Noche' que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 13,
        title: "Croptop en Encaje Básico",
        price: "$20.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto8.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Croptop en Encaje Básico que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 14,
        title: "Panty Blanco",
        price: "$15.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto9.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Panty Blanco que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 15,
        title: "Body Suit Rosado Suave",
        price: "$35.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto10.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Body Suit Rosado Suave que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 16,
        title: "Body Suit Azul Eléctrico",
        price: "$28.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto11.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Body Suit Azul Eléctrico que vi en la página web. ¿Me podrías dar más información?"
    },
    {
        id: 17,
        title: "Body Suit Nocturno",
        price: "$45.000 COP",
        img: "https://lambent-griffin-42f3d1.netlify.app/producto12.png",
        whatsappMsg: "Hola Encanto Véline ✨, estoy interesada en el Body Suit Nocturno que vi en la página web. ¿Me podrías dar más información?"
    }
];

export function Categories() {
    return `
    <section id="colecciones" class="spacer-section">
        <div class="container">
            <h2 class="section-title">Elegancia Atemporal</h2>
            <p class="section-text">Explora nuestras exclusivas colecciones de lencería.</p>

            <div class="catalog-grid">
                ${products.map(product => `
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <img src="${product.img}" alt="${product.title}" class="product-img">
                        <div class="zoom-indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-price">${product.price}</p>
                        <a href="https://api.whatsapp.com/send?phone=573014313926&text=${encodeURIComponent(product.whatsappMsg)}"
                            class="btn-block" target="_blank">
                            PEDIR POR WHATSAPP 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-left: 5px; vertical-align: middle; margin-bottom: 2px;">
                                <path d="M12.01 2.014c-5.46 0-9.89 4.44-9.89 9.89 0 1.74.45 3.39 1.27 4.88L2 22l5.37-1.39c1.45.79 3.06 1.2 4.64 1.2 5.46 0 9.89-4.44 9.89-9.89 0-5.45-4.43-9.89-9.89-9.89zm5.35 14.18c-.23.63-1.34 1.21-1.85 1.25-.49.04-1.12.16-3.15-.68-2.48-1.03-4.06-3.56-4.18-3.73-.13-.16-1-1.33-1-2.54s.62-1.8 1-2.07c.28-.2.63-.26.85-.26.23 0 .47 0 .66.01.21.01.49-.08.77.58.28.67.97 2.37 1.05 2.54.09.16.15.35.05.55-.09.2-.14.31-.28.48-.14.16-.29.35-.42.48-.14.14-.29.29-.12.58.17.29.75 1.24 1.62 2.02 1.11.99 2.02 1.3 2.32 1.44.3.14.47.12.65-.08.18-.21.78-.9 1-1.21.21-.31.43-.26.7-.16.28.1 1.76.83 2.06.98.31.15.52.23.59.35.08.13.08.74-.15 1.37z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. Animação de Scroll Suave (Fade-in)
    // Seleciona todos os elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll(
        '.content-section h2, .about-container, .module-card, .pricing-card, .testimonial-card'
    );

    // Configura o "Intersection Observer"
    // Isso observa quando um elemento entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento para não animar de novo
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Anima quando 10% do elemento estiver visível
    });

    // Pede ao observer para observar cada elemento selecionado
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });


    // 2. Rolagem suave para links âncora (menu)
    const navLinks = document.querySelectorAll('.nav-links a, .hero-cta, .nav-cta');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão do link
            e.preventDefault();
            
            // Pega o ID do alvo (ex: "#precos")
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula a posição do elemento + o offset do header fixo
                const headerOffset = 70; // Altura do seu navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Rola suavemente até a posição
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});

// Adicione este CSS extra no seu arquivo style.css para a animação funcionar:
/*
.content-section h2,
.about-container,
.module-card,
.pricing-card,
.testimonial-card {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.visible {
    opacity: 1;
    transform: translateY(0);
}
*/
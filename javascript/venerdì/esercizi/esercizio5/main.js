/**
 * PICHU STREETWEAR - Core Interactive Script
 * Gestione Dark/Light Mode, Accordion FAQ e Validazione Form
 */

const initPichuApp = () => {
    
    // ==========================================
    // 1. GESTIONE THEME SWITCH (LIGHT/DARK MODE)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Recupera tema salvato o imposta 'dark' come default
    const savedTheme = localStorage.getItem('pichu-theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonText(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('pichu-theme', newTheme);
            updateThemeButtonText(newTheme);
        });
    }

    function updateThemeButtonText(theme) {
        if (!themeToggleBtn) return;
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = `<span class="theme-icon">⚡</span> DARK`;
        } else {
            themeToggleBtn.innerHTML = `<span class="theme-icon">☀️</span> LIGHT`;
        }
    }

    // ==========================================
    // 2. COMPONENTE ACCORDION (FAQ)
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            const currentHeader = e.currentTarget;
            const currentItem = currentHeader.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Chiude tutti gli accordion aperti nella pagina
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const badgeSpan = item.querySelector('.accordion-header span');
                if (badgeSpan) badgeSpan.textContent = '+';
            });

            // Se l'elemento cliccato non era attivo, lo apre
            if (!isActive) {
                currentItem.classList.add('active');
                const badgeSpan = currentHeader.querySelector('span');
                if (badgeSpan) badgeSpan.textContent = '−';
            }
        });
    });

    // ==========================================
    // 3. VALIDAZIONE FORM CONTATTI
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const fields = ['nome', 'email', 'oggetto', 'messaggio'];

            fields.forEach(fieldId => {
                const input = document.getElementById(fieldId);
                if (!input) return;

                const parent = input.parentElement;

                if (!input.value.trim()) {
                    parent.classList.add('invalid');
                    isValid = false;
                } else if (fieldId === 'email' && !validateEmail(input.value)) {
                    parent.classList.add('invalid');
                    isValid = false;
                } else {
                    parent.classList.remove('invalid');
                }
            });

            const feedback = document.getElementById('form-feedback');
            if (isValid && feedback) {
                feedback.textContent = "⚡ Messaggio inviato con successo alla base Pichu! Ti risponderemo a breve.";
                feedback.className = "form-feedback success";
                contactForm.reset();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
};

// Esecuzione al completamento del caricamento del DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPichuApp);
} else {
    initPichuApp();
}
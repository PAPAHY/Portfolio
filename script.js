document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const navLinks = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links');

    // Gestion des onglets
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le saut vers l'ancre

            // 1. Gestion de la classe active sur les liens
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            // 2. Gestion de l'affichage du contenu
            const targetTab = link.getAttribute('data-tab');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });

            // 3. Fermer le menu mobile après le clic
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Gestion du menu mobile (Hamburger)
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Gestion de l'animation au scroll (optionnel mais sympa)
    // Ici on s'assure juste que l'onglet par défaut est bien affiché
    // (Géré par HTML/CSS via la classe .active par défaut, mais sécurité JS)
    if (!document.querySelector('.tab-content.active')) {
        document.getElementById('home').classList.add('active');
        document.querySelector('[data-tab="home"]').classList.add('active');
    }
});

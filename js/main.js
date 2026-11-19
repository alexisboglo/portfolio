// Année dynamique dans le footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Fallback si le portrait est absent ou impossible à charger

// 1. Recherche de la première image située dans .portrait-frame
const portrait = document.querySelector(".portrait-frame img");

// 2. Vérification de l'existence de l'image dans le HTML
if (portrait) {
    // 3. Création d'une fonction qui signale l'absence du portrait
    const markEmpty = () => {
        // Récupération du parent de l'image et ajout de la classe CSS
        portrait.parentElement.classList.add("is-empty");
    };

    // 4. Écoute des erreurs de chargement de l'image
    portrait.addEventListener("error", markEmpty);

    // 5. Vérification si le chargement est déjà terminé
    // et si l'image n'a pas pu être chargée
    if (portrait.complete && portrait.naturalWidth === 0) {
        // Appliquer le traitement de secours
        markEmpty();
    }
}

// Révélation douce au scroll
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".section-head, .exp-item, .project-card, .skill-group, .formation").forEach((el) => {
        el.classList.add("reveal");
        observer.observe(el);
    });
}

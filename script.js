document.addEventListener('scroll', () => {
    const title = document.getElementById('title');
    const rect = title.getBoundingClientRect();
    const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
    if (inViewport) {
      // Ajouter la classe visible et d'animation
      title.classList.add('visible');
      title.classList.add('animate');
  
      // Enlever la classe d'animation après un délai pour permettre une nouvelle animation lors du prochain scroll
      setTimeout(() => {
        title.classList.remove('animate');
      }, 1000); // Durée de l'animation (1s) en millisecondes
    } else {
      // Optionnel: enlever la classe visible lorsque l'élément est hors de la vue
      title.classList.remove('visible');
    }
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    gridItems.forEach(item => {
        observer.observe(item);
    });
});

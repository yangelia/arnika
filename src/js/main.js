import './components.js';

// Service accordion
document.querySelectorAll('.service-cat__header').forEach(header => {
  header.addEventListener('click', () => {
    const cat    = header.closest('.service-cat');
    const isOpen = cat.classList.contains('is-open');
    document.querySelectorAll('.service-cat').forEach(c => {
      c.classList.remove('is-open');
      c.querySelector('.service-cat__header')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      cat.classList.add('is-open');
      header.setAttribute('aria-expanded', 'true');
    }
  });
  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
  });
});

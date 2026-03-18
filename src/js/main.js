// Mobile menu
const burger = document.querySelector('.burger');
const nav    = document.querySelector('.header__nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// Active nav link — mark current page
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(link => {
  const href = link.getAttribute('href')?.split('/').pop() || '';
  if (href === page || (page === '' && href === 'index.html')) {
    link.classList.add('nav__link--active');
  }
});

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
  // Keyboard support
  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
  });
});

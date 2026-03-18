const cards = document.querySelectorAll('.doctor-card');
const tabs  = document.querySelectorAll('.filter-tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('filter-tab--active'));
    tab.classList.add('filter-tab--active');

    const filter = tab.dataset.filter;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.spec === filter;
      card.style.display = match ? '' : 'none';
    });
  });
});

// === APP HEADER ===
class AppHeader extends HTMLElement {
  connectedCallback() {
    const active = this._detectPage();

    const links = [
      { href: '/index.html',    id: 'index',    label: 'Головна'  },
      { href: '/services.html', id: 'services', label: 'Послуги'  },
      { href: '/doctors.html',  id: 'doctors',  label: 'Лікарі'   },
      { href: '/about.html',    id: 'about',    label: 'Про нас'  },
      { href: '/contacts.html', id: 'contacts', label: 'Контакти' },
    ];

    const navItems = links
      .map(l => `<a href="${l.href}" class="nav__link${active === l.id ? ' nav__link--active' : ''}">${l.label}</a>`)
      .join('\n        ');

    const tpl = document.createElement('template');
    tpl.innerHTML = `
<header class="header">
  <div class="container">
    <div class="header__inner">
      <a href="/index.html" class="header__logo" aria-label="Арніка — на головну">
        <img src="/logo-Arnika-top.svg" alt="" width="60" height="60" aria-hidden="true">
        <div class="header__logo-text">
          <span class="header__logo-name">ArnikA</span>
          <span class="header__logo-sub">Medical Center</span>
        </div>
      </a>
      <nav class="header__nav" aria-label="Головне меню">
        ${navItems}
      </nav>
      <div class="header__actions">
        <a href="/contacts.html#booking" class="btn btn--primary btn--sm header__cta">Записатись</a>
        <a href="tel:+380482700001" class="header__phone" aria-label="Зателефонувати в клініку">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
      </div>
      <button class="burger" aria-label="Відкрити меню" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

    const header = tpl.content.firstElementChild;
    this.parentNode.insertBefore(header, this);
    this.remove();

    this._initMenu(header);
  }

  _detectPage() {
    const path = location.pathname;
    if (path.includes('/doctors/')) return 'doctors';
    const name = path.split('/').pop().replace('.html', '');
    return name || 'index';
  }

  _initMenu(header) {
    const burger = header.querySelector('.burger');
    const nav    = header.querySelector('.header__nav');
    if (!burger || !nav) return;

    // Inject "Записатись" into mobile nav
    const cta = header.querySelector('.header__cta');
    if (cta) {
      const clone = cta.cloneNode(true);
      clone.classList.remove('btn--sm', 'header__cta');
      clone.classList.add('btn--lg', 'nav__cta-clone');
      nav.appendChild(clone);
    }

    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('.nav__link, a.btn').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

// === APP FOOTER ===
class AppFooter extends HTMLElement {
  connectedCallback() {
    const tpl = document.createElement('template');
    tpl.innerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <img src="/logo-arnika.svg" alt="Арніка Медичний Центр" class="footer__logo" width="52" height="47">
        <p class="footer__tagline">Сімейний медичний центр у Одесі.<br>Турбота про здоров'я з 2003 року.</p>
      </div>
      <div>
        <p class="footer__heading">Навігація</p>
        <nav class="footer__links" aria-label="Футер навігація">
          <a href="/index.html"    class="footer__link">Головна</a>
          <a href="/services.html" class="footer__link">Послуги</a>
          <a href="/doctors.html"  class="footer__link">Лікарі</a>
          <a href="/about.html"    class="footer__link">Про нас</a>
          <a href="/contacts.html" class="footer__link">Контакти</a>
        </nav>
      </div>
      <div>
        <p class="footer__heading">Контакти</p>
        <div class="footer__contact">
          <a href="tel:+380482700001" class="footer__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            (048) 700-00-01
          </a>
          <a href="tel:+380482700002" class="footer__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            (048) 700-00-02
          </a>
          <p class="footer__hours">Пн–Пт: 8:00–20:00<br>Сб: 9:00–16:00<br>Нд: вихідний</p>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__copy">© 2025 Арніка Медичний Центр. Всі права захищені.</span>
      <span class="footer__copy">Реєстраційний номер: 4355 від 2003 р.</span>
    </div>
  </div>
</footer>`;

    const footer = tpl.content.firstElementChild;
    this.parentNode.insertBefore(footer, this);
    this.remove();
  }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);

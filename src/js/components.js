// === APP HEADER ===
class AppHeader extends HTMLElement {
  connectedCallback() {
    const active = this._detectPage();

    const links = [
      { href: "/index.html", id: "index", label: "Головна" },
      { href: "/services.html", id: "services", label: "Послуги" },
      { href: "/doctors.html", id: "doctors", label: "Лікарі" },
      { href: "/about.html", id: "about", label: "Про нас" },
      { href: "/contacts.html", id: "contacts", label: "Контакти" },
    ];

    const navItems = links
      .map((l) => {
        if (l.id === "services") {
          return `<div class="nav__drop${active === "services" ? " nav__drop--active" : ""}">
          <a href="/services.html" class="nav__link nav__drop-trigger${active === "services" ? " nav__link--active" : ""}">
            ${l.label}<svg class="nav__drop-chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg>
          </a>
          <div class="nav__drop-menu">
            <a href="/services.html" class="nav__drop-link nav__drop-link--all">Всі послуги →</a>
            <a href="/services.html#diagnostics" class="nav__drop-link">Діагностика</a>
            <a href="/services.html#procedures" class="nav__drop-link">Лікувальні процедури</a>
            <a href="/services.html#apparatus" class="nav__drop-link">Апаратна терапія</a>
            <a href="/services.html#prices" class="nav__drop-link">Прайс</a>
          </div>
        </div>`;
        }
        return `<a href="${l.href}" class="nav__link${active === l.id ? " nav__link--active" : ""}">${l.label}</a>`;
      })
      .join("\n        ");

    const logoInner = `
        <img src="/logo-Arnika-top.svg" alt="" width="60" height="60" aria-hidden="true">
        <div class="header__logo-text">
          <span class="header__logo-name">ArnikA</span>
          <span class="header__logo-sub">Medical Center</span>
        </div>`;
    const logoEl = active === 'index'
      ? `<span class="header__logo" aria-label="Арніка Медичний Центр">${logoInner}</span>`
      : `<a href="/index.html" class="header__logo" aria-label="Арніка — на головну">${logoInner}</a>`;

    const tpl = document.createElement("template");
    tpl.innerHTML = `
<header class="header">
  <div class="container">
    <div class="header__inner">
      ${logoEl}
      <nav class="header__nav" aria-label="Головне меню">
        ${navItems}
      </nav>
      <div class="header__actions">
        <!-- <a href="/contacts.html#booking" class="btn btn--primary btn--sm header__cta">Записатись</a> -->
        <div class="header__phones">
          <address class="header__address">
            <span>м. Одеса,</span>
            <span>вул. Успенська, 59</span>
          </address>
          <div class="phones-drop">
            <button class="phones-trigger" aria-expanded="false" aria-haspopup="listbox">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>+38 (0482) 377-626</span>
              <svg class="phones-chevron" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
            <div class="phones-menu" hidden role="listbox">
              <a href="tel:+380482377626" class="phones-menu__item">+38 (0482) 377-626</a>
              <a href="tel:+380482379275" class="phones-menu__item">+38 (0482) 379-275</a>
              <a href="tel:+380674850428" class="phones-menu__item">+38 (067) 485-04-28</a>
            </div>
          </div>
        </div>
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
    if (path.includes("/doctors/")) return "doctors";
    const name = path.split("/").pop().replace(".html", "");
    return name || "index";
  }

  _initMenu(header) {
    const burger = header.querySelector(".burger");
    const nav = header.querySelector(".header__nav");
    if (!burger || !nav) return;

    // // Inject "Записатись" into mobile nav — disabled
    // const cta = header.querySelector(".header__cta");
    // if (cta) {
    //   const clone = cta.cloneNode(true);
    //   clone.classList.remove("btn--sm", "header__cta");
    //   clone.classList.add("btn--lg", "nav__cta-clone");
    //   nav.appendChild(clone);
    // }

    // Divider + contact info block in mobile nav
    nav.insertAdjacentHTML("beforeend", `
      <div class="nav__divider"></div>
      <div class="nav__contacts">
        <a href="tel:+380482377626" class="nav__contact-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          +38 (0482) 377-626
        </a>
        <a href="tel:+380482379275" class="nav__contact-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          +38 (0482) 379-275
        </a>
        <a href="tel:+380674850428" class="nav__contact-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          +38 (067) 485-04-28
        </a>
        <p class="nav__contact-address">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          вул. Успенська, 59, Одеса
        </p>
      </div>
    `);

    // Services submenu — click toggle on mobile (hover handled by CSS on desktop)
    const dropTrigger = header.querySelector(".nav__drop-trigger");
    const dropMenu = header.querySelector(".nav__drop-menu");
    if (dropTrigger && dropMenu) {
      dropTrigger.addEventListener("click", (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = dropMenu.classList.toggle("is-open");
          dropTrigger.setAttribute("aria-expanded", String(isOpen));
        }
      });
    }

    // Phones dropdown
    const phonesTrigger = header.querySelector(".phones-trigger");
    const phonesMenu = header.querySelector(".phones-menu");
    if (phonesTrigger && phonesMenu) {
      phonesTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const opening = phonesMenu.hidden;
        phonesMenu.hidden = !opening;
        phonesTrigger.setAttribute("aria-expanded", String(opening));
      });
      document.addEventListener("click", () => {
        phonesMenu.hidden = true;
        phonesTrigger.setAttribute("aria-expanded", "false");
      });
    }

    // Callback modal
    const callbackBtn = header.querySelector(".btn-callback");
    if (callbackBtn && !document.getElementById("callbackModal")) {
      document.body.insertAdjacentHTML("beforeend", `
        <div class="callback-overlay" id="callbackModal" hidden>
          <div class="callback-modal" role="dialog" aria-modal="true" aria-labelledby="callbackTitle">
            <button class="callback-close" aria-label="Закрити">&times;</button>
            <h3 id="callbackTitle" class="callback-modal__title">Передзвонить мені</h3>
            <p class="callback-modal__sub">Залиште номер — ми зателефонуємо вам у найближчий час</p>
            <form class="callback-form" novalidate>
              <input class="callback-input" type="text" name="name" placeholder="Ваше ім'я" autocomplete="name">
              <input class="callback-input" type="tel" name="phone" placeholder="+38 (0__) ___-__-__" autocomplete="tel" required>
              <button type="submit" class="btn btn--primary callback-submit">Надіслати запит</button>
            </form>
          </div>
        </div>
      `);
      const modal = document.getElementById("callbackModal");
      const closeModal = () => { modal.hidden = true; document.body.style.overflow = ""; };
      callbackBtn.addEventListener("click", () => { modal.hidden = false; document.body.style.overflow = "hidden"; });
      modal.querySelector(".callback-close").addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
      modal.querySelector(".callback-form").addEventListener("submit", (e) => {
        e.preventDefault();
        modal.querySelector(".callback-form").innerHTML = '<p class="callback-success">Дякуємо! Ми зателефонуємо вам найближчим часом.</p>';
        setTimeout(closeModal, 2500);
      });
    }

    // Backdrop for partial-width mobile nav
    const backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);

    const closeNav = () => {
      nav.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Відкрити меню");
      document.body.style.overflow = "";
    };

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      backdrop.classList.toggle("is-open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    backdrop.addEventListener("click", closeNav);

    nav.querySelectorAll(".nav__link:not(.nav__drop-trigger), .nav__drop-link, a.btn").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
  }
}

// === APP FOOTER ===
class AppFooter extends HTMLElement {
  connectedCallback() {
    const tpl = document.createElement("template");
    tpl.innerHTML = `
<footer class="footer">
  <div class="container">

    <!-- Logo centered -->
    <div class="footer__brand">
      <img src="/logo-arnika.svg" alt="Арніка Медичний Центр" class="footer__logo" width="80" height="72">
    </div>

    <div class="footer__grid">

      <!-- Col 1: info -->
      <div>
        <p class="footer__tagline">Багатопрофільний<br>медичний центр в Одесі</p>
        <address class="footer__addr">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          м. Одеса, вул. Успенська, 59
        </address>
        <p class="footer__hours">
          <span>Пн–Пт: 8:00–20:00</span>
          <span>Сб: 9:00–16:00</span>
          <span>Нд: вихідний</span>
        </p>
      </div>

      <!-- Col 2: Navigation -->
      <div>
        <p class="footer__heading">Навігація</p>
        <nav class="footer__links" aria-label="Футер навігація">
          <a href="/index.html"    class="footer__link">Головна</a>
          <a href="/doctors.html"  class="footer__link">Лікарі</a>
          <a href="/about.html"    class="footer__link">Про нас</a>
          <a href="/contacts.html" class="footer__link">Контакти</a>
        </nav>
      </div>

      <!-- Navigation col 2 — Послуги + submenu -->
      <div>
        <p class="footer__heading">Послуги</p>
        <nav class="footer__links" aria-label="Послуги">
          <a href="/services.html" class="footer__link">Усі послуги</a>
          <a href="/services.html#diagnostics" class="footer__sublink">— Діагностика</a>
          <a href="/services.html#procedures"  class="footer__sublink">— Лікувальні процедури</a>
          <a href="/services.html#apparatus"   class="footer__sublink">— Апаратна терапія</a>
          <a href="/services.html#prices"      class="footer__sublink">— Прайс</a>
        </nav>
      </div>

      <!-- Contacts -->
      <div>
        <p class="footer__heading">Контакти</p>
        <div class="footer__contact">
          <a href="tel:+380482377626" class="footer__phone">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            +38 (0482) 377-626
          </a>
          <a href="tel:+380482379275" class="footer__phone">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            +38 (0482) 379-275
          </a>
          <a href="tel:+380674850428" class="footer__phone">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            +38 (067) 485-04-28
          </a>
        </div>
      </div>

    </div>
    <div class="footer__bottom">
      <span class="footer__copy">© 2026 Арніка Медичний Центр. Всі права захищені.</span>
      <span class="footer__copy">Реєстраційний номер: 4355 від 2003 р.</span>
      <span class="footer__dev">dev Wellme</span>
    </div>
  </div>
</footer>`;

    const footer = tpl.content.firstElementChild;
    this.parentNode.insertBefore(footer, this);
    this.remove();
  }
}

customElements.define("app-header", AppHeader);
customElements.define("app-footer", AppFooter);

console.log(
  "%c\n" +
  "  ╔══════════════════════════════════════════╗\n" +
  "  ║                                          ║\n" +
  "  ║   🌿  Arnika Medical Center — Odesa      ║\n" +
  "  ║                                          ║\n" +
  "  ║   Designed & developed by  W E L L M E   ║\n" +
  "  ║   wellme.com.ua                          ║\n" +
  "  ║                                          ║\n" +
  "  ╚══════════════════════════════════════════╝\n",
  "color: #007D49; font-family: monospace; font-size: 13px;"
);

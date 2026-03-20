# Арніка — Багатопрофільний Медичний Центр

Офіційний сайт медичного центру «Арніка» (Одеса, вул. Успенська 59).
Клініка працює з 2003 року, реєстраційний номер 4355.

Розроблено: **Wellme**

---

## Про сайт

Багатосторінковий статичний сайт — редизайн www.arnika.od.ua.
Мова: українська. Деплой: Vercel.

## Стек

- **Vite 5** — збірка та dev-сервер (multi-page)
- **HTML5** — семантична розмітка, ARIA
- **CSS3** — custom properties, CSS Grid/Flexbox, без фреймворків
- **Vanilla JS** — Web Components (header/footer), мобільне меню, акордеон, фільтр лікарів

## Структура

```
src/
├── index.html            # Головна
├── services.html         # Послуги (акордеон прайс-листа)
├── doctors.html          # Лікарі (фільтр за спеціалізацією)
├── about.html            # Про нас
├── contacts.html         # Контакти + форма запису
├── doctors/              # 12 сторінок профілів лікарів
├── css/
│   ├── base.css          # Reset, design tokens, типографіка, grid
│   ├── layout.css        # Header, footer, nav, адаптив
│   └── components.css    # Кнопки, картки, hero, акордеон, форми
└── js/
    ├── components.js     # Web Components: AppHeader + AppFooter
    │                     # (мобільне меню, бургер, phones dropdown,
    │                     #  callback-модал, backdrop)
    ├── main.js           # Ініціалізація компонентів
    └── doctors.js        # Фільтр лікарів за спеціалізацією

public/
├── logo-arnika.svg
├── favicon-arnika.svg
├── lines.svg             # Декоративна хвиля (hero, methods-section)
├── doctor.svg            # Placeholder фото лікаря
└── img-arnika-*.webp     # Фото для карток послуг та hero
```

## Функціонал

| Компонент | Опис |
|---|---|
| Header | Sticky, логотип, навігація з dropdown «Послуги», телефони з випадним списком, callback-модал |
| Burger menu | Часткова ширина (50% mobile / 36% tablet), blurred backdrop, burger→cross анімація |
| Footer | 4 колонки, адаптивна сітка (tablet 2×2, mobile stack), лого по центру |
| Прайс-лист | Акордеон з 6 категоріями послуг |
| Лікарі | Фільтр за спеціалізацією, картки з переходом по кліку |
| Профіль лікаря | Картки послуг, timeline досвіду |

## Локальний запуск

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # збірка → dist/
```

## Деплой (Vercel)

| Параметр | Значення |
|---|---|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

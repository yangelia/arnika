# Арніка — Сімейний Медичний Центр

Офіційний сайт медичного центру «Арніка» (Одеса, вул. Успенська 59).
Клініка працює з 2003 року, реєстраційний номер 4355.

## Про сайт

Багатосторінковий статичний сайт — редизайн www.arnika.od.ua.
Мова: українська. Деплой: Vercel.

## Стек

- **Vite 5** — збірка та dev-сервер (multi-page)
- **HTML5** — семантична розмітка, ARIA
- **CSS3** — custom properties, Flexbox/Grid, без фреймворків
- **Vanilla JS** — мобільне меню, фільтр лікарів, акордеон

## Структура

```
src/
├── index.html          # Головна
├── services.html       # Послуги (акордеон)
├── doctors.html        # Лікарі (фільтр за спеціалізацією)
├── about.html          # Про нас
├── contacts.html       # Контакти + форма запису
├── doctors/            # 12 сторінок лікарів
├── css/
│   ├── base.css        # Reset, токени, типографіка
│   ├── layout.css      # Header, footer
│   └── components.css  # Кнопки, картки, форми
└── js/
    ├── main.js         # Меню, акордеон
    └── doctors.js      # Фільтр лікарів

public/
├── logo-arnika.svg
├── favicon-arnika.svg
├── doctor.svg          # Placeholder фото лікаря
└── 5300.webp           # Hero-фото
```

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

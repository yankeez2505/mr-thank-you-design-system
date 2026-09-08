# Mr. Thank You — Design System

Дизайн-система, собранная напрямую из исходных файлов. Ни один токен не придуман: цвета, размеры, обводки, тени и текстовые стили извлечены парсингом бинарного формата `.fig` и совпадают с макетами.

**Источники**
- `MrThankYou.fig` — бренд-направление, Y2K / candy-pop. Экран `DesktopFull_2`, 1440×5026.
- `Mr Thank You.fig` — направление магазина, чистый e-commerce. Экран `Main Screen`, 1440×4179.
- `ИСХОДНИКИ Mr Thank You/` — оригинальные логотипы (PNG + AI) и фото носителей.

**Точка входа:** открой `index.html` в браузере. Цвета копируются кликом, логотипы, шрифты и иконки скачиваются, все отступы и радиусы показаны в реальном размере.

---

## CONTENT FUNDAMENTALS

Тон бренда — прямой, короткий, в императиве. Всё, что кричит — капсом; всё, что объясняет — обычным регистром.

| Роль | Как звучит | Примеры из макетов |
|---|---|---|
| Заголовок-манифест | 2–4 слова, капс, без точки | `REP THE VIBE`, `WHERE TO BUY`, `OUR MISSION IS` |
| Подзаголовок | одно предложение с точкой | `Grab our freshest gear and make it your own.` |
| Кнопка | глагол + объект, капс | `SHOP NOW`, `SHOP ALL`, `FIND A STORE`, `LEARN MORE`, `SIGN UP` |
| Навигация | существительное, капс | `SHOP`, `OUR STORY`, `AVAILABLE WORLDWIDE` |
| Категория | существительное, Title Case | `Headwear`, `T-shirts`, `Home & Sleep`, `Accessories` |
| Миссия | утверждение от «мы» | `We are dedicated to closing the gap between where you are and where you aim to be.` |
| Цифра | число + `+`, подпись под ним | `46,562,572+` / `Individuals Fed` |
| Копирайт | без символа © в бренде, с © в магазине | `2026 MR. Thank you` · `©2026 MR. THANK YOU. All rights reserved` |

Правила:
- Название пишется `MR. Thank You` — капс на «MR.», Title Case на «Thank You». В магазине допускается полный капс `MR. THANK YOU`.
- Кнопка не описывает, а командует. `Shop All To Support` — исключение магазина, там допустим Title Case.
- Плейсхолдеры: `YOUR EMAIL` (бренд, капс), `Enter your email` (магазин, обычный).
- Бейджи товара: `NEW`, `SALE`, `Sold Out`.

## VISUAL FOUNDATIONS

**Два направления. Они несовместимы.**

| | Бренд (Y2K) | Магазин |
|---|---|---|
| Фон страницы | `#FA6794` розовый | `#FFFFFF` белый |
| Контур | 4px чёрным на всём (203 объекта) | 1px `#DEE1E4` или без |
| Тень | жёсткая 10,10 без размытия | мягкая `0 14px 24px rgba(0,0,0,.1)` |
| Радиус | 10 / 30 / 50 | 6 / 15 / 40 / 100 |
| Заголовок | Inter Black Italic 96 с обводкой | Inter Extra Bold 72 без эффектов |
| Сетка | плоская, без auto-layout | колонка 1312, поля 64, gap 24 |

Ядро палитры: розовый `#FA6794`, голубой `#229CDF`, кремовый `#FCF6E0`, чёрный `#000000`, мятный `#A3C892`. Голубой и розовый несут одинаковый вес — это не «акцент на нейтральном», а двухцветная система, где чёрный контур держит обоих.

Типографика: в исходниках пять семейств (Inter, Source Sans Pro, Jost, Josefin Sans, Plus Jakarta Sans), в системе оставлено одно — Inter. Им же набрана презентация Brand Overview, сверено по глифам с PDF: текст 400, заголовки 700, фоновый мега-текст 900. Остальные четыре встречались по одному разу и сведены на Inter. OFL. Интерлиньяж бренда — всегда 100%.

Токены идут тремя слоями: примитив (`tokens/colors.css` и соседи) → роль (`tokens/semantic.css`) → компонент. Подключение: `ui/primitives.css` для примитивов, `styles.css` для токенов и компонентов, направление объявляется атрибутом `data-ds="brand"` или `data-ds="shop"`.

## ICONOGRAPHY

В файле магазина 8 символов-иконок: `chevron-down`, `clear`, `employees`, `language-english-us`, `placeholder`, `search`, `vuesax-linear-heart`, `vuesax-outline-arrow-down`. Все экспортированы в `assets/icons/` из исходной геометрии, обводка 1px, размер 16–24px.

В бренд-макете иконок как компонентов нет — корзина, профиль, инфо и язык нарисованы прямо внутри круглых кнопок 41px. Для полноценного бренд-набора иконки нужно дорисовать: линия 2px, скруглённые концы, вписывать в круг 41px с чёрной обводкой 4px.

---

## Структура

```
ui/primitives.css       — примитивы (card, badge, btn, table, alert, accordion)
styles.css              — точка входа токенов и компонентов, только @import
tokens/                 — fonts, colors, library, typography, spacing, radii, shadows, semantic
components/core/        — Button, Counter (компонент-сеты магазина)
components/brand/       — 11 примитивов Y2K-направления
ui_kits/brand-site/     — главная страница бренда
ui_kits/shop/           — главная страница магазина
guidelines/             — 20 карточек-образцов, 700px
assets/logos/           — 9 файлов логотипа, включая AI
assets/icons/           — 8 SVG
assets/images/          — 43 изображения из макетов
assets/mockups/         — 6 фото носителей
index.html              — браузер дизайн-системы
```

## Компоненты

| Семейство | Группа | Источник |
|---|---|---|
| Button | core | компонент-сет, 480 вариантов |
| Counter | core | компонент-сет, 20 вариантов |
| BrandButton | brand | Section-MISSION / FindStore / WhereToBuy |
| IconButton | brand | header |
| NavPill | brand | header |
| ProductCard | brand | Section-ShopNow |
| RetailerChip | brand | Section-WHERETOBUY |
| SectionLabel | brand | Section-FindStore |
| OutlineHeading | brand | WHOIS / ShopNow / WhereToBuy |
| Marquee | brand | running text |
| SubscribeForm | brand | Footer |
| DotPagination | brand | Section-FindStore |
| Panel | brand | Menu / Footer / WhereToBuy |

## Intentional additions

Формально компонентов в бренд-файле нет — всё нарисовано плоско. Одиннадцать бренд-примитивов выше собраны из повторяющихся экземпляров макета; их размеры и цвета взяты с конкретных объектов, но статус «компонента» им присвоен здесь. Добавлено также:

- `--noise` — SVG-текстура вместо эффекта `NOISE` из Figma, которого нет в CSS.
- `.marquee` — анимация; в макете строка статична.
- Состояния `:hover` / `:active` для бренд-кнопок; в макете описано только состояние по умолчанию.
- Медиа-запросы в шаблонах страниц; мобильная версия есть только для магазина.

## Чего в исходниках нет

- Мобильные состояния бренд-направления.
- Бренд-иконки как отдельные объекты.
- Компоненты формы: чекбокс, радио, селект, тултип, таб, модалка.
- Токены отступов бренд-направления (нет auto-layout).
- `Mr.Thank you - Brand Overview.pdf` не прочитан — в системе нет рендерера PDF.

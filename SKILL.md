---
name: mr-thank-you-design-system
description: Дизайн-система бренда Mr. Thank You — токены, компоненты, шаблоны страниц. Использовать при вёрстке любого экрана, лендинга или компонента Mr. Thank You, чтобы цвета, типографика, отступы и радиусы совпадали с макетами.
---

# Mr. Thank You Design System

Токены сняты с презентации `Mr.Thank you - Brand Overview.pdf`; первая сборка шла из
`MrThankYou.fig` и `Mr Thank You.fig` и осталась в репозитории как наследие.
Браузер системы — `index.html`, полная документация — `readme.md`.

## Как подключить

```html
<link rel="stylesheet" href="design-system/tokens/fonts.css">
<link rel="stylesheet" href="design-system/tokens/colors.css">
<link rel="stylesheet" href="design-system/tokens/typography.css">
<link rel="stylesheet" href="design-system/tokens/spacing.css">
<link rel="stylesheet" href="design-system/tokens/radii.css">
<link rel="stylesheet" href="design-system/tokens/shadows.css">
<link rel="stylesheet" href="design-system/tokens/semantic.css">
<link rel="stylesheet" href="design-system/site/site.css">
```

Порядок обязателен: сначала значения, последним `semantic.css` — он раздаёт роли
(`--primary`, `--surface`, `--border`) на `:root`. Дальше `site/site.css` — кнопки,
ссылка, карточка товара, категории, поле подписки, шапка и подвал.

`tokens/library.css` не подключается: это палитра стороннего UI-kit, оставшаяся от
первой сборки. Атрибут `data-ds` тоже не нужен — его больше нет ни в одном селекторе.

## Одно направление

Направление выбрано по презентации Brand Overview: белый фон, чёрный текст, один
розовый акцент `--pink-500`. `tokens/semantic.css` объявляет роли сразу на `:root`,
переключателя тем нет.

Двухнаправленная сборка brand/shop, классы `.t-*` / `.s-*` и всё, что лежит в
`components/`, `ui_kits/`, `guidelines/`, `styles.css` и `ui/` — наследие первой
версии, собранной из `.fig`. В новых экранах не использовать.

## Правила

1. Цвет только из `tokens/colors.css`. Хардкод hex запрещён.
2. Акцент один — `--pink-500`. Второго равнозначного цвета в системе нет.
3. Кегль, интерлиньяж и вес только токеном: `font-size: var(--fs-h2)`. Литералов в px нет.
4. Отступы кратны 4 (`--space-*`). Вне шкалы — только значения из `spacing.css`, они взяты с макета.
5. Радиус только из `radii.css`. Промежуточных значений в макетах нет.
6. Тень только из `shadows.css`. Плоская вёрстка: карточки разделяет линейка 1px, тень остаётся за наведением и фокусом.
7. Логотип — файлом из `assets/logos/`. Не перерисовывать, не воссоздавать по памяти, не менять пропорции.

## Компоненты

Живые компоненты — в `site/site.css`, все показаны на `index.html` в разделе
«Компоненты»: кнопки четырёх видов и текстовая ссылка, карточка товара, полоса
категорий, блок условий, поле подписки, шапка, подвал.

13 семейств в `components/` с `.jsx`, `.d.ts` и `.prompt.md` — от первой сборки,
на живых страницах не используются.

## Чего в системе нет

Чекбокс, радио, селект, тултип, таб, модалка, собственный набор иконок. Понадобится — собирать теми же токенами и дописывать в `readme.md` → «Intentional additions».

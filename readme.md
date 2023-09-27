# Search bar for Airbnb
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://oleg-gord.github.io/layout_search-bar-airbnb/)
- [TEST REPORT LINK](https://oleg-gord.github.io/layout_search-bar-airbnb/report/html_report/)

> Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/#how-to-solve-the-layout-tasks-on-github)

___

## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_search-bar-airbnb/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

## The task
> Create HTML page with two search bars as designed in [the mockup](https://www.figma.com/file/kf3AWulK9elrNk34wtpjPw/Airbnb-Search-bar?node-id=0%3A1). This search bar will be part of big project.

![screenshot](./references/search-bar-example.png)

### Requirements:
- use images from [src/images](src/images)
- there must be two search bars
- search bar must have width 100%
- distance between two search bars must be 20px
- the big search bar must have top indent 20px
- follow styles from the mock
- default `font-weight` must be 300
- a search bar has 3 state default, `hover` and `focus`
- don't use JavaScript
- use `@font-face` for fonts
- add attribute `data-qa="big"` for big search form, and `data-qa="small"` for small
- add attribute `data-qa="keypress"` to input in big search form
---
--> [CHECKLIST](https://github.com/mate-academy/layout_search-bar-airbnb/blob/master/checklist.md)

### Tips & Hints
- Add **ALL** `data-qa` attributes required in the task
- Text `Try "Los Angeles"` is a placeholder.
- Use `&quot;` instead of `"` in the placeholder.
- Pay close attention to font styles. Use fonts from `fonts` folder.
- You have to put `input` inside the `form` for correct data processing. Form should have `action` and `method`
attributes.
- Each search bar be inside its own `form` element.
- Task has styling for `:focus` state. Forms, labels, divs are not focusable by default. Consider it when selecting your
layout.
- Remember that inputs and other interactive elements don’t inherit font styles by default.
- Remember that placeholder has its own set of styles available using `::placeholder` pseudo-element.
Вимоги:
- використовувати зображення з [src/images](src/images)
- має бути два рядки пошуку
- панель пошуку повинна мати ширину 100%
- відстань між двома рядками пошуку має бути 20px
- великий рядок пошуку повинен мати верхній відступ 20px
- дотримуйтесь стилів з макету
- за замовчуванням `font-weight` має бути 300
- рядок пошуку має 3 стани за умовчанням, `наведення курсора` і `фокус`
- не використовуйте JavaScript
- використовуйте `@font-face` для шрифтів
- додати атрибут `data-qa="big"` для великої форми пошуку та `data-qa="small"` для маленької
- додати атрибут `data-qa="keypress"` для введення у велику форму пошуку
---
--> [КОНТРОЛЬНИЙ СПИСОК](https://github.com/mate-academy/layout_search-bar-airbnb/blob/master/checklist.md)

### Поради та підказки
- Додайте **ВСІ** `data-qa` атрибути, необхідні для завдання
- Текст "Спробуйте "Лос-Анджелес"" є заповнювачем.
- Використовуйте `&quot;` замість `"` у заповнювачі.
- Звертайте особливу увагу на стилі шрифту. Використовуйте шрифти з папки `fonts`.
- Ви повинні ввести `input` у `form` для коректної обробки даних. Форма повинна мати `action` і `method`
атрибути.
- Кожен рядок пошуку знаходиться всередині власного елемента `form`.
— Завдання має стиль для стану `:focus`. Форми, мітки, елементи div не доступні за замовчуванням. Враховуйте це при виборі свого
макет.
- Пам’ятайте, що введення та інші інтерактивні елементи не успадковують стилі шрифту за замовчуванням.
- Пам’ятайте, що заповнювач має власний набір стилів, доступних за допомогою псевдоелемента `::placeholder`.



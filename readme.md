# Search bar for Airbnb
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://yevhenii-stanchenko.github.io/layout_search-bar-airbnb/)
- [TEST REPORT LINK](https://yevhenii-stanchenko.github.io/layout_search-bar-airbnb/)

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


использовать изображения из [src/images](src/images)
- должно быть две строки поиска
- панель поиска должна иметь ширину 100%
- расстояние между двумя строками поиска должно быть 20px
- большая панель поиска должна иметь верхний отступ 20px
- следовать стилям из макета
- по умолчанию `font-weight` должен быть 300
- панель поиска имеет 3 состояния по умолчанию: «наведение» и «фокус».
- не используйте JavaScript
- используйте `@font-face` для шрифтов
- добавить атрибут `data-qa="big"` для большой формы поиска и `data-qa="small"` для маленькой
- добавить атрибут `data-qa="keypress"` для ввода в большую форму поиска
---
--> [КОНТРОЛЬНЫЙ СПИСОК] (https://github.com/mate-academy/layout_search-bar-airbnb/blob/master/checklist.md)

### Советы и подсказки
- Добавьте **ВСЕ** атрибуты `data-qa`, необходимые в задаче.
- Текст `Попробуйте "Лос-Анджелес"` является заполнителем.
- Используйте `&quot;` вместо `"` в заполнителе.
- Обратите особое внимание на стили шрифтов. Используйте шрифты из папки `fonts`.
- Вы должны поместить «ввод» внутри «формы» для правильной обработки данных. Форма должна иметь «действие» и «метод».
атрибуты.
- Каждая панель поиска находится внутри своего собственного элемента `form`.
- Задача имеет стиль для состояния `: focus`. Формы, метки, div по умолчанию не фокусируются. Учитывайте это при выборе своего
макет.
- Помните, что элементы ввода и другие интерактивные элементы не наследуют стили шрифтов по умолчанию.
- Помните, что заполнитель имеет собственный набор стилей, доступных с помощью псевдоэлемента `::placeholder`. 
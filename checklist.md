1. [STYLES] - Get used to style all elements using classes. And don't increase selectors specificity unless completely
necessary

```html
<!--index.html:-->
<form
  class="search-form"
  method="get"
  action="/"
>
  <input
    class="input"
    type="text"
    name="search"
    id="search-input"
  >
</form>
```
GOOD example:
```css
/* style.css */
.input {
  width: 100%;
  height: 36px;
}
```

BAD example:
```css
/* style.css */
input {
  width: 100%;
  height: 36px;
}
```

BAD example:
```css
/* style.css */
#search-input {
  width: 100%;
  height: 36px;
}
```

BAD example:
```css
/* style.css */
.search-form > .input {
  width: 100%;
  height: 36px;
}
```

2. [STYLES] - if you have two or more similar elements with portions of similar styles with different values - use one
of the elements as the basic case, and override necessary styles for other cases.
```html
<!--index.html:-->
<img
  class="icon"
  src="url(...)"
  alt="Company logo"
>

<img
  class="icon icon--small"
  src="url(...)"
  alt="Company logo"
>
```
GOOD example:
```css
/* style.css */
.icon {
  position: absolute;
  top: 24px;
  left: 24px;
  display: block;
  width: 40px;
  height: 40px;
}

.icon--small {
  top: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
}
```

3. [CODE STYLE] - Keep your code line length below 80. It’s not only historical
tradition, but also allows your code to fit into one standard screen without
horizontal scroll.
4. [CODE STYLE] - Remember about correct indentation between parent and child
elements. Each level of nesting, including text, contained inside the element,
requires 2-space offset.

GOOD example:
```html
<!--index.html:-->
<div>
  <p>
    some text
  </p>
</div>
```

BAD example:
```html
<!--index.html:-->
<div>
<p>
some text
</p>
</div>
```

5. [CODE STYLE] - If the HTML-element has long attribute values or number of
attributes is more than 3 - start each one, including the first, on the new
line with 2-space indentation related to tag. Tag’s closing bracket should be
on the same level as opening one.

GOOD example:
```html
<input
  type="text"
  name="surname"
  id="surname"
  required
>
```
BAD example:
```html
<input type="text" name="surname"
id="surname" required>
```
BAD example:
```html
<input type="text"
  name="surname"
  id="surname"
  required>
```
BAD example:
```html
<input
type="text"
name="surname"
id="surname"
required>
```
Still BAD example:
```html
<input
  type="text"
  name="surname"
  id="surname"
  required>
```

6. [CODE STYLE] - Use camelCase for values of name attribute - they should be
   valid as JavaScript object keys. It should not contain spaces, “-” or other
   special characters.

GOOD example:
```html
<input
  type="date"
  name="dateOfBirth"
  id="dateOfBirth"
  required
>
```
BAD example:
```html
<input
  type="date"
  name="date of birth"
  id="dateOfBirth"
  required
>
```

7. [FUNCTIONALITY] - You need to use a label tag for each input, so that every
input could be activated by clicking on the corresponding label.
8. [TESTS] - Remember to style input placeholders correctly
9. [TESTS] - Remember that the search-bar should have width: 100% on any screen.
10. [TESTS] - Remember, each search bar should be located in separate
form element.


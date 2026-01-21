## HTML Formatting
<details>
  <summary>Use <b>2 spaces</b> for indentation in your file (not a <code>tab</code> character)</summary>

  > to make sure your formatting will look the same everiwhere
</details>

<details>
  <summary>Remember about correct indentation between parent and child elements</summary>

  > Each level of nesting, including text, contained inside the element, requires 2-space offset.
  Also blank line shouldn't be between parent and child elements.

  GOOD example
  ```html
  <body>
    <div>
      <p>
        Awesome text
      </p>
    </div>
  </body>
  ```

  BAD example
  ```html
  <body>
  <div>
  <p>
  Awesome text
  </p>
  </div>
  </body>
  ```
</details>

<details>
  <summary>Add empty lines between multiline sibling blocks of HTML</summary>

  > To add some "air" and simplify reading. But don't add them between parent and child elements.

  GOOD Example
  ```html
  <ul>
    <li class="nav__item">
      <a href="#home">Home</a>
    </li>

    <li class="nav__item">
      <a href="#shop">Shop</a>
    </li>

    <li class="nav__item">
      <a href="#contacts">Contacts</a>
    </li>
  </ul>
  ```

  BAD Example
  ```html
  <ul>

    <li class="nav__item">
      <a href="#home">Home</a>
    </li>
    <li class="nav__item">
      <a href="#shop">Shop</a>
    </li>
    <li class="nav__item">
      <a href="#contacts">Contacts</a>
    </li>

  </ul>
  ```
</details>

<details>
  <summary>Keep your attributes correctly formatted</summary>

  > If the HTML-element has long attribute values or number of attributes is more than 2 - start each one,
  including the first, on the new line with 2-space indentation related to tag.
  Tag’s closing bracket should be on the same level as opening one.

  GOOD Example
  ```html
  <input
    type="text"
    name="surname"
    id="surname"
    required
  >
  ```

  BAD Examples
  ```html
  <input type="text" name="surname"
         id="surname" required>

  <input type="text"
         name="surname"
         id="surname"
         required>

  <input
  type="text"
  name="surname"
  id="surname"
  required>

  <input
    type="text"
    name="surname"
    id="surname"
    required>
  ```
</details>

<details>
  <summary>Lines of code have <code>80</code> chars max</summary>

  > It is just easier to read such lines
</details>

## HTML Content

<details>
  <summary>Use semantic tags where possible</summary>

  > Like `header`, `section`, `article`, `p`. It improves your page SEO and helps screen readers. `div` and `span` does not have any meaning
</details>

<details>
  <summary> <code>alt</code> attribute should describe the image content</summary>


  GOOD example
  ```html
  <img alt="Samsung Galaxy S22 2022 8/128GB Green" />
  ```

  REALLY BAD example
  ```html
  <img alt="image" />
  ```

  STILL BAD example
  ```html
  <img alt="phone" />
  ```
</details>

<details>
  <summary>Class names represent the meaning of the content (not the styles or tag names)</summary>

  GOOD example
  ```html
  <nav class="nav">
    <ul class="nav__list">
      ...
      <li class="nav__item">
        <a href="#apple" class="nav__link">Apple</a>
      </li>
    </ul>
  </nav>
  ```

  BAD example
  ```html
  <nav class="no-padding">
    <ul>
      ...
      <li class="li">
        <a href="#apple" class="a-last-no-decoration">Apple</a>
      </li>
    </ul>
  </nav>
  ```
</details>

<details>
  <summary>Don't use spaces in links</summary>

  > Have you seen any link with literal space in it on the Internet? Remember, anchor links start with `#`
</details>

## CSS
<details>
  <summary>Don't use <code>*</code> selector (it impacts performance)</summary>

  > Set styles only for elements that require them.
  > Zeroing out your margins, paddings or other styles with '*' is still inefficient for browser.
</details>

<details>
  <summary>Don't use tag names for styling (except <code>html</code> and <code>body</code>)</summary>

  > Style all elements using `.classes` and if needed with `:pseudo-classes`, `pseudo-elements` and `[attributes]`

  HTML Example
  ```html
  <nav class="nav">
    <ul class="nav__list">
      ...
    <ul>
  </nav>
  ```

  GOOD CSS Example
  ```css
  .nav__list {
    list-style: none
  }
  ```

  BAD CSS Examples
  ```css
  ul {
    list-style: none
  }

  nav ul {
    list-style: none
  }
  ```
</details>

<details>
  <summary>Remember to use fallback fonts - alternative font-family in case the main one doesn't work</summary>

  > [Explanation](https://www.w3schools.com/cssref/pr_font_font-family.asp)
</details>

<details>
  <summary>Be consistent with your margins (Add only top or bottom, but not both)</summary>

  > To avoid potential margin collapse
</details>

<details>
  <summary>Don't fix container size (if there is no such a requirement)</summary>

  > Let the content size dictate it. To avoid overflow or accidental scroll bar
</details>

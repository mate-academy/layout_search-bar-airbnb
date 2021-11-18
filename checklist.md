1. [STYLES] - Get used to style all elements using classes. And don't increase selectors specificity unless completely
necessary
       <details>
         <summary>HTML example</summary>
           ![css-classes-html-example-1](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-html-1.png)
       </details>
       <details>
         <summary>BAD CSS examples</summary>
           ![css-classes-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-bad-1.png)
           ![css-classes-bad-example-2](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-bad-2.png)
           ![css-classes-bad-example-3](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-bad-3.png)
       </details>
       <details>
         <summary>GOOD CSS example</summary>
           ![css-classes-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/css-classes/example-good-1.png)
       </details>


2. [STYLES] - if you have two or more similar elements with portions of similar styles with different values - use one
of the elements as the basic case, and override necessary styles for other cases.
Explanation: The point is not in the names of the classes, the point is: when there are several similar elements, ex., 2 inputs, for one we can give a class `input`, for example, and for the second - `input input--small`. We write all the styles for `.input`, but for `.input-small` we write only those styles that differ in design, and we need this second input to look a little different.
Element with class `.input` without extra classes should also look like a full-fledged styled element.
       <details>
         <summary>BAD example</summary>
           ![css-variations-bad-example-html-1](https://mate-academy.github.io/fe-program/css/checklists/css-variations/example-bad-html-1.png)
           ![css-variations-bad-example-css-1](https://mate-academy.github.io/fe-program/css/checklists/css-variations/example-bad-css-1.png)
       </details>
       <details>
         <summary>GOOD example</summary>
           ![css-variations-good-example-html-1](https://mate-academy.github.io/fe-program/css/checklists/css-variations/example-good-html-1.png)
           ![css-variations-good-example-css-1](https://mate-academy.github.io/fe-program/css/checklists/css-variations/example-good-css-1.png)
       </details>


3. [CODE STYLE] - Keep your code line length below 80. It’s not only historical
tradition, but also allows your code to fit into one standard screen without
horizontal scroll. But do not break the line if it cannot be broken (ex., long links).


4. [CODE STYLE] - Remember about correct indentation between parent and child
      elements. Each level of nesting, including text, contained inside the element,
      requires 2-space offset.
          <details>
            <summary>BAD examples</summary>
              ![html-indentations-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-indentations/example-bad-1.png)
          </details>
          <details>
          <summary>GOOD example</summary>
              ![html-indentations-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-indentations/example-good-1.png)
          </details>


5. [CODE STYLE] - If the HTML-element has long attribute values or number of
   attributes is more than 3 - start each one, including the first, on the new
   line with 2-space indentation related to tag. Tag’s closing bracket should be
   on the same level as opening one.
       <details>
         <summary>BAD examples</summary>
           ![html-attributes-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-bad-1.png)
           ![html-attributes-bad-example-2](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-bad-2.png)
           ![html-attributes-bad-example-3](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-bad-3.png)
           ![html-attributes-bad-example-4](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-bad-4.png)
       </details>
       <details>
         <summary>GOOD example</summary>
           ![html-attributes-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-good-1.png)
       </details>


6. [CODE STYLE] - Use camelCase for values of name attribute - they should be
   valid as JavaScript object keys. It should not contain spaces, “-” or other
   special characters.
       <details>
         <summary>BAD example</summary>
           ![html-name-attribute-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-name-attribute/example-bad-1.png)
       </details>
       <details>
         <summary>GOOD example</summary>
           ![html-name-attribute-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-name-attribute/example-good-1.png)
       </details>

7. [TESTS] - Remember to style input placeholders correctly


8. [TESTS] - Remember that the search-bar should have width: 100% on any screen.


9. [TESTS] - Remember, each search bar should be located in separate
form element.


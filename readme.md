# Search bar for Airbnb
> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline/#how-to-solve-the-layout-tasks-on-github)
___

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
## Checklist

❗️ Replace `<your_account>` with your Github username and copy the links to `Pull Request` description:

- [DEMO LINK](https://m-bayrak.github.io/layout_search-bar-airbnb/)
- [TEST REPORT LINK](https://m-bayrak.github.io/layout_search-bar-airbnb/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [x] Icon implemented using background-image CSS property
- [x] Inputs are written inside of 'form' tag with correctly passed attributes
- [x] All `Typical Mistakes` from `BEM` lesson theory are checked.
- [x] Code follows all the [Code Style Rules ❗️](./checklist.md)


---
## Bugs

This is where I posted the site and the report,<br>
https://m-bayrak.github.io/layout_search-bar-airbnb/src/<br>
https://m-bayrak.github.io/layout_search-bar-airbnb/backstop_data/engine_scripts/report/html_report/index.html <br>
because there were errors that I described below ↓↓↓

On the computer **localhost:8080**, the search page is displayed normally and the test passes. When creating a Pull Request on the **GitHub** platform, a conflict occurs during verification (passing the test) based on the **package.json** file https://prnt.sc/4aJyvflXJzTj  

When I fix these errors then the test on **GitHub** runs without conflicts, but the report is not displayed and the site is displayed 
without CSS settings https://prnt.sc/Mo2RvqbCTuH7 

So I deployed the site to **GitHub** in the **develop** branch and manually uploaded the report.
In different projects, from time to time the **Mate script** gives similar failures

This code must be present in order for the test to be properly checked on a **Mac**<br>
    "@mate-academy/stylelint-config": "*",<br>
    "@parcel/transformer-sass": "^2.10.2",

This code must be present in order for the test to be properly checked on a **GitHub**<br>
    "@mate-academy/stylelint-config": "^0.0.11",<br>
    "@parcel/transformer-sass": "2.10.2",

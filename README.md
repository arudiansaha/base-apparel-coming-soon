# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

- [Mobile](/public/images/screenshots/screenshot-mobile.png)
- [Desktop](/public/images/screenshots/screenshot-desktop.png)

### Links

- Solution URL: [Click here](https://github.com/arudiansaha/base-apparel-coming-soon/)
- Live Site URL: [Click here](https://arudiansaha.github.io/base-apparel-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- TypeScript
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vitest

### What I learned

This challenge is great for learn position in css, also learn how validation work and make custom validation.

Here some code of mine:

```html
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.ts"></script>
</body>
```
```css
.app__title {
  margin-block-start: 2rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
```
```ts
const descriptionElement = createDescriptionForm(
  description.title, description.message,
);
```

### Continued development

Make some test, and refactor the code.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) - This helpful page for learn custom validation.
- [https://vitest.dev/guide/](Vitest) - A great tool for testing and easy to learn.

## Author

- LinkedIn - [Rizky Ardiansyah](https://linkedin.com/in/ky-ardiansyah)
- Frontend Mentor - [@arudiansaha](https://www.frontendmentor.io/profile/arudiansaha)
- Twitter - [@arudiansaha](https://www.twitter.com/arudiansaha)

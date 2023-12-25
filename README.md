# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot
<img src="./design/desktop-preview.jpg" alt="image preview" width= "400">

### Links

- Solution URL: [Github source code: ](https://github.com/gionare/FAQ-accordion-card-main)
- Live Site URL: [live site URL: ](https://gionare.github.io/FAQ-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="card">
    <section class="header-img"></section>
    <section class="shade-img"></section>
    <h1 class="header">FAQ</h1>

    <section class="accordionSection">
      <button class="accordion"> <p> ... </p> </button>
      <div class="answer-panel">
        <p id="answer"> ... </p>
      </div>
    </section>
  </div> 
```
```css
.accordion:hover {
  color: #f47b56;
}
.accordion:active p {
  /* works while on click */
  color: #f47b56;
  font-size: 14px;
  font-weight: 700;
}
.accordion::after {
  font-family: Kumbh Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
```
```js
//  <button class="accordion">
let acc = document.querySelectorAll(".accordion");
const accArray = [...acc]

// .button #accordionContent 
let accordionContent = document.getElementsByClassName('accordionContent');

// <p> <img class="arrow"> </p>
let arrow = document.querySelectorAll('.arrow')

// open answer will be named as:  openSection
let openSection = null;

accArray.forEach(function (eachAccordion) {
  // <div class="answer-panel">
  let answerPanel = eachAccordion.nextElementSibling;
  
  eachAccordion.addEventListener("click", function () {
    if (eachAccordion == openSection) { 
      // close on click
      eachAccordion.nextElementSibling.style.display = "none";
      openSection = null;
      eachAccordion.querySelector(".arrow").src = "images/icon-arrow-down.svg"
      eachAccordion.querySelector('.accordionContent').style.fontWeight = '400';
    } else {
    
      if(openSection != null) {
        // close previous on click
        openSection.nextElementSibling.style.display = "none";
        openSection.querySelector(".arrow").src = "images/icon-arrow-down.svg"
        openSection.querySelector(".accordionContent").style.fontWeight = '400';
      }
      
      // open on click 
      eachAccordion.nextElementSibling.style.display = "block";
      openSection = eachAccordion;
      eachAccordion.querySelector(".arrow").src = "images/icon-arrow-up.svg"
      eachAccordion.querySelector('.accordionContent').style.fontWeight = '700';
    }
  });
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

continue focusing on in future projects. completely comfortable with useful techniques, want to refine and perfect.

### Useful resources

- - Google - [Google] (https://google.com) - Quite helpful 
- - BitCamp Mentor - [@beqa200](https://www.youtube.com/watch?v=lAoX8e16IoY) - Helped me for finalizing my code

## Author

- Website - [Giorgi Nareklishvili Portfolio](https://portfolio-giorgi-nareklishvili.vercel.app/)
- LinkedIn - [Giorgi Nareklishvili LinkedIn](https://www.linkedin.com/in/gionare/)
- Github: [Github: ](https://github.com/gionare)

## Acknowledgments

@Bitcamp
@beqa200
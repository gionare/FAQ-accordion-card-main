//  <button class="accordion">
let acc = document.querySelectorAll(".accordion");
const accArray = [...acc]


// .button #accordionContent 
let accordionContent = document.getElementsByClassName('accordionContent');


// <p> <img class="arrow"> </p>
let arrow = document.querySelectorAll('.arrow')

// open answer section 
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
      // arrow.style.url = "images/icon-arrow-down.svg"
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
      console.log(eachAccordion);

      eachAccordion.querySelector(".arrow").src = "images/icon-arrow-up.svg"

      eachAccordion.querySelector('.accordionContent').style.fontWeight = '700';

    }
    
  });
});


//to ask --?-- why third eachAccordion is not getting bold while open

//  <button class="accordion">
let acc = document.querySelectorAll(".accordion");
console.log(acc);


// .button #accordionContent 
let accordionContent = document.getElementById('accordionContent');
console.log(accordionContent);


// <p> <img class="arrow"> </p>
let arrow = document.getElementsByClassName('arrow')
console.log(arrow);



acc.forEach(function (accordion) {

  // <div class="answer-panel">
  let answerPanel = accordion.nextElementSibling;
  console.log(answerPanel);
  
  accordion.addEventListener("click", function () {

    // Toggle the 'active' class on the button to change its appearance
    // accordion.classList.toggle("active");
    // Toggle the visibility of the answer panel
    // Toggle the 'pressed' class on the clicked accordion
    // accordion.classList.toggle("pressed");

    let openSection = null;

    if (answerPanel.style.display === "block") {
      
      answerPanel.style.display = "none";
      openSection = null;
      accordionContent.style.fontWeight = '400';
      arrow.style.url = "images/icon-arrow-down.svg"
    } else {

      if(openSection != null) {
        openSection.nextElementSibling.style.display = "none";
      }
      
      answerPanel.style.display = "block";
      openSection = accordionContent;
      console.log(openSection);
      accordionContent.style.fontWeight = '700';
      arrow.src = "images/icon-arrow-up.svg"
    }
    
  });
});

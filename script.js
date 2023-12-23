// Write JavaScript to Toggle Accordion:
// Create a JavaScript file (e.g., script.js) and write code
// to toggle the visibility of the answer panel when the
// button is clicked.

// using  classList.toggle

// Get the button and answer panel elements
let acc = document.querySelectorAll(".accordion");
console.log(acc);
// .button #accordionContent 
let accordionContent = document.getElementById('accordionContent');
console.log(accordionContent);
let arrow = document.getElementsByClassName('arrow')
console.log(arrow);

acc.forEach(function (accordion) {
  let answerPanel = accordion.nextElementSibling;
  console.log(answerPanel);
  
  accordion.addEventListener("click", function () {

    // Toggle the 'active' class on the button to change its appearance
    // accordion.classList.toggle("active");
    // Toggle the visibility of the answer panel
    // Toggle the 'pressed' class on the clicked accordion
    // accordion.classList.toggle("pressed");

    if (answerPanel.style.display === "block") {
      answerPanel.style.display = "none";
      accordionContent.style.fontWeight = '400';
      arrow.style.url = "images/icon-arrow-down.svg"
    } else {
      answerPanel.style.display = "block";
      accordionContent.style.fontWeight = '700';
      arrow.src = "images/icon-arrow-up.svg"
    }
    
  });
});


//to ask --?-- need to put accordion.addEventListener in loop frobably? and choose it by loop index?!

// Write JavaScript to Toggle Accordion:
// Create a JavaScript file (e.g., script.js) and write code
// to toggle the visibility of the answer panel when the
// button is clicked.

// let acc = document.getElementsByClassName("accordion");
// console.log(acc);

// for (let i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       let panel = this.nextElementSibling;
//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//       } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//       }
//     });
//   }


// using  classList.toggle

// Get the button and answer panel elements
let acc = document.querySelector(".accordion")
console.log(acc);
let answerPanel = document.querySelector(".answer-panel");
console.log(answerPanel);

acc.addEventListener("click", function () {
  // Toggle the 'active' class on the button to change its appearance
  acc.classList.toggle("active");

  // Toggle the visibility of the answer panel
  if (answerPanel.style.display === "block") {
    answerPanel.style.display = "none";
  } else {
    answerPanel.style.display = "block";
  }
});

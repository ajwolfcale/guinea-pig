// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// console.log("linked");
var section = document.getElementsByClassName("article-section");
// console.log(section);

let output = document.getElementById("output-target");

function youClicked() {
    // console.log(event.currentTarget, event.target);
    output.innerHTML =(`You clicked on the ${event.currentTarget.innerText}`);
}

for (i = 0; i < section.length; i++){
    section[i].addEventListener("click", youClicked);
};

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

var title = document.getElementById("page-title");

title.addEventListener("mouseover", () => {
    output.innerHTML = "You moved your mouse over the header";
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
title.addEventListener("mouseleave", () => {
    output.innerHTML = "You left me!!"
})

// When you type characters into the input field, the output element should mirror the text in the input field.
var input = document.getElementById("keypress-input");
input.addEventListener("keypress", () => {
    output.innerHTML = input.value;
})
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

var colorBtn = document.getElementById("add-color");
var guinea = document.getElementById("guinea-pig");

colorBtn.addEventListener("click", () => {
    guinea.classList.toggle("blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var hulkBtn = document.getElementById("make-large");
hulkBtn.addEventListener("click", () => {
    guinea.classList.toggle("hulk");
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

var capture = document.getElementById("add-border");
capture.addEventListener("click", () => {
    guinea.classList.toggle("trapped");
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
var round = document.getElementById("add-rounding");
round.addEventListener("click", () =>{
    guinea.classList.toggle("round");
});



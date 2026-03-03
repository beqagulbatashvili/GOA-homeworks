// 8
const textContainer = document.getElementById("textContainer");

const newP = document.createElement("p");
newP.textContent = "This is the new paragraph.";

const oldP = textContainer.querySelector("p");

if (oldP) {
    textContainer.replaceChild(newP, oldP);
}
// 9
const containerDiv = document.getElementById("buttonContainer");

const newSpan = document.createElement("span");
newSpan.textContent = "This is a span instead of a button.";

const oldButton = containerDiv.querySelector("button");

if (oldButton) {
    ontainerDiv.replaceChild(newSpan, oldButton);
}
// 10
const ul = document.getElementById("myList");

const newLi = document.createElement("li");
newLi.textContent = "New list item";

const oldLi = ul.querySelector("li");

if (oldLi) {
    ul.replaceChild(newLi, oldLi);
}
// 11
const oldH2 = document.querySelector("h2");

const newH1 = document.createElement("h1");
newH1.textContent = "This is a new H1 heading";

if (oldH2 && oldH2.parentNode) {
    oldH2.parentNode.replaceChild(newH1, oldH2);
}

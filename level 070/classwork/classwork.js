
let button = document.getElementById("colorButton");button.style.padding = "10px 20px";button.style.fontSize = "16px";button.style.backgroundColor = "lightgray";button.style.border = "none";button.style.cursor = "pointer";

function changeColor() {
    let userColor = prompt("enter color");
    button.style.backgroundColor = userColor;
    }


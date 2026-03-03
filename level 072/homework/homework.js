// 1)
const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", function () {
    alert("Button was clicked!");
});

//2)
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", function () {
    hoverText.textContent = "You hovered over me!";
});

// 3)
const colorBox = document.getElementById("colorBox");
    let isBlue = true;
    colorBox.addEventListener("click", function () {
    if (isBlue) {
        colorBox.style.backgroundColor = "lightgreen";
    } else {
        colorBox.style.backgroundColor = "lightblue";
    }
    isBlue = !isBlue;
});

// 4)
const textInput = document.getElementById("textInput");
textInput.addEventListener("click", function () {
    console.log("Current input value:", textInput.value);
});

// 5)
const toggleImgBtn = document.getElementById("toggleImgBtn");
const myImage = document.getElementById("myImage");
myImage.style.display = "none"; 

toggleImgBtn.addEventListener("click", function () {
    if (myImage.style.display === "none") {
    myImage.style.display = "block";
    } else {
const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", function () {
    alert("Button was clicked!");
});

// 6)
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", function () {
    hoverText.textContent = "You hovered over me!";
});

// 7)
const colorBox = document.getElementById("colorBox");
let isBlue = true;
colorBox.addEventListener("click", function () {
    if (isBlue) {
        colorBox.style.backgroundColor = "lightgreen";
    } else {
        colorBox.style.backgroundColor = "lightblue";
    }
    isBlue = !isBlue;
});

// 8)
const textInput = document.getElementById("textInput");
textInput.addEventListener("click", function () {
    console.log("Current input value:", textInput.value);
});

// 9)
const toggleImgBtn = document.getElementById("toggleImgBtn");
const myImage = document.getElementById("myImage");
myImage.style.display = "none";

toggleImgBtn.addEventListener("click", function () {
    if (myImage.style.display === "none") {
        myImage.style.display = "block";
    } else {
        myImage.style.display = "none";
    }
});

        myImage.style.display = "none";
    }
});

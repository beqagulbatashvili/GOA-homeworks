const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("myButton");

const colors = ["red", "blue", "green", "purple", "orange"];
function chooseRandomColor(colorsArray) {
  const randomIndex = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomIndex];
}
button.addEventListener("click", function () {
    const randomColor = chooseRandomColor(colors);
    paragraph.style.color = randomColor;
});

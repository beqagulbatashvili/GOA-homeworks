const myParagraph = document.getElementById('myParagraph');
const increaseFontButton = document.getElementById('increaseFontButton');
let currentFontSize = 10;
let intervalId;

function increaseFontSize() {
    currentFontSize++;
    myParagraph.style.fontSize = currentFontSize + 'px';
}

increaseFontButton.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(increaseFontSize, 1000);
});
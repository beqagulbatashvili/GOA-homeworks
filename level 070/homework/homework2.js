const myHeading = document.getElementById('myHeading');
const increaseSizeBtn = document.getElementById('increaseSizeBtn');
const decreaseSizeBtn = document.getElementById('decreaseSizeBtn');

let currentFontSize = parseFloat(window.getComputedStyle(myHeading).fontSize);

increaseSizeBtn.addEventListener('click', () => {
    currentFontSize += 2;
    myHeading.style.fontSize = currentFontSize + 'px';
});

decreaseSizeBtn.addEventListener('click', () => {
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        myHeading.style.fontSize = currentFontSize + 'px';
    }
});
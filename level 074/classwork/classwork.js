const button = document.getElementById('colorChangeButton');
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
let colorIndex = 0;
let intervalId;
let changeCount = 0;
const maxChanges = 5;
const intervalTime = 2000;

button.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
    }

    changeCount = 0;
    colorIndex = 0;

    button.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    changeCount++;

    intervalId = setInterval(() => {
        if (changeCount < maxChanges) {
            button.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
            changeCount++;
        } else {
            clearInterval(intervalId);
            console.log('ფერის შეცვლა დასრულდა.');
        }
    }, intervalTime);
});
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorAndMoveBtn');
    const myDiv = document.getElementById('myDiv');
    let clickCount = 0;

    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'cyan', 'magenta', 'lime']; // ფერების სია

    button.addEventListener('click', () => {
        clickCount++;
        let colorChangeCount = 0; 
        const maxColorChanges = 6;
        const intervalTime = 10000 / maxColorChanges; 

        let currentLeft = parseInt(myDiv.style.left) || 0;
        myDiv.style.left = `${currentLeft + (clickCount * 10)}px`;

        const colorInterval = setInterval(() => {
            if (colorChangeCount < maxColorChanges) {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                myDiv.style.backgroundColor = randomColor;
                colorChangeCount++;
            } else {
                clearInterval(colorInterval);
            }
        }, intervalTime);
    });
});
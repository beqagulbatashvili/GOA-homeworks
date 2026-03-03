const moveButton = document.getElementById('moveButton');
let currentLeftPosition = 0;

function moveButtonLeft() {
    currentLeftPosition -= 50;
    moveButton.style.left = currentLeftPosition + 'px';
}

moveButton.addEventListener('click', () => {
    setInterval(moveButtonLeft, 1000);
});
const myDiv = document.getElementById('myDiv');
const changeColorBtn = document.getElementById('changeColorBtn');

const colors = ['lightblue', 'lightcoral', 'lightgreen', 'lightgoldenrodyellow', 'lightpink'];
let currentColorIndex = 0;

changeColorBtn.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    myDiv.style.backgroundColor = colors[currentColorIndex];
});
const myDiv = document.getElementById('myDiv');
const hideDivBtn = document.getElementById('hideDivBtn');

hideDivBtn.addEventListener('click', () => {
    myDiv.style.display = 'none';
});
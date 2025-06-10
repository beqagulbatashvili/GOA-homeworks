const myParagraph = document.getElementById('myParagraph');
const changeTextBtn = document.getElementById('changeTextBtn');

changeTextBtn.addEventListener('click', () => {
    myParagraph.textContent = 'ტექსტი შეიცვალა!';
});
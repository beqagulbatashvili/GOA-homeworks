document.addEventListener('DOMContentLoaded', function() {
// 6
    const highlightElements = document.querySelectorAll('.highlight');
    for (let i = 0; i < highlightElements.length; i++) {
        highlightElements[i].style.backgroundColor = 'yellow';
    }
// 7
    const cardElements = document.querySelectorAll('.card');
    console.log(`გვერდზე არის ${cardElements.length} ელემენტი class "card"-ით.`);
// 8
    const errorElements = document.querySelectorAll('.error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].style.color = 'red';
    }
// 9
    const itemElements = document.querySelectorAll('.item');
    for (let i = 0; i < itemElements.length; i++) {
        console.log(itemElements[i].innerHTML);
    }
// 10
    const firstButton = document.querySelector('.button');
    if (firstButton) {
        firstButton.textContent = 'Clicked!';
    }
});
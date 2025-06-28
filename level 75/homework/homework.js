// 1
document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('p');
    alert(`გვერდზე არის ${paragraphs.length} <p> ტეგი.`);
// 2
    const headings = document.querySelectorAll('h2');
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = 'blue';
    }
// 3
    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i].textContent);
    }
// 4
    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'lightgray';
    }
// 5
    const firstImage = document.querySelector('img');
    if (firstImage) {
        firstImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9KtJUs-xKCme0VnH5_Pm4GFXrIhc5SUsVw&s';
    }
});
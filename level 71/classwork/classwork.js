function generateParagraph() {
    let myDiv = document.getElementById('myDiv');


    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'ეს არის პარაგრაფი';
    myDiv.appendChild(newParagraph);
}
generateParagraph()
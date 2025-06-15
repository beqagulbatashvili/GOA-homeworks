function replaceParagraph() {
    let parent = document.getElementById('parentDiv');
    let oldPara = document.getElementById('oldParagraph');

    let newPara = document.createElement('p');
    newPara.textContent = 'ეს არის ახალი პარაგრაფი';

    parent.replaceChild(newPara, oldPara);
}

replaceParagraph()

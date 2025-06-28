const myDiv = document.getElementById('myDivBlock');
const paragraphsInDiv = myDiv.getElementsByTagName('p');

for (let i = 0; i < paragraphsInDiv.length; i++) {
    paragraphsInDiv[i].style.color = 'green';
    paragraphsInDiv[i].style.backgroundColor = 'black';
}
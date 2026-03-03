// 1.
let pTags = document.getElementsByTagName("p");
alert("Number of <p> tags: " + pTags.length);

// 2. 
let h2Tags = document.getElementsByTagName("h2");
for (let i = 0; i < h2Tags.length; i++) {
    h2Tags[i].style.color = "blue";
}

// 3.
let liTags = document.getElementsByTagName("li");
for (let i = 0; i < liTags.length; i++) {
    console.log(liTags[i].textContent);
}

// 4.
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "lightgray";
}

// 5.
let imgs = document.getElementsByTagName("img");
if (imgs.length > 0) {
    imgs[0].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png";
}

// 6.
let highlights = document.getElementsByClassName("highlight");
for (let i = 0; i < highlights.length; i++) {
    highlights[i].style.backgroundColor = "yellow";
}

// 7.
let cards = document.getElementsByClassName("card");
console.log("Number of .card elements:", cards.length);

// 8. 
let errors = document.getElementsByClassName("error");
for (let i = 0; i < errors.length; i++) {
    errors[i].style.color = "red";
}

// 9. 
let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    console.log(items[i].innerHTML);
}

// 10.
let buttons = document.getElementsByClassName("button");
if (buttons.length > 0) {
    buttons[0].textContent = "Clicked!";
}
// 1. 
const paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph.";
document.body.appendChild(paragraph);

// 2. 
const div = document.createElement("div");
const heading = document.createElement("h1");
heading.textContent = "This is a heading";
div.appendChild(heading);
document.body.appendChild(div);

// 3. 
const image = document.createElement("img");
image.src = "https://zeba.academy/wp-content/uploads/2022/11/javascript-basics-1024x853.png"
document.body.appendChild(image);

// 4. 
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// 5. 
const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "First item";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Second item";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Third item";
ul.appendChild(li3);

document.body.appendChild(ul);

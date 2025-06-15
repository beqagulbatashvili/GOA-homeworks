// 6.
const contentDiv = document.getElementById("content");

if (contentDiv && contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
}

// 7.
const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Item 1";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Item 2";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Item 3";
ul.appendChild(li3);

document.body.appendChild(ul);

ul.removeChild(ul.lastChild);

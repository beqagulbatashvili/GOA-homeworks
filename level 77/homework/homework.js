let body = document.body;
let btn = document.createElement("button");
let div = document.createElement("div");

btn.textContent = "დაწყება";
body.appendChild(btn);
body.appendChild(div);

let count = 1;

btn.addEventListener('click', function () {
    div.style.width = '300px';
    div.style.height = '300px';
    div.style.backgroundColor = 'red';
    div.style.transition = "all 0.5s ease";

    let width = 300;
    let height = 300;

    let interval = setInterval(function () {

        let p = document.createElement("p");
        let pText = document.createTextNode("p" + count);
        p.appendChild(pText);
        div.appendChild(p);
        count++;


        width -= 10;
        height -= 10;

        if (width <= 0 || height <= 0) {
            div.style.display = "none";
            clearInterval(interval);
        } else {
            div.style.width = width + "px";
            div.style.height = height + "px";
        }

    }, 3000);
});
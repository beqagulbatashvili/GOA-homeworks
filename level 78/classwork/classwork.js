let total = 0;
let userInput;

do{
    userInput = prompt("გთხოვთ შეიყვანოთ რიცხვი (ამჟამინდელი ჯამი: " + total + ")");
    let number = +userInput;

    if (number === number && userInput !== "") {
        total += number;
    } else if (userInput === "") {
        alert("გთხოვთ შეიყვანოთ რიცხვი");
    } else {
        alert("გთხოვთ შეიყვანოთ რიცხვი");
    }
} while (total <= 100);

alert(total);
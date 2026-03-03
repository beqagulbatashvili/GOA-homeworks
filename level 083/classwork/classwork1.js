function calculateOperations() {
    let input1 = prompt("შეიყვანეთ პირველი რიცხვი:");
    let input2 = prompt("შეიყვანეთ მეორე რიცხვი:");

    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 ** num2);
    console.log(Math.floor(num1 / num2));
    console.log(num1 % num2);
}

calculateOperations();

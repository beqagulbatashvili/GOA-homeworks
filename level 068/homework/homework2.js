// 10)
let input = prompt("Enter a number:");
let number = Number(input);

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}


// 11)
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    alert("You can vote!");
} else {
    alert("You are not eligible to vote.");
}

// 12)

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
    alert("The first number is larger.");
} else if (num2 > num1) {
    alert("The second number is larger.");
} else {
    alert("Both numbers are equal.");
}

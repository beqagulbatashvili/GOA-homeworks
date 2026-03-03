//1)
let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}
// 2)
let score = Number(prompt("Enter the score:"));

if (score >= 90) {
    alert("Grade A");
} else if (score >= 80) {
    alert("Grade B");
} else if (score >= 70) {
    alert("Grade C");
} else if (score >= 60) {
    alert("Grade D");
} else {
    alert("Fail");
}
// 3)
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

if (a === b && b === c) {
    alert("All numbers are equal.");
} else if (a >= b && a >= c) {
    alert(a);
} else if (b >= a && b >= c) {
    alert(b);
} else {
    alert(c);
}
// 4)
let input = prompt("Enter a single character:");

if (
    input === "a" || input === "A" ||
    input === "e" || input === "E" ||
    input === "i" || input === "I" ||
    input === "o" || input === "O" ||
    input === "u" || input === "U"
) {
    alert("It is a vowel.");
} else if (
    input === "b" || input === "B" ||
    input === "c" || input === "C" ||
    input === "d" || input === "D" ||
    input === "f" || input === "F" ||
    input === "g" || input === "G" ||
    input === "h" || input === "H" ||
    input === "j" || input === "J" ||
    input === "k" || input === "K" ||
    input === "l" || input === "L" ||
    input === "m" || input === "M" ||
    input === "n" || input === "N" ||
    input === "p" || input === "P" ||
    input === "q" || input === "Q" ||
    input === "r" || input === "R" ||
    input === "s" || input === "S" ||
    input === "t" || input === "T" ||
    input === "v" || input === "V" ||
    input === "w" || input === "W" ||
    input === "x" || input === "X" ||
    input === "y" || input === "Y" ||
    input === "z" || input === "Z"
) {
    alert("It is a consonant.");
} else {
    alert("Invalid input. Please enter a single alphabet letter.");
}
// 5)
let number1 = Number(prompt("Enter a number:"));

if (number1 % 3 === 0 && number1 % 5 === 0) {
    alert("Divisible by both 3 and 5.");
} else if (number1 % 3 === 0) {
    alert("Divisible by 3 only.");
} else if (number1 % 5 === 0) {
    alert("Divisible by 5 only.");
} else {
    alert("Not divisible by 3 or 5.");
}
// 6)
let age = Number(prompt("Enter age:"));

if (age < 0) {
    alert("Invalid age.");
} else if (age <= 12) {
    alert("Child");
} else if (age <= 19) {
    alert("Teenager");
} else if (age <= 59) {
    alert("Adult");
} else {
    alert("Senior");
}
// 7)
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// 8)
let n = 2;
while (i <= 10) {
    console.log(n);
    n += 2;
}
// 9)
let h = 10;
while (h >= 1) {
    console.log(h);
    h--;
}
// 10)
for (let a = 1; a <= 10; a++) {
    console.log(a);
}
// 11)
for (let q = 1; q <= 5; q++) {
  console.log(q * 3);
}
// 12)
for (let w = 10; w >= 1; w--) {
    console.log(w);
}
// 13)
for (let e = 1; e <= 20; e++) {
    if (i % 2 === 0) {
    console.log(e);
    }
}
// 14)
let sum = 0;
for (let z = 1; z <= 5; z++) {
    sum += z;
}
console.log(sum);

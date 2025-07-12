// 1
for (let i = 1; i <= 20; i++) {
    if (i === 13) break;
    console.log(i);
}

// 2
let colors = ["red", "green", "yellow", "blue", "purple"];
for (let color of colors) {
    if (color === "blue") break;
    console.log(color);
}

// 3
for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 && i % 5 === 0) break;
    console.log(i);
}

// 4
let word = "javascript";
for (let letter of word) {
    if (letter === "a") break;
    console.log(letter);
}

// 5
let sum = 0;
for (let i = 1; ; i++) {
    sum += i;
    if (sum >= 100) break;
    console.log(i);
}

// 6
for (let i = 1; i <= 20; i++) {
    if (i === 13) continue;
    console.log(i);
}

// 7
let fruits = ["apple", "banana", "orange", "mango"];
for (let fruit of fruits) {
    if (fruit === "banana") continue;
    console.log(fruit);
}

// 8
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

// 9
let word2 = "developer";
for (let char of word2) {
    if (char === "e") continue;
    console.log(char);
}

// 10
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

// 11
const add = (a, b) => a + b;

// 12
const greet = name => `Hello, ${name}!`;

// 13
const doubleArray = arr => arr.map(num => num * 2);

// 14
const isEven = num => num % 2 === 0;

// 15
const getLength = str => str.length;

// 16
function printArgs(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}

// 17
function countArgs(...args) {
    console.log("Argument count:", args.length);
}

// 18
function sumNumbers(...args) {
    let total = 0;
    for (let arg of args) {
        if (typeof arg === "number") {
        total += arg;
        }
    }
    console.log("Total:", total);
}

// 19
function stopAtZero(...args) {
    for (let arg of args) {
        if (arg === 0) break;
        console.log(arg);
    }
}

// 20
function printOnlyNumbers(...args) {
    for (let arg of args) {
        if (typeof arg === "string") continue;
        console.log(arg);
    } 
}

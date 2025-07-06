// 1)
let obj1 = { name: 'John', age: 30 };
let keysArray = [];

for (let key in obj1) {
    keysArray.push(key);
}
console.log("1.", keysArray);

// 2)
let obj2 = { a: 10, b: 'hi', c: 20, d: false };
let sum = 0;

for (let key in obj2) {
    if (typeof obj2[key] === "number") {
        sum += obj2[key];
    }
}
console.log("2. Total:", sum);

// 3)
let obj3 = { name: 'John', age: 30, city: 'Paris' };
let resultString = "";

for (let key in obj3) {
    resultString += `${key}=${obj3[key]}, `;
    }
resultString = resultString.slice(0, -2);
console.log("3.", resultString);

// 4)
let obj4 = { name: "Anna", age: 25, married: false };

console.log("4.");
for (let key in obj4) {
    console.log(`${key}: ${typeof obj4[key]}`);
}

// 5)
let obj5 = {
    id: 1,
    info: {
        city: "Tbilisi"
    },
    active: true
    };

for (let key in obj5) {
    if (typeof obj5[key] === "object" && obj5[key] !== null && !Array.isArray(obj5[key])) {
        console.log(`5. Nested object found at key: ${key}`);
    }
}

// 6)
let words = ["hello", "JavaScript", "cat", "awesome", "sunshine"];

    console.log("6.");

    for (let word of words) {
    if (word.length > 5) {
        console.log(word);
    }
    }

// 7)
let chars = ['H', 'e', 'l', 'l', 'o'];
let word = "";

    for (let char of chars) {
    word += char;
    }
console.log("7.", word);

// 8)
let num = 1;

console.log("8.");
do {
    console.log(num);
    num *= 2;
    } while (num <= 1000);

// 9)
let inputs = [];
let input;

do {
    input = prompt("Enter a number (type 'stop' to finish):");
    if (input !== "stop") {
        inputs.push(input);
    }
} while (input !== "stop");

console.log("9. User inputs:", inputs);

// 10)
let countdown = 30;

console.log("10.");
do {
    console.log(countdown);
    countdown -= 3;
} while (countdown >= 0);

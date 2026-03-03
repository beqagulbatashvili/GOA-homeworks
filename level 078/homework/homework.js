// 4) 
console.log("4)");
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// 5)  
console.log("5)");
let n = 2;
do {
    console.log(n);
    n += 2;
} while (n <= 10);

// 6) 
console.log("6)");
let x = 10;
do {
    console.log(x);
    x--;
} while (x >= 1);

// 7)  
console.log("7)");
let num;
do {
    num = Number(prompt("Enter a number greater than 100:"));
} while (num <= 100);
console.log("You entered:", num);

// 8)  
console.log("8)");
let sum = 0;
let j = 1;
do {
    sum += j;
    j++;
} while (j <= 10);
console.log("Total sum:", sum);

// 9) 
console.log("9)");
let numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
    console.log(num);
}

// 10)  
console.log("10)");
let text = "Hello";
for (let char of text) {
    console.log(char);
}

// 11)  
console.log("11)");
let sum1 = 0;
for (let num of numbers) {
    sum1 += num;
}
console.log("Total sum:", sum);

// 12)  
console.log("12)");
for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 13) 
console.log("13)");
let names = ["Nika", "Lika", "Dato", "Ana"];
for (let name of names) {
    console.log(name);
}

// 14)  
console.log("14)");
let person = {
    name: "BEQA",
    age: 14,
    city: "Tbilisi"
    };
for (let key in person) {
    console.log(key);
}

// 15)  
console.log("15)");
for (let key in person) {
    console.log(person[key]);
}

// 16)  
console.log("16)");
let count = 0;
for (let key in person) {
    count++;
    }
console.log("Property count:", count);

// 17)  
console.log("17)");
let hasCity = false;
for (let key in person) {
    if (key === "city") {
        hasCity = true;
        break;
    } 
}
console.log("Has 'city' key:", hasCity);

// 18)  
console.log("18)");
let keyList = "";
for (let key in person) {
    keyList += key + ", ";
}
keyList = keyList.slice(0, -2);
console.log("Keys:", keyList);
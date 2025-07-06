// 1)
let password;

do {
    password = prompt("Enter the password:");
} while (password !== "js123");

alert("corect password!");
// 2)
let num = 51;

do {
    if (num % 7 === 0) {
        console.log(num);
        break;
    }
    num++;
} while (true);
// 3)
let names = ['john', 'mike', 'lisa', 'tom'];

for (let name of names) {
    let capitalized = name[0].toUpperCase() + name.slice(1);
    console.log(capitalized);
}
// 4)
let text = "JavaScript is awesome";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of text) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log(count);
// 5)
let numbers = [3, 7, 10, 1, 5];
let doubledNumbers = [];

for (let num of numbers) {
  doubledNumbers.push(num * 2);
}

console.log(doubledNumbers);

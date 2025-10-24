// 3.
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(`Number ${num} is ${result}`);

// 4.
let a = 12, b = 25;
let greater = (a > b) ? a : b;
console.log(`Greater number is: ${greater}`);

// 5.
let age = 17;
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(`Voting Status: ${eligibility}`);

// 6.
let score = 45;
let grade = (score >= 50) ? "Pass" : "Fail";
console.log(`Result: ${grade}`);

// 7.
let number = 0;
let check = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
console.log(`Number ${number} is ${check}`);

// 8.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);

// 9.
let person = { name: "Alice", age: 25 };
let updatedPerson = { ...person, age: 30 };
console.log("Original Object:", person);
console.log("Modified Copy:", updatedPerson);

// 10.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sum(10, 20, 30, 40));

// 11.
const user = { id: 1, name: "Beqa", age: 22, country: "Georgia" };
const { name, ...otherInfo } = user;
console.log("Name:", name);
console.log("Other Info:", otherInfo);

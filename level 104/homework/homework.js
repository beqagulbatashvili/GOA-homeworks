// 2
let person = { name: "Luka", age: 20, city: "Tbilisi", hobby: "Football", student: true };
console.log(Object.keys(person));

// 3
console.log(Object.keys(person).length);

// 4
function upperKeys(obj) {
    return Object.keys(obj).map(k => k.toUpperCase());
}
console.log(upperKeys(person));

// 5
let keyExists = Object.keys(person).includes("city");
console.log(keyExists);

// 6
let nested = { user: { name: "Ana" }, job: { title: "Dev" }, country: "Georgia" };
console.log(Object.keys(nested));

// 7
let car = { brand: "BMW", model: "X5", year: 2020, color: "black", price: 30000 };
console.log(Object.values(car));

// 8
console.log(Object.values(car).length);

// 9
function numericValues(obj) {
    return Object.values(obj).filter(v => typeof v === "number");
}
console.log(numericValues(car));

// 10
let sum = Object.values(car).filter(v => typeof v === "number").reduce((a, b) => a + b, 0);
console.log(sum);

// 11
let valueExists = Object.values(car).includes("BMW");
console.log(valueExists);

// 12
let book = { title: "1984", author: "Orwell", pages: 300, genre: "Dystopia", price: 15 };
console.log(Object.entries(book));

// 13
function printEntries(obj) {
    Object.entries(obj).forEach(([k, v]) => console.log(`${k}: ${v}`));
}
printEntries(book);

// 14
let arr = Object.entries(book).map(([k, v]) => `${k}=${v}`);
console.log(arr);

// 15
function filterGreaterThan10(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => typeof v === "number" && v > 10));
}
console.log(filterGreaterThan10(book));

// 16
function swap(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
console.log(swap(book));

// 17
let user = { id: 1, name: "Mariam", age: 25 };
console.log("age" in user);

// 18
console.log("salary" in user);

// 19
console.log(user.hasOwnProperty("toString"));

// 20
user.job = "Designer";
console.log(Object.hasOwn(user, "job"));

// 21
delete user.age;
console.log("age" in user);

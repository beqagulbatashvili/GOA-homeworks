// 2
let today = new Date();
console.log(today.getDate());

// 3
let birthday = new Date(2025, 5, 15);
console.log(birthday.getDate());

// 4
console.log(today.getDate() === 1);

// 5
console.log(today.getDay());

// 6
console.log(birthday.getDay());

// 7
console.log(today.getDay() === 0);

// 8
console.log(today.getFullYear());

// 9
console.log(birthday.getFullYear());

// 10
console.log(today.getFullYear() === 2025);

// 11
console.log(today.getHours());

// 12
let someDate = new Date("2025-09-20T14:30:00");
console.log(someDate.getHours());

// 13
console.log(today.getHours() < 12);

// 14
console.log(today.getMinutes());

// 15
console.log(someDate.getMinutes());

// 16
console.log(today.getMinutes() === 0);

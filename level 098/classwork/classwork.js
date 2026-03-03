let numbers = [12, 45, 67, 23, 89, 34, 56, 7, 92, 28];

let firstGreaterThan50 = numbers.find(num => num > 50);
console.log(firstGreaterThan50);

let firstDivisibleBy7 = numbers.find(num => num % 7 === 0);
console.log(firstDivisibleBy7);




let numbersarr = [10, 20, 30, 40, 50];
numbersarr.splice(1, 1, 99);

console.log(numbersarr);





let number = [5, 10, 15, 20, 25];

let removed = numbers.pop();

console.log(removed);      
console.log(numbers);

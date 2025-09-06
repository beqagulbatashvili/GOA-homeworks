// 1)
let numbers = [1, 3, 5, 7, 9];
let allOdd = numbers.every(num => num % 2 !== 0);
console.log(allOdd);

// 2) რა არის every() მეთოდი
// every() ამოწმებს, ასრულებს თუ არა ყველა ელემენტი მოცემულ პირობას.
// აბრუნებს true თუ ყველა ელემენტმა დააკმაყოფილა პირობა, 
// წინააღმდეგ შემთხვევაში false.


// 3)
let names = ["Nika", "Ana", "Gio", "Mariam", "Lasha"];
let allLongerThan3 = names.every(name => name.length > 3);
console.log(allLongerThan3);

// 4)
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let even = nums.filter(n => n % 2 === 0);
let odd = nums.filter(n => n % 2 !== 0);
console.log(even);
console.log(odd);

// 5)
let nameList = ["Ana", "Giorgi", "Nino", "Dato", "Sopo"];
let found = nameList.find(n => n.length === 4);
console.log(found);


// 6)filter() და find() მეთოდები
// filter():
// აბრუნებს ახალ მასივს იმ ელემენტებით, რომლებიც აკმაყოფილებენ პირობას.

// find():
// აბრუნებს პირველ ელემენტს, რომელიც აკმაყოფილებს პირობას.
// თუ ვერ იპოვა, აბრუნებს undefined.
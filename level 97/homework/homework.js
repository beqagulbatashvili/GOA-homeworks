// 1)
let nums = [5, -2, 10, 7];
let hasNegative = nums.some(n => n < 0);
console.log(hasNegative);


// 2)
let strings = ["Hello", "Programming", "JS"];
let longString = strings.some(str => str.length > 10);
console.log(longString);


// 3)
let ages = [22, 15, 30, 40];
let under18 = ages.some(age => age < 18);
console.log(under18);


// 4)
let numbers = [3, 7, 12, 20];
let divisibleBy5 = numbers.some(n => n % 5 === 0);
console.log(divisibleBy5);


// 5)
let users = [
    { name: "Nika", isActive: false },
    { name: "Ana", isActive: false },
    { name: "Gio", isActive: true }
];
let activeExists = users.some(user => user.isActive);
console.log(activeExists);


// 6)
let numsArr = [1, 2, 3, 4, 5];
numsArr.forEach(n => console.log(n));


// 7)
let words = ["apple", "banana", "cherry"];
words.forEach(w => console.log(w.toUpperCase()));


// 8)
let arrNums = [10, 20, 30, 40];
let sum = 0;
arrNums.forEach(n => sum += n);
console.log(sum);


// 9)
let names = ["Nika", "Ana", "Gio"];
names.forEach(name => console.log(`გამარჯობა, ${name}!`));


// 10)
let numList = [1, 2, 3, 4, 5, 6];
let oddCount = 0;
numList.forEach(n => {
    if (n % 2 !== 0) oddCount++;
});
console.log(oddCount);


// 11)
let numsCube = [2, 3, 4];
let cubes = numsCube.map(n => n ** 3);
console.log(cubes);


// 12)
let wordsArr = ["cat", "dog", "bird"];
let reversed = wordsArr.map(w => w.split("").reverse().join(""));
console.log(reversed);


// 13)
let celsius = [0, 20, 30];
let fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit);


// 14)
let values = [5, 10, 15];
let valueStrings = values.map(v => "Value: " + v);
console.log(valueStrings);


// 15)
let people = [
    { firstName: "Nika", lastName: "Papashvili" },
    { firstName: "Ana", lastName: "Beridze" }
];
let fullNames = people.map(p => `${p.firstName} ${p.lastName}`);
console.log(fullNames); 

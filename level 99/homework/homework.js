// 2
let nums = [1, 2, 3, 4, 5];
console.log(nums.reverse());

// 3
let fruits = ["apple", "banana", "mango"];
let revFruits = fruits.reverse();
console.log(revFruits[0]);

// 4
let chars = ["o","l","l","e","h"];
console.log(chars.reverse().join(""));

// 5
let numbers = [7, 2, 9, 4];
let reversed = numbers.reverse();
console.log(Math.max(...reversed));

// 6
let arr = [10, 20, 30];
console.log(arr.reverse().join(","));

// 7
let fruits2 = ["apple", "banana", "orange"];
fruits2.shift();
console.log(fruits2);

// 8
let nums2 = [10, 20, 30, 40];
nums2.shift();
console.log(nums2);

// 9
let items = ["a", "b", "c"];
let removed = items.shift();
console.log(removed);

// 10
let arr2 = [1, 2, 3];
while(arr2.length > 0) {
  console.log(arr2.shift());
}

// 11
let mixed = [100, "hello", 200];
mixed.shift();
console.log(mixed);

// 12
let fruits3 = ["apple", "pear", "grape"];
console.log(fruits3.join(","));

// 13
let nums3 = [1, 2, 3];
console.log(nums3.join(" "));

// 14
let words = ["code", "with", "me"];
console.log(words.join("-"));

// 15
let chars2 = ["j","s"];
console.log(chars2.join(""));

// 16
let names = ["Anna", "Luka", "Nino"];
console.log(names.join(" | "));

// 17
console.log(Math.abs(15));

// 18
console.log(Math.abs(-42));

// 19
let nums4 = [-3, 7, -8];
let absArr = nums4.map(n => Math.abs(n));
console.log(absArr);

// 20
let a = 20, b = 35;
console.log(Math.abs(a - b));

// 21
let n = -50;
console.log(Math.abs(n));

// 22
console.log(Math.ceil(4.3));

// 23
console.log(Math.ceil(-4.3));

// 24
let decimals = [1.2, 3.7, 5.1];
let ceilArr = decimals.map(n => Math.ceil(n));
console.log(ceilArr);

// 25
let div = 10 / 3;
console.log(Math.ceil(div));

// 26
let price = 99.99;
let tax = 0.08;
let total = price * (1 + tax);
console.log(Math.ceil(total));

// 27
console.log(Math.floor(4.9));

// 28
console.log(Math.floor(-4.9));

// 29
let decimals2 = [1.9, 3.2, 5.7];
let floorArr = decimals2.map(n => Math.floor(n));
console.log(floorArr);

// 30
let div2 = 10 / 3;
console.log(Math.floor(div2));

// 31
let price2 = 80;
let discount = 0.15;
let discounted = price2 * (1 - discount);
console.log(Math.floor(discounted));

// 32
console.log(Math.round(4.6));

// 33
console.log(Math.round(-4.6));

// 34
let decimals3 = [2.3, 3.8, 5.5];
let roundArr = decimals3.map(n => Math.round(n));
console.log(roundArr);

// 35
let div3 = 7 / 2;
console.log(Math.round(div3));

// 36
let price3 = 120.75;
let tax2 = 0.1;
let total2 = price3 * (1 + tax2);
console.log(Math.round(total2));

// 37
console.log(Math.max(15, 25));

// 38
console.log(Math.max(5, 12, 9));

// 39
let nums5 = [8, 2, 15, 6];
let manualMax = nums5[0];
for (let i = 1; i < nums5.length; i++) {
  if (nums5[i] > manualMax) manualMax = nums5[i];
}
console.log(manualMax);

// 40
let nums6 = [3, 7, 2, 9];
console.log(Math.max(...nums6));

// 41
let nums7 = [-5, -2, 10, -8, 4];
console.log(Math.max(...nums7));

// 42
console.log(Math.min(15, 25));

// 43
console.log(Math.min(5, 12, 9));

// 44
let nums8 = [8, 2, 15, 6];
let manualMin = nums8[0];
for (let i = 1; i < nums8.length; i++) {
  if (nums8[i] < manualMin) manualMin = nums8[i];
}
console.log(manualMin);

// 45
let nums9 = [3, 7, 2, 9];
console.log(Math.min(...nums9));

// 46
let nums10 = [-5, -2, 10, -8, 4];
console.log(Math.min(...nums10));

// 47
console.log(Math.pow(2, 3));

// 48
console.log(Math.pow(5, 0.5));

// 49
let numCube = 4;
console.log(Math.pow(numCube, 3));

// 50
let base = 7;
let exp = 2;
console.log(Math.pow(base, exp));

// 51
let nums11 = [1, 2, 3, 4];
let squares = nums11.map(n => Math.pow(n, 2));
console.log(squares);

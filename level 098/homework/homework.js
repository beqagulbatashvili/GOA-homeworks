// 1
let arr1 = ["Banana", "Apple", "Avocado", "Mango"];
console.log(arr1.find(str => str.startsWith("A")));

// 2
let users1 = [
    { name: "Nika", age: 25 },
    { name: "Ana", age: 35 },
    { name: "Gio", age: 28 }
];
console.log(users1.find(u => u.age > 30));

// 3
let words1 = ["dog", "banana", "car"];
console.log(words1.find(w => w.length > 5));

// 4
let products1 = [
    { name: "Book", price: 25 },
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 50 }
];
console.log(products1.find(p => p.price < 20));

// 5
let students1 = [
    { name: "Nika", grade: "B" },
    { name: "Ana", grade: "A" },
    { name: "Gio", grade: "C" }
];
console.log(students1.find(s => s.grade === "A"));

// 6
let nums1 = [10, 5, -2, 7];
console.log(nums1.findIndex(n => n < 0));

// 7
let arr2 = ["play", "running", "eat"];
console.log(arr2.findIndex(str => str.endsWith("ing")));

// 8
let users2 = [
    { name: "Nika", isActive: false },
    { name: "Ana", isActive: true },
    { name: "Gio", isActive: false }
];
console.log(users2.findIndex(u => u.isActive));

// 9
let nums2 = [3, 7, 20, 11];
console.log(nums2.findIndex(n => n % 10 === 0));

// 10
let fruits1 = ["apple", "peach", "mango", "grape"];
console.log(fruits1.findIndex(f => f.length === 5));

// 11
let nums3 = [50, 120, 99, 200];
console.log(nums3.findLast(n => n > 100));

// 12
let arr3 = ["dog", "tree", "apple", "sky"];
console.log(arr3.findLast(str => str.includes("e")));

// 13
let users3 = [
    { name: "Nika", age: 30 },
    { name: "Ana", age: 20 },
    { name: "Gio", age: 40 }
];
console.log(users3.findLast(u => u.age < 25));

// 14
let nums4 = [2, 4, 101, 77, 80];
console.log(nums4.findLast(n => n % 2 !== 0));

// 15
let words2 = ["car", "orange", "apple", "umbrella"];
console.log(words2.findLast(w => /^[aeiou]/i.test(w)));

// 16
let nums5 = [20, 40, 55, 75];
console.log(nums5.findLastIndex(n => n > 50));

// 17
let arr4 = ["Sun", "Moon", "Star", "Sky"];
console.log(arr4.findLastIndex(str => str.startsWith("S")));

// 18
let users4 = [
    { name: "Nika", isActive: false },
    { name: "Ana", isActive: true },
    { name: "Gio", isActive: true }
];
console.log(users4.findLastIndex(u => u.isActive));

// 19
let nums6 = [2, 9, 12, 18, 22];
console.log(nums6.findLastIndex(n => n % 3 === 0));

// 20
let fruits2 = ["pear", "kiwi", "plum", "mango"];
console.log(fruits2.findLastIndex(f => f.length === 4));

// 21
let nums7 = [10, 25, 30, 40];
console.log(nums7.indexOf(25));

// 22
let fruits3 = ["banana", "apple", "grape"];
console.log(fruits3.indexOf("apple"));

// 23
let letters1 = ["a", "b", "c", "a"];
console.log(letters1.indexOf("a"));

// 24
let animals1 = ["dog", "cat", "bird"];
console.log(animals1.indexOf("cat"));

// 25
let nums8 = [10, 20, 30, 40];
console.log(nums8.indexOf(100));

// 26
let nums9 = [10, 20, 10, 30, 10];
console.log(nums9.lastIndexOf(10));

// 27
let fruits4 = ["apple", "banana", "apple"];
console.log(fruits4.lastIndexOf("apple"));

// 28
let letters2 = ["a", "b", "c", "a", "d"];
console.log(letters2.lastIndexOf("a"));

// 29
let animals2 = ["dog", "cat", "dog", "bird"];
console.log(animals2.lastIndexOf("dog"));

// 30
let nums10 = [0, 1, -2, 0, 3];
console.log(nums10.lastIndexOf(0));

// 31
let nums11 = [10, 20, 30];
let removed1 = nums11.pop();
console.log(removed1);

// 32
let fruits5 = ["apple", "banana", "grape"];
let removed2 = fruits5.pop();
console.log(removed2);

// 33
let arr5 = [1, 2, 3];
while (arr5.length > 0) {
    console.log(arr5.pop());
}

// 34
let users5 = [
    { name: "Nika" },
    { name: "Ana" },
    { name: "Gio" }
];
let removed3 = users5.pop();
console.log(removed3);

// 35
let arr6 = ["a", "b", "c"];
let lastElement = arr6.pop();
console.log(lastElement);

// 36
let arr7 = [1, 2, 3, 4, 5];
arr7.splice(0, 2);
console.log(arr7);

// 37
let fruits6 = ["apple", "banana", "pear"];
fruits6.splice(2, 0, "orange", "grape");
console.log(fruits6);

// 38
let fruits7 = ["apple", "banana", "pear", "kiwi"];
fruits7.splice(3, 1, "mango");
console.log(fruits7);

// 39
let arr8 = [1, 2, 3, 4, 5, 6];
arr8.splice(-3);
console.log(arr8);

// 40
let nums12 = [10, 20, 30, 40];
nums12.splice(2, 0, 25);
console.log(nums12);

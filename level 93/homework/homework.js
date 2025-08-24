// 2–6) repeat
console.log("Hello".repeat(3));
console.log("*".repeat(20));
console.log("abc".repeat(4));

function repeatWord(word, num) {
  return word.repeat(num);
}
console.log(repeatWord("Hi", 5));
console.log("█".repeat(10));

// 7–11) replace (first occurrence)
let str1 = "The cat chased another cat.";
console.log(str1.replace("cat", "dog"));

let str2 = "banana";
console.log(str2.replace("a", "o"));

let str3 = "Hello World from JS";
console.log(str3.replace(" ", "-"));

let str4 = "12345abc678";
console.log(str4.replace(/\d/, "#"));

let str5 = "Monday is a good day";
console.log(str5.replace("day", "night"));

// 12–16) replaceAll (all occurrences)
let s1 = "Hello World from JS";
console.log(s1.replaceAll(" ", "_"));

let s2 = "cat and cat are friends";
console.log(s2.replaceAll("cat", "dog"));

let s3 = "My number is 12345";
console.log(s3.replace(/\d/g, "#"));

let s4 = "Javascript is fun";
console.log(s4.replace(/[aeiou]/gi, "*"));

let s5 = "www.example.com";
console.log(s5.replaceAll(".", "-"));

// 17–21) slice
let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.slice(0,4));

let fruits = ["apple","banana","cherry","mango"];
console.log(fruits.slice(-2));

let cities = ["Paris","London","Rome","Berlin","Madrid","Tokyo"];
console.log(cities.slice(2,-1));

let students = ["Ana","Luka","Nika","Gio","Saba","Mari","Elene","Dato","Tamo","Lizi"];
console.log(students.slice(-5));

let letters = ['a','b','c','d','e','f'];
console.log(letters.slice(2,5));

// 22–26) split
let date = "2025-08-17";
console.log(date.split("-"));

let words = "one two three four five";
console.log(words.split(" "));

let csv = "John,Doe,25,Developer";
console.log(csv.split(","));

let chars = "abc";
console.log(chars.split(""));

let sentence = "JavaScript is fun";
let arr = sentence.split(" ");
console.log(arr[1]);

// 3–7)

// 3) check if string starts with "Hello"
function startsWithHello(str) {
    return str.startsWith("Hello");
}
console.log(startsWithHello("Hello World")); // true
console.log(startsWithHello("Hi there"));    // false

// 4) check if filename starts with "img_"
function checkImageFile(filename) {
    return filename.startsWith("img_") ? "Image file" : "Not an image file";
}
console.log(checkImageFile("img_123.png"));
console.log(checkImageFile("photo.png"));

// 5) check if sentence starts with "Once upon"
let sentence = "Once upon a time there was a king.";
console.log(sentence.startsWith("Once upon")); // true

// 6) check if string starts with substring at given position
function startsWithAt(str, sub, pos) {
    return str.startsWith(sub, pos);
}
console.log(startsWithAt("JavaScript is fun", "is", 11)); // true

// 7) count names starting with "Dr."
function countDoctors(names) {
    let count = 0;
    for (let name of names) {
        if (name.startsWith("Dr.")) count++;
    }
    return count;
}
console.log(countDoctors(["Dr. Smith", "Alice", "Dr. Brown", "Bob"]));

// 8–12)

// 8) remove extra spaces with trim()
function cleanString(str) {
  return str.trim();
}
console.log(cleanString("   Hello World   "));

// 9) use trimStart()
let lead = "     Frontend";
console.log(lead.trimStart());

// 10) use trimEnd()
let trail = "Backend     ";
console.log(trail.trimEnd());

// 11) clean usernames list
function cleanUsernames(usernames) {
  return usernames.map(u => u.trim());
}
console.log(cleanUsernames(["  Alice ", " Bob  ", "  Charlie"]));

// 12) check empty after trimming
function isEmptyAfterTrim(str) {
  return str.trim() === "";
}
console.log(isEmptyAfterTrim("      ")); // true
console.log(isEmptyAfterTrim(" JS "));   // false

// 13–17)

// 13) push five numbers into empty array
let arr1 = [];
arr1.push(1);
arr1.push(2);
arr1.push(3);
arr1.push(4);
arr1.push(5);
console.log(arr1);

// 14) push two fruits at once
let fruits = ["apple", "banana"];
fruits.push("mango", "kiwi");
console.log(fruits);

// 15) push until "stop"
function collectInputs(inputs) {
    let collected = [];
    for (let word of inputs) {
    if (word === "stop") break;
    collected.push(word);
    }
    return collected;
}
console.log(collectInputs(["hi","hello","test","stop","ignore"]));

// 16) push sum of numbers
let numbers = [2,4,6];
let sum = numbers.reduce((a,b)=>a+b,0);
numbers.push(sum);
console.log(numbers);

// 17) push first 10 even numbers
let evens = [];
for (let i=2; evens.length<10; i+=2) {
    evens.push(i);
}
console.log(evens);

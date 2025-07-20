
let text ="hello"
console.log(text.charAt(0))

let user_text =prompt("enter text:")
console.log(user_text.charAt(2))

function isFirstCharCapital(str) {
    if (str && str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
        console.log("Capital");
    } else {
        console.log("Not capital");
    }
}
console.log(isFirstCharCapital())


let text1 = "hello world";
console.log(text.toUpperCase());


alert(name.toUpperCase());


let str1 = "JavaScript";
let str2 = "javascript";
if (str1.toUpperCase() === str2.toUpperCase()) {
    console.log("Strings are equal");
    } else {
    console.log("Strings are not equal");
}


let part1 = "Hello, ";
let part2 = "world!";
let result = part1.concat(part2);
console.log(result);


let lastName = prompt("Enter your last name:");
let fullName = firstName.concat(" ", lastName);
console.log("Full name:", fullName);


let s1 = "Learning ";
let s2 = "JavaScript ";
let s3 = "is fun!";
let sentence = s1.concat(s2, s3);
console.log(sentence);


let status = "Task is done";
console.log(status.endsWith("done"));

let userInput = prompt("Enter a sentence:");
console.log(userInput.endsWith("!"));


let filename = "image.jpg";
if (filename.endsWith(".jpg")) {
    console.log("This is a JPG image.");
    } else {
    console.log("Not a JPG image.");
}

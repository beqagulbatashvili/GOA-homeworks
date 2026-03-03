let words = ["apple", "ball", "doll", "bog", "ant", "world", "apple", "girl", "BOY", "jag"];

let filtered = words.filter(function(word) {
    return word.startsWith("a");
});

console.log(filtered);


let firstName = prompt("Enter your first name");
let cleanFirst = firstName.trimStart();
console.log(cleanFirst);

let lastName = prompt("Enter your last name");
let cleanLast = lastName.trimEnd();
console.log( cleanLast);

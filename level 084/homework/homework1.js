let greeting = "Say hello to everyone.";
console.log(greeting.includes("hello"));

let username = prompt("Enter your name:");
let sentence = prompt("Enter a sentence:");
console.log(sentence.includes(username));

let email = "example@mail.com";
console.log(email.includes("@"));

let sample1 = "Elephant";
console.log(sample1.indexOf("e"));

let userSentence = prompt("Enter a sentence:");
console.log(userSentence.indexOf(" "));

let textWithComma = "Apples, oranges, bananas";
console.log(textWithComma.indexOf(","));

let word = "Canada";
console.log(word.lastIndexOf("a"));

let lastSpaceSentence = prompt("Enter a sentence:");
console.log(lastSpaceSentence.lastIndexOf(" "));

let paragraph = "It's good to be good and do good things.";
console.log(paragraph.lastIndexOf("good"));

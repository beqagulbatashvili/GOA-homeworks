let original = prompt("enter text");
let toReplace = prompt("which part you need to change?");
let newPart = prompt("What should I replace it with?");
let choice = prompt("one or all");

let result;

if (choice === "one") {
    result = original.replace(toReplace, newPart);
    } else {
    result = original.replaceAll(toReplace, newPart); 
}

console.log(result);

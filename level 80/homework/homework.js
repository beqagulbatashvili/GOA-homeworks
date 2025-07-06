// 3)  
let userName = "Nika";
let userAge = 25;
let greeting = `Hello, ${userName}! You are ${userAge} years old.`;
console.log("3)", greeting);

// 4) 
let poem = `4)
    Roses are red,
    Violets are blue,
    JavaScript is awesome,
    And so are you!`;
console.log(poem);

// 5)  
let a = 7;
let b = 5;
let mathMessage = `5)
    The numbers are ${a} and ${b}
    Their sum is ${a + b}
    Their product is ${a * b}`;
    console.log(mathMessage);

// 6) 
let trafficLight = "yellow";

    console.log("6)");
    switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
    }

// 7)  
let operation = "multiply";
let num1 = 8;
let num2 = 3;
let result;

console.log("7)");
    switch (operation) {
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        result = num1 / num2;
        break;
    default:
        result = "Unknown operation";
    }
    
    console.log(`Result: ${result}`);

// 8) 
let month = "October";
let season;

    console.log("8)");
    switch (month) {
    case "December":
    case "January":
    case "February":
        season = "Winter";
        break;
    case "March":
    case "April":
    case "May":
        season = "Spring";
        break;
    case "June":
    case "July":
    case "August":
        season = "Summer";
        break;
    case "September":
    case "October":
    case "November":
        season = "Autumn";
        break;
    default:
        season = "Unknown";
    }
console.log(`${month} is in ${season}`);

// 9)
let role = "editor";

console.log("9)");
switch (role) {
    case "admin":
        console.log("Full access granted.");
        break;
    case "editor":
        console.log("Edit access granted.");
        break;
    case "subscriber":
        console.log("Read-only access granted.");
        break;
    default:
        console.log("Unknown role.");
}

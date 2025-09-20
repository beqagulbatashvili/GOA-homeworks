// 2
console.log(Math.random());

// 3
function randomDecimal() {
    return Math.random();
}
console.log(randomDecimal());

// 4
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());

// 5
function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}
console.log(flipCoin());

// 6
function generatePassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
console.log(generatePassword());

// 7
function randomBool() {
    return Math.random() < 0.5;
}
console.log(randomBool());

// 8
console.log(Math.trunc(12.987));

// 9
console.log(Math.trunc(-45.67)); 
console.log(Math.floor(-45.67)); 

// 10
let randNum = Math.random() * 100;
console.log("Before:", randNum);
console.log("Truncated:", Math.trunc(randNum));

// 11
let str = "34.89";
console.log(Math.trunc(Number(str)));

// 12
let arr = [3.14, 7.9, -2.5, 0.99];
let truncArr = arr.map(n => Math.trunc(n));
console.log(truncArr);

// 14) 
console.log(`isNaN("hello"):`, isNaN("hello")); 

// 15)  
let userInput = prompt("Enter something:");
console.log(`You entered: "${userInput}", isNaN:`, isNaN(userInput));

// 16) 
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN(undefined):", isNaN(undefined)); 
console.log("isNaN(null):", isNaN(null));            
console.log("isNaN(true):", isNaN(true));          
console.log('isNaN("123"):', isNaN("123"));

// 17)  
console.log('parseInt("42"):', parseInt("42"));

// 18)  
console.log('parseInt("42px"):', parseInt("42px"));

// 19)
console.log('parseInt("abc"):', parseInt("abc"));

// 20)
let strNums = ["10", "20", "30"];
for (let str of strNums) {
    console.log(`parseInt("${str}"):`, parseInt(str));
}

// 21) 
console.log('parseFloat("3.14"):', parseFloat("3.14")); 

// 22)
console.log('parseFloat("3.14abc"):', parseFloat("3.14abc")); 

// 23)
console.log('parseFloat("abc3.14"):', parseFloat("abc3.14")); 

// 24)
console.log('parseFloat("100"):', parseFloat("100")); 

// 25)
let mixed = ["10.5", "20.0", "abc", "30.7xyz"];
for (let val of mixed) {
    console.log(`parseFloat("${val}"):`, parseFloat(val));
}

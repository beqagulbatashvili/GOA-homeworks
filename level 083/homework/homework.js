// 6)
function showNumber() {
    let localVar = 5;
    console.log("Inside function:", localVar);
}
showNumber();
try {
    console.log("Outside function:", localVar);
} catch (e) {
    console.log("Outside function error:", e.message);
}

// 7)
function outerFunction() {
    let count = 0;
    console.log("Before inner call:", count);
    
    function innerFunction() {
        count += 5;
    }

    innerFunction();
    console.log("After inner call:", count);
}
outerFunction();

// 8)
function scopeTest() {
    if (true) {
        var a = 1;
        let b = 2; 
        const c = 3; 
        console.log("Inside block:", a, b, c);
    }
    console.log("Outside block (var):", a); 
    try {
        console.log("Outside block (let):", b); 
    } catch (e) {
        console.log("Outside block (let) error:", e.message);
    }
    try {
        console.log("Outside block (const):", c);
    } catch (e) {
        console.log("Outside block (const) error:", e.message);
    }
}
scopeTest();

// 9) 
let result = eval("2 + 2");
console.log("Result of eval('2 + 2'):", result);

// 10) 
eval("var x = 10;");
console.log("x after eval:", x); 

// 11) 
eval("function greet() { return 'Hello'; }");
console.log("Calling eval-defined function:", greet());

// 12) 
let message = 'Hi';
eval("console.log('Inside eval, message:', message)");

// 13)
let userInput = "5 * 5";
let evalResult = eval(userInput);
console.log("Eval from simulated prompt input:", evalResult);

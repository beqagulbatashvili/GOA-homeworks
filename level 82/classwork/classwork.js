// 2)
let person = {
    name: "beqa",
    age: "14",
    city: "თბილისი"
};


let printValues = function(obj) {
    for (let key in obj) {
        console.log(obj[key]);
    }
};
printValues(person);


// 2)
let result = ((arr) => {
    let product = 1;
    for (let num of arr) {
        product *= num;
    }
    return product;
})([2, 3, 4]); 

console.log(result);
// 3)
let reversed = (function(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
})("hello");

console.log(reversed);

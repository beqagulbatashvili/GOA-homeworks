// 2
let multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // 12

// 3
setInterval(function() {
    console.log("Message every 2 seconds");
}, 2000);

// 4
    document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

// 5
const add = (a, b) => a + b;

// 6
const checkEvenOdd = num => num % 2 === 0 ? "Even" : "Odd";

// 7
const getLengths = strings => strings.map(str => str.length);

// 8
const filterNegatives = arr => arr.filter(num => num >= 0);

// 9
(function() {
  console.log("Hello, world!");
})();

// 10
(function(num) {
  console.log(num * num);
})(5);

// 11
(function(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log("Sum:", sum);
})([1, 2, 3, 4, 5]); 

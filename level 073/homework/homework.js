// 1
let count = 1;
const counterInterval = setInterval(() => {
    console.log("Counter:", count);
    count++;
    if (count > 5) {
        clearInterval(counterInterval);
    }
}, 1000);

// 2
const messageInterval = setInterval(() => {
    console.log("Hello every 2 seconds");
}, 2000);

setTimeout(() => {
    clearInterval(messageInterval);
}, 10000);

// 3
let bgChangeCount = 0;
const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];

const bgInterval = setInterval(() => {
    document.body.style.backgroundColor = colors[bgChangeCount % colors.length];
    bgChangeCount++;
    if (bgChangeCount === 5) {
        clearInterval(bgInterval);
    }
}, 3000);

// 4
const timeInterval = setInterval(() => {
    const now = new Date();
    console.log("Time:", now.toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(timeInterval);  
}, 15000);

// 5
let seconds = 0;
const timer = setInterval(() => {
    seconds++;
    console.log("Timer:", seconds);
    if (seconds === 10) {
        clearInterval(timer);
    }
}, 1000);

// 6
const numbers = [10, 20, 30, 40];
console.log(numbers[1]);

// 7
const arr = [5, 15, 25];
arr[0] = 100;
console.log(arr);

// 8
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 9
const nums = [2, 4, 6, 8, 10];
const sum = nums[0] + nums[nums.length - 1];
console.log(sum);

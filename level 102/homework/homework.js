// 2
let now = new Date();
console.log(now.getSeconds());

// 3
alert(new Date().getSeconds());

// 4
function getSeconds(date) {
    return date.getSeconds();
}
console.log(getSeconds(new Date("2025-09-20T14:25:45")));

// 5
let d1 = new Date("2025-09-20T14:25:45");
let d2 = new Date("2025-09-20T14:25:50");
console.log(d1.getSeconds() === d2.getSeconds());

// 6
setInterval(() => {
    console.log(new Date().getSeconds());
}, 1000);

// 7
let dateMonth = new Date();
console.log(dateMonth.getMonth());

// 8
alert(new Date().getMonth());

// 9
function getMonth(date) {
    return date.getMonth();
}
console.log(getMonth(new Date("2025-12-25")));

// 10
let m1 = new Date("2025-09-20");
let m2 = new Date("2025-10-20");
console.log(m1.getMonth() === m2.getMonth());

// 11
setInterval(() => {
    console.log(new Date().getMonth());
}, 5000);

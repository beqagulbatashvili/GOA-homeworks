let myArray = ["hello", "world", 5, 15, true, false];

for (let item of myArray) {
    if (item === true) {
        console.log(false);
    } else if (item === false) {
        console.log(true);
    } else if (item * 1 === item) {
        console.log(item + 10);
    } else {
        console.log(item);
    }
}

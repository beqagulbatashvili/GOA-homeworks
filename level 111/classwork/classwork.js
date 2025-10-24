// 1)
function modifyNumbers(numbers) {
    if (numbers.length !== 5) {
        console.log("Array must contain exactly 5 numbers");
        return;
    }
    numbers.forEach(num => console.log(num));

    const newNumbers = [
        ...numbers.map(num => num > 0 ? num + 10 : num - 10)
    ];

    return newNumbers;
}

const result = modifyNumbers([5, -2, 10, 0, 3]);
console.log("Modified array:", result);

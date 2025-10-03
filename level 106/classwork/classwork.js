function randomStringPrinter() {
    const strings = ["apple", "banana", "cherry", "grape", "orange"];

    const randomStr = strings[Math.floor(Math.random() * strings.length)];

    setTimeout(() => {
        console.log(randomStr);
    }, 3000);
}


function createPromise(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("resolve");
        } else {
            reject("reject");
        }
    });
}

createPromise(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 2) 
function createPromise(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("resolve");
        } else {
            reject("reject");
        }
    });
}

function successHandler(message) {
    console.log(message);
}

function failureHandler(message) {
    console.log(message);
}

createPromise(4).then(successHandler, failureHandler); 
createPromise(7).then(successHandler, failureHandler);

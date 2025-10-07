// 1)
function workingOnPromise(str) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (str.length > 5) {
            resolve(`"${str}" passed`);
        } else {
            reject(`"${str}" failed`);
        }
        }, 1000);
    });

    promise
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
}

workingOnPromise("hello");
workingOnPromise("worldwide");
workingOnPromise("hi");



// 2)
function alwaysResolve() {
    return new Promise((resolve) => {
        resolve("resolved");
    });
}

const p1 = alwaysResolve();
const p2 = alwaysResolve();
const p3 = alwaysResolve();

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
});

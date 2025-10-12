// 1)
function checkString(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (str.length % 2 === 0) {
            resolve(str);
        } else {
            reject(str);
        }
        }, 2000); 
    });
}

const p1 = checkString("Mars");
const p2 = checkString("Earth");
const p3 = checkString("Moon");

Promise.all([p1, p2, p3])
    .then(result => {
        console.log("Resolve:", result);
    })
    .catch(error => {
        console.log("Reject:", error);
    });

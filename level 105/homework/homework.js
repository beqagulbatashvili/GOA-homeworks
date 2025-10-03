// 2)
function helloAfter2Sec() {
    setTimeout(() => {
        console.log("Hello after 2 seconds");
    }, 2000);
}
helloAfter2Sec();

// 3) 
setTimeout(() => {
    console.log("Message after 1 second");
}, 1000);

setTimeout(() => {
    console.log("Message after 3 seconds");
}, 3000);

// 4)
setTimeout(() => {
    console.log("First");
    setTimeout(() => {
        console.log("Second");
        setTimeout(() => {
            console.log("Third");
        }, 2000);
    }, 2000);
}, 2000);

// 5)
function countdown(n) {
    for (let i = n; i > 0; i--) {
        setTimeout(() => {
            console.log(i);
        }, (n - i + 1) * 1000);
    }
}
countdown(5);

// 6)
function delayRandom(fn) {
    let randomTime = Math.floor(Math.random() * 5 + 1) * 1000;
    setTimeout(fn, randomTime);
}
delayRandom(() => {
    console.log("Executed after random delay between 1-5 seconds");
});

// 8)
function coinFlip() {
    return new Promise((resolve, reject) => {
        let flip = Math.random() < 0.5;
        if (flip) {
            resolve("Heads");
        } else {
            reject("Tails");
        }
    });
}
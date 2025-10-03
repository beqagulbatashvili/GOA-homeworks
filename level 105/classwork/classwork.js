function executor(resolve, reject) {
    const myName = "Beqa";

    if (myName.length > 4) {
        resolve("resolved");
    } else {
        reject("rejected");
    }
}


for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
    console.log(i);
  }, i * 1000); 
}


const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task complete");
    }, 3000);
});

myPromise.then((message) => {
    console.log(message);
});

function processParams(a, b, c, d, e, f, g, h, i, j) {
    let params = [a, b, c, d, e, f, g, h, i, j];

    for (let param of params) {
        if (typeof param === "number") {
        console.log(param);
        } else if (typeof param === "string") {
        param = 1;
        console.log(param);
        }
    }
    }


processParams(5, "hello", 8, "world", 12, true, "text", 3, "js", 9);

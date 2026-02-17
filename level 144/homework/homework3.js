process.stdin.setEncoding("utf8")

console.log("Type text:")

process.stdin.on("data", function (data) {
    let cleaned = data.trim()
    let formatted = cleaned.toUpperCase()
    console.log(formatted)
})
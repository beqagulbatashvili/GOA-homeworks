process.stdin.setEncoding("utf8")

console.log("Type something:")

process.stdin.on("data", function (data) {
    console.log("You typed:", data)
})
const express = require("express")

const app = express()

let count = 0

function requestCounter(req, res, next) {
    count = count + 1
    console.log("Total requests:", count)
    next()
}

app.use(requestCounter)

app.get("/", function(req, res) {
    res.send("Server works")
})

app.listen(3000)
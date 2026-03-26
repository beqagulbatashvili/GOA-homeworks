const express = require("express")

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log("METHOD:", req.method)
    console.log("URL:", req.url)
    console.log("QUERY:", req.query)
    console.log("BODY:", req.body)

    next()
})

app.listen(3000, function() {
    console.log("Server is running on port 3000")
})


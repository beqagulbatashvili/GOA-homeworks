const express = require("express")
const app = express()
app.use(express.json())

app.use("/isworking", (req, res, next) => {
    console.log(req.url, req.method)
    res.status(200).json([req.url, req.method])
    next()
})

app.listen(3000, () => console.log("Server is running on port 3000"))
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use("/api/status", (req, res, next) => {
    res.status(200).json({ status: "Server is running" })
    next()
})

app.listen(process.env.PORT, () => console.log("Server is running on port " + process.env.PORT))


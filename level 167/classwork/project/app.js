import express from "express";
import dotenv from "dotenv";
import globalErrorHandler from "./controllers/error.controllers.js";


import booksRouter from "./router/books.route.js";

dotenv.config()

const app = express();

app.use(express.json());
app.use("/api/books", booksRouter);
app.use("/api/status", (req, res, next) => {
    res.status(200).json({status: "Server is running"});
    next()
})


app.use(globalErrorHandler)
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
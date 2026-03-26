import express from "express";
import errorHandler from "errorhandler";

const app = express();

app.get("/users/:id", (req, res, next) => {
    const error = new Error("User not found");
    error.status = 404;

    return next(error);
})

app.use(errorHandler());
app.listen(3000, () => {
    console.log("server is running on port 3000")
})
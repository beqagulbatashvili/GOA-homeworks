// error middleware
function errorHandler(err, req, res, next) {
    // აბრუნებს status და message
    res.status(err.status || 500).send(err.message || "error")
}

// export
module.exports = errorHandler
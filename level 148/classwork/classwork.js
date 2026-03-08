const http = require("http")

const server = http.createServer((req, res) => {

    switch (req.method) {

        case "GET":
            res.statusCode = 200
            res.end("Beka Gulbatashvili")
            break

        case "POST":

            let body = ""

            req.on("data", chunk => {
                body += chunk
            })

            req.on("end", () => {
                res.statusCode = 200
                res.end(body)
            })

            break

        case "PUT":
            res.statusCode = 200
            res.end("Gulbatashvili Beka")
            break

        case "DELETE":
            res.statusCode = 200
            res.end(JSON.stringify([]))
            break

        default:
            res.statusCode = 200
            res.end("Method not supported")
    }

})

server.listen(3000, () => console.log("server is running on port 3000."))
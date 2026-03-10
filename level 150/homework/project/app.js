const http = require("http")
const url = require("url")

const Readfile = require("./utils/Readfile")
const Writefile = require("./utils/Writefile")

const DB_PATH = "./database/users.json"

const server = http.createServer(async (req, res) => {

    const parsedUrl = url.parse(req.url, true)

    if(req.method === "GET" && parsedUrl.pathname === "/users") {

        const users = await Readfile(DB_PATH)

        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(users))
    }

    else if(req.method === "POST" && parsedUrl.pathname === "/users") {

        let body = ""

        req.on("data", chunk => {
            body += chunk
        })

        req.on("end", async () => {

            const users = await Readfile(DB_PATH)

            const newUser = JSON.parse(body)

            users.push(newUser)

            await Writefile(DB_PATH, users)

            res.writeHead(200, {"Content-Type":"application/json"})
            res.end(JSON.stringify(newUser))
        })
    }

    else {

        res.writeHead(200)
        res.end("Route not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})
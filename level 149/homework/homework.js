const http = require("http")

let products = []

const getRequestBody = (req) =>
    new Promise((resolve) => {
        let body = ""
        req.on("data", (chunk) => (body += chunk))
        req.on("end", () => resolve(body))
    })

http.createServer(async (req, res) => {
    const { method } = req

    switch (method) {
        case "GET":
            res.statusCode = 200
            return res.end(JSON.stringify(products))

    case "POST":
        const body = JSON.parse(await getRequestBody(req))

        if (!body.id || !body.name || !body.price) {
            res.statusCode = 406
            return res.end("Not enough data")
        }

        if (products.map((p) => p.id).includes(body.id)) {
            res.statusCode = 409
            return res.end("Product exists")
        }

        products.push(body)

        res.statusCode = 200
        return res.end(JSON.stringify(products))

    case "PUT":
        const body1 = JSON.parse(await getRequestBody(req))

        if (!products.map((p) => p.id).includes(body1.id)) {
            res.statusCode = 404
            return res.end("Not found")
        }

        const product = products.filter((p) => p.id === body1.id)[0]

        product.name = body1.name
        product.price = body1.price

        res.statusCode = 200
        return res.end(JSON.stringify(product))

    case "DELETE":
        const body2 = JSON.parse(await getRequestBody(req))

        products = products.filter((p) => p.id !== body2.id)

        res.statusCode = 204
        return res.end()

        default:
            res.statusCode = 400
            return res.end("Wrong method")
    }
}).listen(3000)
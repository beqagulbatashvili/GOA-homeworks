const http = require("http");

let products = [
    { name: "phone", price: 1000 },
    { name: "laptop", price: 2000 }
];

function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            resolve(data);
        });

        req.on('error', err => {
            reject(err);
        });
    });
}

const server = http.createServer(async (req, res) => {

    if (req.method === "POST") {
        const body = await getRequestBody(req);
        const newProduct = JSON.parse(body);
        products.push(newProduct);
        const jsonData = JSON.stringify(products);
        res.end(jsonData);
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
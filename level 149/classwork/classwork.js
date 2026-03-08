const http = require("http");

const data = [
    {name : "Beqa" , age : 15},
    {name : "Nika" , age : 17},
    {name : "Giorgi" , age : 18},
]

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.end(JSON.stringify(data));
    }
});

server.listen(3000, ()=> {
    console.log("server running on post 3000")
});

const http = require('http');

const server = http.createServer((req, res) => {

    const response = {
        method: req.method,
        path: req.url.split('?')[0],
        query: req.url.split('?')[1]
    };

    res.end(JSON.stringify(response));

});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
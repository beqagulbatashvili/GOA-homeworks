const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, res) => {

    const myUrl = new URL("http://localhost:3000" + req.url);
    comsole.log(querystring.parse(myUrl.search));

});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
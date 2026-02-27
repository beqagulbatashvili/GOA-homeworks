const http = require("http");
const querystring = require("querystring");

const server = http.createServer(function (req, res) {

    const fullUrl = new URL(req.url, "http://localhost:3000");

    const pathname = fullUrl.pathname;

    const searchParams = fullUrl.searchParams;

    let queryDataFromURL = "";
    searchParams.forEach(function (value, key) {
        queryDataFromURL += key + " = " + value + "\n";
    });

    const parsedQuery = querystring.parse(fullUrl.search);

    let queryDataManual = "";
    for (let key in parsedQuery) {
        queryDataManual += key + " = " + parsedQuery[key] + "\n";
    }

    const exampleValue = parsedQuery.name;

    res.writeHead(200, { "Content-Type": "text/plain" });

    res.write("Parsed Pathname:\n");
    res.write(pathname + "\n\n");

    res.write("Query Parameters (URL class):\n");
    res.write(queryDataFromURL + "\n");

    res.write("Query Parameters (querystring module):\n");
    res.write(queryDataManual + "\n");

    res.write("Example individual value (name): " + exampleValue);

    res.end();
});

server.listen(3000);
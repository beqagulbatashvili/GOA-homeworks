const fs = require("fs");

const writeStream = fs.createWriteStream("main.txt");

writeStream.write("Hello, my name is Beqa.\n");
writeStream.write("Hello, my name is Beqa.\n");
writeStream.write("Hello, my name is Beqa.\n");

writeStream.end();
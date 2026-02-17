const name1 = "Beqa";
const buffer1 = Buffer.alloc(name1.length,name1);
buffer1.write(name1);

const buffer2 = Buffer.from(" Gulbatashvili");

const combinedBuffer = Buffer.concat([buffer1, buffer2]);

process.stdout.write(combinedBuffer.toString())
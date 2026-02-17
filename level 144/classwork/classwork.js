const process = require('process');

process.stdin.setEncoding('utf8');

console.log('შემოიტანეთ თქვენი საყვარელი ფერი:');

process.stdin.on('data', (data) => {
    const color = data.trim();
    console.log('თქვენი საყვარელი ფერია:', color);
    console.log('შემოიტანეთ თქვენი საყვარელი ფერი:');
});
const fs = require('fs');
const textIn = fs.readFileSync('./txt/txt/input.txt','utf-8');
console.log(textIn);
const textOut = `Avocado information: ${textIn}\n Create on ${Date.now()}`;
fs.writeFileSync('./txt/txt/output.txt',textOut);
console.log('File written');
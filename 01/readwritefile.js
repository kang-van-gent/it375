const fs = require('fs');
fs.readFile('./txt/txt/input.txt','utf-8',(err,data)=>{
    console.log(data)
});
console.log('Reading file...');
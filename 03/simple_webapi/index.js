const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('Hello from the server Kang');
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to the request port 8000');
});
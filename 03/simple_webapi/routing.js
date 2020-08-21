const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    const partName = req.url;
    if(partName==='/')
    {
        res.end('This is Home page')
    }else if(partName=='/overview')
    {
        res.end('This is overview page')

    } else if(partName==='/product'){
        res.end('This is product Page');
    }else{
        res.writeHead(404);
        res.end('Page not found');
    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Linstening to request')
});
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.end('Home page');
});
app.get('/overview',(req,res)=>{
    res.end('Over view page');
});
app.get('/product',(req,res)=>{
    res.end('Product page');
});
app.get('/api/user',(req,res)=>{
    const userData = {id:15,name: 'Supachai'};
    res.send(userData);
});

app.listen(port,'127.0.0.1',()=>{
    console.log('Listening on port '+port);
});
const cm = require('./ownmodules');
const express = require('express');
const app = express();
const myuser = require('./mymodules');

const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/api/date',(req,res)=>{
    res.write("The date and time is currently: "+cm.myDtaeTime());
    res.write("\nCreate by: "+cm.myName());
    res.end();

});

app.get('/api/myinfo/:fname/:age/:email',(req,res)=>{
    const fname = req.params.fname;
    const age = req.params.age;
    const email = req.params.email;
    const newuser = new myuser(fname,age,email);
    res.send(newuser.getUserStats());
});

app.listen(port,'127.0.0.1',()=>{
    console.log('Listening to request on port '+port);
})
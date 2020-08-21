const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const itStudent =[
    {id:'29',name:'Supachai IT'},
    {id:'19',name:'Nuthawat IT'}
];

const ceStudent =[
    {id:'39',name:'Guide CE'},
    {id:'49',name:'Oak CE'}
];

const allMajor = {
    'it': itStudent,
    'ce': ceStudent
}

app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if(major=='it'){
        const jsonString = JSON.stringify(itStudent);
        req.myObj = jsonString;
        next();

    }else if(major=='ce'){
        const jsonString = JSON.stringify(ceStudent);
        req.myObj = jsonString;
        next();

    }else{
        res.send('major not found')
    }

},(req,res)=>{
    req.myObj += 'End of Data';
    res.send(req.myObj);

});

app.listen(port,'127.0.0.1',()=>{
    console.log('Listening to port '+port);
});


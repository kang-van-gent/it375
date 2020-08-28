const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
const itStudent = [
    {id:21,'fname':'พัชรพล','lname':'นวลจันทร์','tel':'0812345678'},
    {id:33,'fname':'แทนรัก','lname':'มังคละคุปต์','tel':'0698745630'},
    {id:42,'fname':'ชาลิสา','lname':'เทพดนตรี','tel':'0987412365'},
    {id:45,'fname':'เสฎฐนันท์','lname':'อรรถสิษฐ์','tel':'0875321594'},
    {id:47,'fname':'วิรัลยุพา','lname':'ถมรุ่ง','tel':'078524569'}
];

app.listen(port,"127.0.0.1",()=>{
    console.log("Listening to requset on port:"+port);
});

app.get('/api/getstudent',(req,res)=>{
    res.send(itStudent);
});

app.get('/api/querystu',(req,res)=>{
    const myQueryString = req.query;
    if(Object.keys(myQueryString).length!=0){
        console.log(myQueryString.id);
        const stuId = itStudent.find(element => element.id == parseInt(myQueryString.id));
        if(stuId){
            res.send(stuId);
        }else{
            res.status(404).send('ไม่พบรหัสศึกษานี้')
        }
    }else{
        res.status(404).send('ไม่พบหน้า API ที่เรียก');
    }
});

app.get('/api/getstuid/:id',(req,res)=>{
    const stuId = itStudent.find(element => element.id === parseInt(req.params.id));
    console.log(stuId);

    if(stuId){
        res.send(stuId);
    }else{
        res.status(404).send('ไม่พบรหัสนักศึกษานี้');
    }
});

app.post('/api/addstu',(req,res)=>{
    const stuId = req.body.id;
    const stuFname = req.body.fname;
    const stuLname = req.body.lname;
    const stuTel = req.body.tel;

    const newStudent ={
        id: stuId,
        'fname': stuFname,
        'lname': stuLname,
        'tel': stuTel
    };
    itStudent.push(newStudent);
    res.send(itStudent);

});

app.post('/api/addstudents',(req,res)=>{
    const stuArr = req.body;
    stuArr.forEach(element => {
        const stuId = element.id;
        const stuFname = element.fname;
        const stuLname = element.lname;
        const stuTel = element.tel;

        const newStudent ={
            id: stuId,
            'fname':stuFname,
            'lname':stuLname,
            'tel': stuTel
        };

        itStudent.push(newStudent);
      res.send(itStudent);  
    });
    
});
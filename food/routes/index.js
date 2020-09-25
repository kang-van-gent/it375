const express = require('express');
const restaurants = require('../data');
const router = express.Router();

//Render Web
router.get('/',(req,res)=>{
    res.render('main',{restaurants});
});

module.exports = router;
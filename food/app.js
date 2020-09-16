const express = require('express');
const app = express();
const path = require('path');

const restaurantsRouter = require('./routes/restaurants');

const logger = require('./middleware/logger');

const port = process.env.PORT || 8000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// Custom middleware
app.use(logger);
//Routes
app.use('/api/restaurants',restaurantsRouter);
//view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');



app.listen(port,'127.0.0.1',()=>{
    console.log('Listening to request on port '+port);
});




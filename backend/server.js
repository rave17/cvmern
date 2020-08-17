const express = require('express');
const morgan = require('morgan');
const app = express();
//config


if(process.env.NODE_ENV != 'production'){
    require('dotenv').config({
        path:`.env.${process.env.NODE_ENV || 'dev'}`
    });
}
const PORT = process.env.PORT;

//connection db
require('../db/connection/conn');


app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
const resume = require('./routes/resume');

app.use('/robertovargas/v1/en', resume);

//server
try {
    app.listen(PORT || 4000, () => {
        console.log(`server run at port ${PORT}`);
    });
} catch (err) {
    console.log(`not connected error: ${err}`)
}
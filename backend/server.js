const express = require('express');
const morgan = require('morgan');
const app = express();

//config
require('dotenv').config();
const PORT = process.env.PORT;
const URI = process.env.URI;

//connection db
require('../db/connection/conn');


app.use(morgan('dev'));
const { urlencoded } = require('express');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
const resume = require('./routes/resume');
const resumen = require('./routes/resumen');

app.use('/robertovargas/v1/en', resume);
app.use('/robertovargas/v1/es', resumen);

//server
try {
    app.listen(PORT || 4000, () => {
        console.log(`server run at port ${PORT}`);
    });
} catch (err) {
    console.log(`not connected error: ${err}`);
};
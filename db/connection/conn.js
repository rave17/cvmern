const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
    process.env.URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(()=>{
        console.log(`connected to db: ${process.env.URI}`)
    })
    .catch(err=> console.log(`error in connection to db ${err}`));
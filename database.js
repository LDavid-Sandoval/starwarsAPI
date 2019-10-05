const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.DB_URL;
mongoose.connect(URI,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB conectada'))
    .catch(err => console.log(err));
module.exports = mongoose;

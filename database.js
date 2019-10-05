const mongoose = require('mongoose');
require('dotenv').config();
const URI = 'mongodb://admin:snqcdH5UjmpcsdBR@SG-starwars-26365.servers.mongodirector.com:27017/admin?ssl=true'
mongoose.connect(URI,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB conectada'))
    .catch(err => console.log(err));
module.exports = mongoose;

const mongoose = require('mongoose')
const { Schema } = mongoose;

const Starships = new Schema ({
    name:  {type: String, required:true}, 
    model: {type: String, required:true}, 
    manufacturer: {type: String, required:true}, 
    max_atmosphering_speed: {type: String, required:true}
});

module.exports = mongoose.model('Starship', Starships);
var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name : String,
    email : String,
    photo : String,
    sex : String,	
    birthdate : {type : Date},
    phone : String
});

module.exports = mongoose.model('person', personSchema);
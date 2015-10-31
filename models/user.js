var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username : String,
    password : String,
    created_at : {type: Date, default : Date.now},
    persons  : [{type: mongoose.Schema.Types.ObjectId, ref : 'person'}]
});

module.exports = mongoose.model('user', userSchema);
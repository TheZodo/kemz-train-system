const mongoose = require('mongoose');

const schema = mongoose.Schema({
    passenger_Fname: String,
    passenger_Lname: String,
    passenger_Phone: String,
    ticket_id: String

})

const model = mongoose.model('passenger', schema);

module.exports = model;
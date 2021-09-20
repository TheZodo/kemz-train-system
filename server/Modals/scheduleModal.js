const mongoose = require('mongoose');

const schema = mongoose.Schema({
    schedule_Arrival: String,
    schedule_Departure: String,
    train_Id: String,

})

const model = mongoose.model('schedule', schema);

module.exports = model;
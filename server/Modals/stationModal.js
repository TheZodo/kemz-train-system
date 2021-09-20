const mongoose = require('mongoose');

const schema = mongoose.Schema({
    station_Id: String,
    station_Name: String,
    station_Description: String,

})

const model = mongoose.model('station', schema);

module.exports = model;
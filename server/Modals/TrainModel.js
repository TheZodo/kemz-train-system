const mongoose = require('mongoose');

const schema = mongoose.Schema({
    train_Id: String,
    train_Seat_Capacity: Int,
    train_Freight_Capacity: Int,
    train_Model: String,

})

const model = mongoose.model('train', schema);

module.exports = model;
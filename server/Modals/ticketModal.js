const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ticketId: int,
    tickeTitle: String,
    ticketType: String
 
})

const model = mongoose.model('ticket', schema);

module.exports = model;

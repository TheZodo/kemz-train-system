const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ticket_Title: String,
    ticket_Type: String,
    schedule_Id: String

})

const model = mongoose.model('ticket', schema);

module.exports = model;
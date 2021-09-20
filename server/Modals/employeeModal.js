const mongoose = require('mongoose');

const schema = mongoose.Schema({
    employee_Email: String,
    employee_Id: String,
    employee_Fname: String,
    employee_Lname: String,
    employee_Phone: String,
    train_Id: String,
    station_id: String
})

const model = mongoose.model('employee', schema);

module.exports = model;
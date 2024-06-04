const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    username: String,
    codes: String,
    email: String
}); //,{ collection: 'register' }

const EmployeeModel = mongoose.model("personeDB", EmployeeSchema )
module.exports = EmployeeModel;
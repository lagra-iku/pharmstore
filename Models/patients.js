var { Client } = require('pg');
const { INTEGER } = require('sequelize/dist');

var patientSchema = Client.Schema({
    first_name:{type:String, required:true},
    surname:{type:String, required:true},
    age:{type:INTEGER, required:true},
    sex:{type:String, required:true},
    address:{type:String, required:false},
    created_on:{type:Date, default:Date.now}
});

var patients = Client.model("patients", patientSchema);

module.exports = patients;
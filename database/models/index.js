// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Campus = require('./campus');
const Student= require('./student');

const db = require('../db');
db.sync({
  alter: true
});
console.log("Hey arnold");
// Every campus has many students
Campus.hasMany(Student);
// Every student has one campus
Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student 
};

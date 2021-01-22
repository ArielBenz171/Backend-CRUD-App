// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Campus = require('./campus');
const Student= require('./student');

// Every campus has many students
Campus.hasMany(student);
// Every student has one campus
Student.belongsTo(campus);

module.exports = {
  Campus,
  Student 
};

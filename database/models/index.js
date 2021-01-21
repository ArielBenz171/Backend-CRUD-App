// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Campus = require('./campus');
const Student= require('./student');

Campus.hasMany(student);
Student.belongsTo(campus);

module.exports = {
  Campus,
  Student 
};

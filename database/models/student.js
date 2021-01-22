// Write a `students` model with the following information:
const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
//  firstName - not empty or null
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
    // notEmpty: true
  },
// lastName - not empty or null
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
    // notEmpty: true
  },
// gpa - decimal between 0.0 and 4.0
  gpa: {
    //type: Sequelize.DECIMAL(4,2),
    //allowNull: true,
    type: Sequelize.STRING,
    default: 0.0
    //min: 0.0,
    //max: 4.0
  },
// email - not empty or null; must be a valid email
  email: {
    //make sure it is valid email both front end & backend
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  },
// imageUrl - with a default value
  studentImageUrl: {
    type: Sequelize.STRING,
    default: 'https://i.imgur.com/U4ZlKnr.jpg',
    isUrl: true
  },
// name - not empty or null
  campusName: {
    type: Sequelize.STRING,
    allowNull: false
    // notEmpty: true
  }

});

module.exports = Student;

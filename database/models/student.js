const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
  
  id: {
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  gpa: {
    //type: Sequelize.DECIMAL(4,2),
    //allowNull: true,
    type: Sequelize.STRING,
    default: 0.0
    //min: 0.0,
    //max: 4.0
  },
  email: {
    //make sure it is valid email both front end & backend
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  },
  studentImageUrl: {
    type: Sequelize.STRING,
    default: 'https://i.imgur.com/U4ZlKnr.jpg',
    isUrl: true
  },

  campusName: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Student;

// Write a `campuses` model with the following information:
const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
// name - not empty or null
  campusName: {
    type: Sequelize.STRING,
    allowNull: false
  },
// address - not empty or null
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
// imageUrl - with a default value
  campusImageUrl: {
    type: Sequelize.STRING,
    default: 'https://i.imgur.com/U4ZlKnr.jpg',
    //isUrl: true
  },
// description - extremely large text
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }

});

module.exports = Campus;
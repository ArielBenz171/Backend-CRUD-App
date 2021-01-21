const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
  
  id: {
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },

  campusName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  campusImageUrl: {
    type: Sequelize.STRING,
    default: 'https://i.imgur.com/U4ZlKnr.jpg',
    //isUrl: true
  },

  description: {
    type: Sequelize.STRING,
    allowNull: true
  }

});

module.exports = Campus;
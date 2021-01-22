// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require('sequelize');
const databaseName = require('../utilities/databaseName');

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
const sequelize = new Sequelize('Crud DB', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});

// Export our instance of Sequelize, which will be modified with models;
module.exports = sequelize;

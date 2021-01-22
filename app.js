

// Module dependencies;
const express = require('express');

// Utilities;

const seedDatabase = require('./utilities/seedDatabase');



// Our apiRouter;
const apiRouter = require('./routes');

// A helper function to sync our database;


// Instantiate our express application;
const app = express();

// A helper function to create our app with configurations and middleware;
const configureApp = () => {
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/api', apiRouter);
}
  // Error handling;
  

  // More error handling;
 

// Main function declaration;
const bootApp = async () => {
  
  await configureApp();
};

// Main function invocation;
bootApp();
app.listen(8080, () => { console.log("Server running"); })
// Export our app, so that it can be imported in the www file;
module.exports = app;

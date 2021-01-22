const express = require('express');
const router = express.Router();

// Subrouters;
const studentRouter = require('./student');
const campusRouter = require('./campus');

// Mount our subrouters to assemble our apiRouter;
router.use('/student', studentRouter);
router.use('/campus', campusRouter);

// Error handling middleware;


// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;

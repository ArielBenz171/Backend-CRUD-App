const express = require('express');
const router = express.Router();
const { student } = require('../database/models');

router.get('/', function(req, res, next) {
  student.findAll()
    .then(students => res.json(students))
    .catch(err => console.log(err))
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;

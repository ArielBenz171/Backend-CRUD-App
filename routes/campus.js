const express = require('express');
const router = express.Router();
const { campus } = require('../database/models');

router.get('/', function(req, res, next) {
  campus.findAll()
    .then(campus => res.json(campus))
    .catch(err => console.log(err))
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
//edited

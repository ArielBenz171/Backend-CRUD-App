const express = require('express');
const router = express.Router();
const { Campus } = require('../database/models');

// Write a route to serve up all campuses
router.get('/', function(req, res, next) {
  Campus.findAll()
    .then(campus => res.json(campus))
    .catch(err => res.json(err))
});

// Write a route to serve up a single campus (based on its id), _including that campuses' students
router.get('/:id', function(req,res,next){
  Campus.findByPk(req.params.id)
  .then(campus => res.json(campus))
  .catch(err => res.json(err)
    )
});

// Write a route to add a new campus
router.post('/', async function(req, res, next){
  try{
    let campus = await Campus.create(req.body);
    res.status(200).json(campus);
  }
  catch (err) {
    res.json(err)
  }
});

// Write a route to remove a campus (based on its id)
router.delete('/:id', async (req, res , next)=> {
  try{
    const deletedCampus = await Campus.destroy({
      where: { id: req.params.id},
      plain: true
    });
    res.sendStatus(204);
  }
  catch (err) {
    res.json(err)
  }
});

// Write a route to update a campus (based on its id)
  router.put('/:id', async (req,res,next) =>{
    try{
      let newCampusInfo = await Campus.update(req.body, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      });
      res.status(200).json(newCampusInfo);
    }
    catch (err) {
      res.json(err)
    }
  });

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
//edited

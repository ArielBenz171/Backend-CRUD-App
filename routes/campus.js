const express = require('express');
const router = express.Router();
const { campus } = require('../database/models');

router.get('/', function(req, res, next) {
  campus.findAll()
    .then(campus => res.json(campus))
    .catch(err => console.log(err))
});
router.get('/:id', function(req,res,next){
  campus.findByPk(req.params.id)
  .then(campus => res.json(campus))
  .catch(next)
});

router.post('/', async function(req, res, next){
  try{
    let campus = await campus.create(req.query);
    res.status(200).json(campus);
  }
  catch (err){
    next(err);
  }
});

router.delete('/:id', async (req, res , next)=> {
  try{
    const deletedCampus = await campus.destroy({
      where: { id: req.params.id},
      plain: true
    });
    res.sendStatus(204);
  }
  catch(err){
    next(err);
  }
});


  router.put('/:id', async (req,res,next) =>{
    try{
      let newCampusInfo = await campus.update(req.query, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      });
      res.status(200).json(newCampusInfo);
    }
    catch (err) {
      next(err);
    }
  });

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
//edited

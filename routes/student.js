const express = require('express');
const router = express.Router();
const { student } = require('../database/models');

router.get('/', function(req, res, next) {
  student.findAll()
    .then(students => res.json(students))
    .catch(err => console.log(err))
});
router.get('/:id', function(req,res,next){
  student.findByPk(req.params.id)
  .then(student => res.json(student))
  .catch(next)
});

router.post('/', async function(req, res, next){
  try{
    let student = await student.create(req.query);
    res.status(200).json(student);
  }
  catch (err){
    next(err);
  }
});

router.delete('/:id', async (req, res , next)=> {
  try{
    const deletedStudent = await student.destroy({
      where: { id: req.params.id},
      plain: true
    });
    res.sendStatus(204);
  }
  catch(err){
    next(err);
  }});


  router.put('/:id', async (req,res,next) =>{
    try{
      let newStudentInfo = await student.update(req.query, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      });
      res.status(200).json(newStudentInfo);
    }
    catch (err) {
      next(err);
    }
  });


// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;

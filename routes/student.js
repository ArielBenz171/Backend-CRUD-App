const express = require('express');
const router = express.Router();
const { student } = require('../database/models');

// Write a route to serve up all students
router.get('/', function(req, res, next) {
  student.findAll()
    .then(students => res.json(students))
    .catch(err => console.log(err))
});

// Write a route to serve up a single student (based on their id), _including that student's campus
router.get('/:id', function(req,res,next){
  student.findByPk(req.params.id)
  .then(student => res.json(student))
  .catch(next)
});

// Write a route to add a new student
router.post('/', async function(req, res, next){
  try{
    let student = await student.create(req.query);
    res.status(200).json(student);
  }
  catch (err){
    next(err);
  }
});

// Write a route to remove a student (based on their id)
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

// Write a route to update a student (based on their id)
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

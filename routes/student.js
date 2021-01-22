const express = require('express');
const router = express.Router();
const { Student } = require('../database/models');

// Write a route to serve up all students

router.get('/', function(req, res, next) {
console.log("FIND ME")
  Student.findAll()
    .then(students  =>{
      console.log("high")
        res.json(students)
      })
    .catch(err => res.json(err)
    )
});

// Write a route to serve up a single student (based on their id), _including that student's campus
router.get('/:id', function(req,res,next){
  Student.findByPk(req.params.id)
  .then(student => res.json(student))
  .catch(err => res.json(err))
});

// Write a route to add a new student
router.post('/', async function(req, res, next){
  try{
    let student = await Student.create(req.body);
    res.status(200).json(student);
  }
   catch (err) {
     res.json(err)
   }
  
  
});

// Write a route to remove a student (based on their id)
router.delete('/:id', async (req, res , next)=> {
  try{
    const deletedStudent = await Student.destroy({
      where: { id: req.params.id},
      plain: true
    });
    res.sendStatus(204);
  }
  catch (err) {
    res.json(err)
  }
});

// Write a route to update a student (based on their id)
  router.put('/:id', async (req,res,next) =>{
    try{
      let newStudentInfo = await Student.update(req.body, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      });
      res.status(200).json(newStudentInfo);
    }
    catch (err) {
      res.json(err)
    }
  });


// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;

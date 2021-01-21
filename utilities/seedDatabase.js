const { Student, Campus } = require('../database/models');

const seedDatabase = async () => {

  await Promise.all([
    Student.create({
      firstName: 'Depak',
        lastName: 'Robot',
        gpa: 3.0,
        email: 'depakRobot@ttp.com',
        campusName: 'Brooklyn Uni', 
        studentImageUrl: 'https://th.bing.com/th/id/R9a86564a0f6df527080c99cd353572b2?rik=OKU9i9T5DVQ6tg&riu=http%3a%2f%2fwww.jma.duq.edu%2fusers%2fribeaua%2fpub%2fjma260%2fimages%2fprofile.png&ehk=5NkHHw0v94pIdWgpnWCm9RD%2bGqX0OK9%2fVvRDmAcEscI%3d&risl=&pid=ImgRaw'    
    }),
    Campus.create({
      campusName: 'Brooklyn Uni',
      address: '2500 Bedford Avenue ',
      campusImageUrl: 'https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg',    
      description: 'A CUNY Brookyn College'
    }),
    Student.create({
      firstName: 'John',
        lastName: 'Smith',
        gpa: 3.5,
        email: 'johnSmith@ttp.com',
        campusName: 'Queens Uni', 
        studentImageUrl: 'https://lymediseaseuk.com/wp-content/uploads/2015/10/blank-profile-picture-973460_640.png'    
    
    })
  ]);
}

module.exports = seedDatabase;

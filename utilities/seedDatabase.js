// Dummy data
const { Student, Campus } = require('../database/models');

const seedDatabase = async () => {

  await Promise.all([
  // Dummy Student #1
    Student.create({
      firstName: 'Depak',
        lastName: 'Robot',
        gpa: 3.0,
        email: 'depakRobot@ttp.com',
        campusName: 'Brooklyn Uni', 
        studentImageUrl: 'https://th.bing.com/th/id/R9a86564a0f6df527080c99cd353572b2?rik=OKU9i9T5DVQ6tg&riu=http%3a%2f%2fwww.jma.duq.edu%2fusers%2fribeaua%2fpub%2fjma260%2fimages%2fprofile.png&ehk=5NkHHw0v94pIdWgpnWCm9RD%2bGqX0OK9%2fVvRDmAcEscI%3d&risl=&pid=ImgRaw'    
    }),
  // Dummy Campus #1
    Campus.create({
      campusName: 'Brooklyn Uni',
      address: '2500 Bedford Avenue ',
      campusImageUrl: 'https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg',    
      description: 'A CUNY Brookyn College'
    }),
  // Dummy Student #2  
    Student.create({
      firstName: 'John',
        lastName: 'Smith',
        gpa: 3.5,
        email: 'johnSmith@ttp.com',
        campusName: 'Queens Uni', 
        studentImageUrl: 'https://lymediseaseuk.com/wp-content/uploads/2015/10/blank-profile-picture-973460_640.png'    
  // Dummy Campus #2  
    }),
    Campus.create({
      campusName: 'Queens Uni',
      address: '65-30 Kissena Blvd ',
      campusImageUrl: 'https://images.squarespace-cdn.com/content/5b9ffe0f1137a680c2c08250/1590700026481-4CKIW5XJBIZH2SNCD1CW/queens+college+campus.jpg?content-type=image%2Fjpeg',    
      description: 'A CUNY Queens College'
    })
  ]);
}

module.exports = seedDatabase;

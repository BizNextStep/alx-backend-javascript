const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split data by lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('The file is empty');
    }

    // Remove the first line (header)
    const students = lines.slice(1);

    // Initialize counts and groups
    const totalStudents = students.length;
    const fieldCounts = {};
    
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstname);
      }
    });

    // Log total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log number of students per field
    for (const [field, names] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (error) {
    // Handle errors and file not found
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;


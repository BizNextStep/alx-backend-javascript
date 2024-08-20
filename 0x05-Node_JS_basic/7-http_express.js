// Import the express module
const express = require('express');

// Import the readFile function from the fs module
const { readFile } = require('fs');

// Create an Express application
const app = express();

// Set the port for the server
const port = 1245;

// Function to count students and their fields
function countStudents(fileName) {
  // Initialize objects to store students and fields
  const students = {};
  const fields = {};
  let length = 0;

  // Return a new Promise to handle asynchronous file reading
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    readFile(fileName, (err, data) => {
      if (err) {
        // If an error occurs, reject the Promise with the error
        reject(err);
      } else {
        // Initialize an empty output string
        let output = '';

        // Split the file data into lines
        const lines = data.toString().split('\n');

        // Iterate through each line
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            // Increment the length counter
            length += 1;

            // Split the line into fields
            const field = lines[i].toString().split(',');

            // Check if the student's field already exists in the students object
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              // If it exists, push the student's name to the corresponding array
              students[field[3]].push(field[0]);
            } else {
              // If it doesn't exist, create a new array with the student's name
              students[field[3]] = [field[0]];
            }

            // Check if the field already exists in the fields object
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              // If it exists, increment the count for that field
              fields[field[3]] += 1;
            } else {
              // If it doesn't exist, set the count to 1
              fields[field[3]] = 1;
            }
          }
        }

        // Decrement the length to get the actual number of students
        const l = length - 1;

        // Append the total number of students to the output
        output += `Number of students: ${l}\n`;

        // Iterate through each field and append the field name and student list to the output
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        // Resolve the Promise with the output string
        resolve(output);
      }
    });
  });
}

// Define the root route ('/')
app.get('/', (request, response) => {
  // Send a simple greeting message
  response.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', (request, response) => {
  // Call the countStudents function with the provided file name
  countStudents(process.argv[2].toString())
    .then((output) => {
      // If the Promise is resolved successfully, send the output
      response.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      // If an error occurs, send a message indicating that the database cannot be loaded
      response.send('This is the list of our students\nCannot load the database');
    });
});

// Start the server and listen for incoming requests
app.listen(port, () => {
  // No additional action needed here
});

// Export the Express application
module.exports = app;

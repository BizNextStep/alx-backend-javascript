// Import the express module
const express = require('express');

// Import the students module from the 3-read_file_async.js file
const students = require('./3-read_file_async');

// Create an Express application
const app = express();

// Set the hostname for the server
const hostname = '127.0.0.1';

// Set the port for the server
const port = 1245;

// Define the root route ('/') and its response
app.get('/', (req, res) => {
  // Set the response status code to 200 (OK)
  res.statusCode = 200;

  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');

  // Send the response message
  res.send('Hello Holberton School!');
});

// Define the /students route and its response
app.get('/students', async (req, res) => {
  // Set the response status code to 200 (OK)
  res.statusCode = 200;

  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');

  // Write the initial message to the response body
  res.write('This is the list of our students\n');

  try {
    // Call the students function from 3-read_file_async.js
    // Pass the command-line argument (process.argv[2]) as the file path
    await students(process.argv[2]).then((data) => {
      // Write the total number of students to the response body
      res.write(`Number of students: ${data.students.length}\n`);

      // Write the number of CS students and their names to the response body
      res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);

      // Write the number of SWE students and their names to the response body
      res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
    });
  } catch (err) {
    // If an error occurs, write the error message to the response body
    res.write(err.message);
  } finally {
    // End the response
    res.end();
  }
});

// Start the server and listen for incoming requests
app.listen(port, hostname, () => {
  // Log a message indicating that the server is running
  console.log(`Server running at http://${hostname}:${port}`);
});

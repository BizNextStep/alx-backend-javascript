const http = require('http');
const students = require('./3-read_file_async');

// Using a specific hostname and port for the server
const hostname = '127.0.0.1';  // Restricts server access to localhost only
const port = 1245;  // Port where the server will listen

// Creating the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;  // Setting the status code for the response
  res.setHeader('Content-Type', 'text/plain');  // Setting the response content type to plain text

  // Route handling
  if (req.url === '/') {
    // If the root URL is accessed, respond with a greeting
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // If the /students URL is accessed, respond with the list of students
    res.write('This is the list of our students\n');

    // Asynchronously fetch and process the student data
    students(process.argv[2])
      .then((data) => {
        // Respond with the total number of students and the list per field
        res.write(`Number of students: ${data.students.length}\n`);
        res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
        res.end();  // Ending the response after all data is written
      })
      .catch((err) => {
        // If there's an error (e.g., file not found), send the error message
        res.end(err.message);
      });
  } else {
    // Handle unknown routes (e.g., /unknown) with a 404 Not Found message
    res.statusCode = 404;  // Set the status code to 404 for not found
    res.end('Not Found');  // Respond with a simple 'Not Found' message
  }
});

// Start the server and listen on the specified hostname and port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);  // Log the server URL when it starts
});

module.exports = app;  // Export the app for potential use in other modules or tests


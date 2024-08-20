const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true).pathname;

  if (reqUrl === '/') {
    // Handle the root URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    // Handle the /students URL
    const databaseFile = process.argv[2];
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(databaseFile)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    // Handle other URLs
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;


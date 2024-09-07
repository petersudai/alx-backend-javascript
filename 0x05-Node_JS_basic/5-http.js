const http = require('http');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

const database = argv[2];

// Create the server
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // Respond to root with "Hello Holberton School!"
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Respond to /students with the list of students
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    countStudents(database)
      .then((output) => {
        res.write(output); // Append the student information
        res.end(); // End the response
      })
      .catch(() => {
        // If the database cannot be loaded, handle the error
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    // Handle any other undefined routes
    res.statusCode = 404;
    res.end('Not found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

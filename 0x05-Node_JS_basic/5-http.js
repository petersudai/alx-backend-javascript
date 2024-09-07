const http = require('http');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

// Ensure a database file path is provided
const database = argv[2];

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // Return 'Hello Holberton School!' on root endpoint
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Return the list of students from the database file
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    try {
      // Call the countStudents function and handle response
      const output = await countStudents(database);
      res.end(output);
    } catch (error) {
      // Handle errors in reading the database file
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    // If route is not found, return a 404 response
    res.statusCode = 404;
    res.end('Not found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

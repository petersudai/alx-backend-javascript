const express = require('express');
const fs = require('fs');

// Function to count students from a CSV file
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const result = [];
      data.split('\n').forEach((line) => {
        const fields = line.split(',');
        if (fields.length > 1) {
          result.push(fields);
        }
      });

      result.shift(); // Remove the header

      const studentsByField = {};
      result.forEach((student) => {
        const [firstname, , , field] = student;
        if (studentsByField[field]) {
          studentsByField[field].push(firstname);
        } else {
          studentsByField[field] = [firstname];
        }
      });

      let output = `Number of students: ${result.length}\n`;

      Object.keys(studentsByField).forEach((field) => {
        output += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  countStudents(databasePath)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for testing
module.exports = app;

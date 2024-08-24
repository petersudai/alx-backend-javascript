const fs = require('fs');
const path = require('path');

/**
 * Counts students in the CSV file and logs the results.
 * @param {string} filePath - The path to the CSV file.
 */
const countStudents = (filePath) => {
  try {
    // Read file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split CSV content into lines and process
    const lines = data.trim().split('\n');

    if (lines.length < 2) {
      console.log('Number of students: 0');
      return;
    }

    // Process header and student lines
    const [header, ...students] = lines;
    const [firstNameCol, lastNameCol, ageCol, fieldCol] = header.split(',');
    const studentData = students.map((line) => line.split(','));

    // Initialize counters
    const fieldCounts = {};
    const fieldLists = {};

    studentData.forEach((student) => {
      const [firstname, , , field] = student;

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldLists[field] = [];
      }
      fieldCounts[field] += 1;
      fieldLists[field].push(firstname);
    });

    // Print total number of students
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    // Print number of students per field and their names
    Object.keys(fieldCounts).forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}`);
    });
  } catch (err) {
    console.error('Cannot load the database');
  }
};

module.exports = countStudents;

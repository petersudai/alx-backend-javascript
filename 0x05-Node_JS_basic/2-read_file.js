const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

// Helper function to parse CSV data
const parseCSV = (data) => {
  return new Promise((resolve, reject) => {
    parse(data, {
      columns: true,
      skip_empty_lines: true
    }, (err, records) => {
      if (err) return reject(err);
      resolve(records);
    });
  });
};

// Function to count students
const countStudents = async (filePath) => {
  try {
    // Read file synchronously
    const data = fs.readFileSync(filePath, 'utf8');
    const students = await parseCSV(data);
    
    // Initialize counters
    const fieldCounts = {};
    const fieldLists = {};

    // Process each student
    students.forEach(student => {
      const { field, firstname } = student;
      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldLists[field] = [];
      }
      fieldCounts[field] += 1;
      fieldLists[field].push(firstname);
    });

    // Print total number of students
    const totalStudents = Object.values(fieldCounts).reduce((a, b) => a + b, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Print number of students per field and their names
    Object.keys(fieldCounts).forEach(field => {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}`);
    });
    
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;

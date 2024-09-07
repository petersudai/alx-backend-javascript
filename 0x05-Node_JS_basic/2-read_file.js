const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    if (data.length === 0) {
      throw new Error('Cannot load the database');
    }

    const result = [];
    data.split('\n').forEach((row) => {
      const rowData = row.split(',');
      if (rowData.length >= 4) { // Ensures valid data with all fields
        result.push([rowData[0], rowData[3]]);
      }
    });

    // Remove header row
    result.shift();

    const fieldCounts = {};
    result.forEach((row) => {
      const [name, field] = row;
      if (fieldCounts[field]) {
        fieldCounts[field].students.push(name);
      } else {
        fieldCounts[field] = { students: [name] };
      }
    });

    const totalStudents = result.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log field-wise student count and names
    Object.keys(fieldCounts).forEach((field) => {
      const { students } = fieldCounts[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

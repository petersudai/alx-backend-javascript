const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove header
    const result = lines.slice(1).filter((line) => line.trim().length > 0).map((line) => line.split(','));

    const fieldCounts = {};
    result.forEach((row) => {
      const [name, , , field] = row;
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

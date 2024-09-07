import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    try {
      const students = await readDatabase(databaseFile);
      let output = 'This is the list of our students\n';

      Object.keys(students).sort().forEach((field) => {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databaseFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(databaseFile);
      const majorStudents = students[major];

      if (majorStudents) {
        return res.status(200).send(`List: ${majorStudents.join(', ')}`);
      }

      return res.status(200).send('No students found');
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

// full_server/utils.js
import { readFile } from 'fs/promises';

// Function to read the database file and return student data
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = {};

        lines.forEach(line => {
          const [firstname, , , field] = line.split(',');
          if (field) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname);
          }
        });

        resolve(students);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

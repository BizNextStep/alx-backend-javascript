export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const grade = newGrades.find((g) => g.studentId === student.id)?.grade || 'N/A';
    return { ...student, grade };
  });
}

const Student = require('./classes/student');
const Teacher = require('./classes/teacher');
const Lesson = require('./classes/lesson');

const teacher = new Teacher('Maths', 'Billy');

const student1 = new Student('Nilesh');
const student2 = new Student('Nath');
const student3 = new Student('Bilaal');
const student4 = new Student('Tom');

const studentsAttending = [
    student1,
    student2,
    student3,
    student4
];

const mathsLesson = new Lesson(teacher, studentsAttending);

mathsLesson.markOnTime([student1,student3]);

mathsLesson.markLate([student2]);

mathsLesson.outputSummary();

// console.log(teacher);
// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);
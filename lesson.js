class Lesson {
    
    constructor(teacher, students){
        
        if (!teacher || !students){
            throw new Error('The teacher and/or the sudents need to be specified');
        }else {
            this.teacher = teacher;
            this.students = students;
        };
    };

    markOnTime(students){
        students.forEach(student => {
            student.onTime = true;
            student.absent = false;
        });
    };

    markLate(students){
        students.forEach(student => {
            student.late = true;
            student.absent = false;
        });
    };

    outputSummary(){
        console.log(`The ${this.teacher.subject} lesson was conducted by ${this.teacher.name}`);

        console.log('--------------');
        console.log('| Attendance |');
        console.log('--------------');

        this.students.forEach(student => {
            if(student.late) {
                console.log(`${student.name} was late`);

            }else if(student.onTime) {
                console.log(`${student.name} was on time`);

            }else if(student.absent) {
                console.log(`${student.name} was absent`);
            };
        });
    };
};

module.exports = Lesson;
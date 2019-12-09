class Teacher{

    constructor(subject, name){
        if (!subject || !name){
            throw new Error('Please state the subject or the name of the teacher');
        }else {
            this.subject = subject;
            this.name = name;
        }
    };
};

module.exports = Teacher;
class Student{

    constructor(name, late, onTime, absent){
        
        if (!name){
            throw new Error('Student name needs to be specified');
        }else {
            this.name = name;
            this.late = false;
            this.onTime = false;
            this.absent = true;
        };
        
    };
};

module.exports = Student;
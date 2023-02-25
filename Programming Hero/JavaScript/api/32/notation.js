const student = {
    name : "kolim uddin",
    age: 15,
    class : 10,
    marks :{
        math:78,
        physics:89,
        chemsitry : 65
    },
};
const marks = student.marks;
const math = student.marks.math;
// console.log(marks);
// console.log(math);

const chemistry = student['marks']['chemsitry'];
const subject= 'math';
const subjectMark = student.marks[subject];
// console.log(chemistry);
console.log(subjectMark);
// var student1 = {
//     name:"abc",
//     rollNo:10,
//     marks:80
// }
// console.log(student1);

// var student2 = {
//     name:"abc",
//     rollNo:10,
//     marks:80
// }

function createStudent(name,rollNo,marks){
    var student = {}
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}

var student1 = createStudent("a1","1","50");
var student2 = createStudent("a2","2","51");
console.log(student1);
console.log(student2);

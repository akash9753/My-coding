// var student1 = {
//     name:"abc",
//     rollNo:10,
//     marks:80
// }
// var student = {
//     name:"abc",
//     rollNo:10,
//     marks:80
// }
// console.log(student1);
//-------------------------------------------------------------------------
// function createStudent(name, rollno, marks){
//        var student = {}
//        student.name = name;
//        student.rollNo = rollno;
//        student.marks = marks;
//        return student;
// }

// var student1 = createStudent("akash",15,78);
//  console.log(student1);
// var student2 = createStudent("son",45,79);
//  console.log(student2);
//--------------------------------------------------------------------------
function Student(name, rollno, marks){
    // var student = {}
    console.log(this);
    this.name = name;
    this.rollNo = rollno;
    this.marks = marks;
    // return student;
     console.log(this);
}

var student1 = new Student("akash",15,78);
console.log(student1);
//  var student2 = Student("son",45,79);// not bound to any OBJ
//  console.log(student2);
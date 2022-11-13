function createStudent (name,rollno,marks,) {
    // student = {} // new Object();
    console.log(this);
    this.name = name
    this.rollno = rollno
    this.marks = marks
    
    // return student;
}
var student1 = new createStudent("a1","12","45"); //
var student2 = createStudent("a2","31","45");//
console.log(student1);
console.log(student2);

// createStudent {}
// Constructor.js:3 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Constructor.js:12 createStudent {name: 'a1', rollno: '12', marks: '45'}
// Constructor.js:13 undefined
// The filter() function creates an array of filtered data that pass a 
// condition. Filter() function does not work if the array is empty and 
// filter() function does not change the original values of an array. 

function studentGrades(grade) {
    const students = [
        { name: 'Anjali', grade: 96 },
        { name: 'Navdeep', grade: 84 },
        { name: 'Varun', grade: 100 },
        { name: 'Bhavya', grade: 65 },
        { name: 'Shiva', grade: 90 }
      ];
    //Write your code here
    const filterData = students.filter((s) => {
        return s.grade >= grade
    })
    
    return filterData;
}
console.log(studentGrades(96))

const arr = [5,1,3,2,6];

function isOdd(x){
    return x%2;
}
const output = arr.filter((x)=> x>4);

console.log(output);
//primitive type //Real copy
const a  = 4;
const b = a;
console.log(b);
let c = a;
console.log(c);
console.log(a);

//object and array

//shallow Copy
var susan = {
    name: 'susan',
    age : 30,
}
var raj = susan;
//raj will point same object susan object refrence

//--------------------------------------------------
//Deep copy
var susan = {
    name: 'susan',
    age : 30,
}
var raj = {...susan}//spread operator
//raj wont point to same object
//-------------------------------------------
var arr1 = [1,2,3];
var arr3 = [...arr1]

var arr3 = arr.map(el => el)

console.log(a)//undefined
var a = 10;

console.log(l)//Cannot access 'l' before initialization     
let l = 10;

console.log(x); //x is not defined // x was not present in the memory //x is nowhere initilize in the program

//const b;//'const' declarations must be initialized.


//syntax error                                      reference error                                                    type Error    
//Uncaught SyntaxError:              reference error : Cannot access 'l' before initialization      //Uncaught TypeError:assignment to constant variable
//missing initilizer in const        reference error : x is not defined                     
//declaration


//------------------------------------
// let x = 42;
// if (true) {
// console.log(x);//x is not defined
// let x = 1337;
// }
//---------------------------------
// const KEY = 'coding_ninjas';
// if (true) {
//     const KEY = 'ES6';
// }
// console.log(KEY);
//---------------------------------
// var temp= 'hello';
// function display(){
//     console.log(temp);//undefined
//     var temp = 'bye';
// };
// display();
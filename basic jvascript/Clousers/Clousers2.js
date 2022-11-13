// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y()
// }
// x()
//clouser is a function bind together with its lexical enviroment
//------------------------------------------------------------------------
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x()
// console.log(z);
// z();//7
//------------------------------------------------------------------------
// function x(){
//     var a = 7;
//     return function y(){
//         console.log(a);
//     }

// }
// var z = x()
// console.log(z);
// z();//7
//-------------------------------------------------------------------------
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x()
// console.log(z);
// z();//7
//------------------------------------------------------------------------
// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();
//--------------------------------------------------------------------------
//Uses of Clousers
//Module Design Pattern
//Currying
//Function like once
//memoize
//maintaning state in async world
//setTimeouts
//Iterators
//and manu more  
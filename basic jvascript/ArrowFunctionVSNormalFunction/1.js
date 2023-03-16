const user50={
    username1 : "akash",

    arrowFunc : () =>console.log(`arrow Func`,this.username1),

    normal(){
        console.log(`normal Func`,this.username1);
    }
}
user50.arrowFunc();
user50.normal()

//function declaration | function definition | function statement
function square(num){
    return num * num
} 
//-----------------------------------------------------------------------
//function expression => assigned to a variable
const square1 = function(num){//annonymous function
    return num * num
}
//--------------------------------------------------------------------------
//first class function => function treated like a variable, function can be passed to another function
// return from function, function can do what variable can do
const square2 = function(num){//annonymous function
    return num * num
}
function displaySquare(fn){
    console.log("Square is "+ fn(5));
}
displaySquare(square);
//------------------------------------------------------------------------------
//IIFE
function square14(num){
    console.log(num * num); 
} 
square14(5)

// (function square15(num){
//     console.log(num * num); 
// })(5); 
//-------------------------------------------------------
// for(var i = 0; i < 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }
//-------------------------------------------------------
var x = 21;

var fun = function(){
    console.log(`--`,x);//undefined
    var x = 20;
}
fun();
//------------------------------------------------

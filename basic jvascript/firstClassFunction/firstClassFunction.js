//Function Statement aka Function Declaration
function a(){
    console.log("a called");
}

//Function Expression
var b =  function(param1, param2){
   console.log("b called");
}

var b =  function xyz(param1, param2){
    console.log("b called");
 }
a()
b(1,2)
xyz()//reference error : xyz is not defined

//Anonymous Function
// function(){

// }

//Named function expression
var b =  function xyz(param1, param2){
    console.log("b called");
 }
b(1,2)


//First Class Function
//the ability to use function as value is known as first class function
//the ability to use function as value and can be passed as argument to another function and can be return from 
//function 
//first class citizen


//Arrow function

// function a(){
//     console.log(b);//10
// }
// var b = 10;
// a();
//-------------------------------------------
// function a(){
//     c();
//     function c(){
//         console.log(b);//10
//     }
// }
// var b = 10;
// a();
//-------------------------------------------
function a(){
    var b = 10;
    c();
    function c(){
        
    }
}
a();
console.log(b);//Uncaught ReferenceError: b is not defined
//---------------------------------------------
//lexical Enviroment = whenever an excecution context is created a lexical enviroment is also 
//created 
//lexical enviroment is the local memory along with the lexical enviroment of its parent

//lexical = in herarcy in a sequence
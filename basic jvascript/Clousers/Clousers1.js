// var i = 10;

// function outer(){
//     var j = 20;
//     console.log(i,j);
//     function inner(){
//         var k = 30;
//         console.log(j,k);
//     }
//     inner()
// }
// outer()
//-----------------------------------------------------------------------------------------------
// var i = 10;

// function outer(){
//     var j = 20;
//     console.log(i,j);
//     return function inner(){
//         var k = 30;
//         console.log(j,k);
//     }
    
// }
// outer()
//-----------------------------------------------------------------------------------------------
// var i = 10;

// function outer(){
//     var j = 20;
//     console.log(i,j);
//     var inner = function (){
//         var k = 30;
//         console.log(j,k);
//     }
//     return inner
// }
// var inner = outer()
// inner ()
//-----------------------------------------------------------------------------------------------
// var i = 10;

// function outer(){
//     var j = 20;
//     // console.log(i,j);
//     var inner = function (){
//         var k = 30;
//         console.log(j,k);
//         k++;
//     }
//     return inner
// }
// var inner = outer()
// inner ()
// inner ()
//-----------------------------------------------------------------------------------------------
// var i = 10;

// function outer(){
//     var j = 20;
//     // console.log(i,j);
//     var inner = function (){
//         var k = 30;
//         console.log(i,j,k);
//         i++;
//         j++;
//         k++;
//     }
//     return inner
// }
// var inner = outer()
// inner ()//11 20 30
// inner ()//11 21 30
//-----------------------------------------------------------------------------------------------
var i = 10;

function outer(){
    var j = 20;
    // console.log(i,j);
    var inner = function (){
        var k = 30;
        console.log(i,j,k);
        i++;
        j++;
        k++;
    }
    return inner
}
var inner = outer()
inner ()//11 20 30
var inner = outer()
inner ()//11 20 30
//-----------------------------------------------------------------------------------------------
//clousers => is the combination of function + lexical enviroment in which function was created

//inner fun has access to the variable of outer function.
 
// for(var i = 1; i<=5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }//
// console.log(i);// 6 6 6 6 6 6 6
//-----------------------------------------------------------------------------------------------
// function test(){
//     for(let i = 1; i<=5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }//
//     //console.log(i);
// }
// test()
//-----------------------------------------------------------------------------------------------
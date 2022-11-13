// var a = 10 //global scope
//  function outer(){
//      var a = 20
//      var b = 40 //functinal scope
//      console.log(a, b)
//  }
//  console.log(a, b)//error for b
// outer()


//  var a = 10

//  function outer(){
//      var a = 20
//      var b = 40

//      function inner(){
//          var a = 100
//          console.log("Inner", a , b) // 100 40
//      }
//      inner()
//      console.log("Outer " , a, b)  // 20 40
//  }
// outer()


// var i = 10

// function outer(){
//     var j = 20;
//     console.log(i,j); //10 20

//     function inner(){
//         var k = 30;
//         console.log(j , k); //20 30
//     }
//     inner()
// }
// outer()


// var i = 10

// function outer(){
//     var j = 20;
//     console.log(i,j); //10 20

//     var inner = function(){
//         var k = 30;
//         console.log(j , k); //20 30
//     }
//     return inner;
// }
// var inner = outer()
// inner()


// var i = 10

// function outer(){
//     var j = 20;
//     // console.log(i,j); //10 20

//     var inner = function(){
//         var k = 30;
//         console.log(j , k); 
//         k++
//     }
//     return inner;
// }
// var inner = outer()
// inner() // 20 30
// inner() // 20 30 every call it will create new execution context



// var i = 10

// function outer(){
//     var j = 20;
//     // console.log(i,j); //10 20

//     var inner = function(){
//         var k = 30;
//         console.log(j , k); 
//         j++
//         k++
//     }
//     return inner;
// }
// var inner = outer()
// inner() // 20 30 
// inner() // 21 30  // outer function variable j not a fresh call


// var i = 10

// function outer(){
//     var j = 20;

//     var inner = function(){
//         var k = 30;
//         console.log(i, j , k); 
//         i++
//         j++
//         k++
//     }
//     return inner;
// }
// var inner = outer()
// inner() //10 20 30 
// inner() //11 21 30  // outer function variable i and j not a fresh call



// var i = 10
// function outer(){
//     var j = 20;


//     var inner = function(){
//         var k = 30;
//         console.log(i, j , k); 
//         i++
//         j++
//         k++
//     }
//     return inner;
// }
// var inner = outer()
// inner() //10 20 30
// inner = outer()
// inner() //11 20 30 i is accessible


// const arr = [7,2,10,4,5,6, 1]
// let temp;
// function printArray(arr){
//    for(let i = 0; i < arr.length-1; i++){
//     for(let j = i+1; j < arr.length; j++){
//           if(arr[i] > arr[j]){
//              temp = arr[i]
//              arr[i] = arr[j]
//              arr[j] = temp;
//           }
//     }
//    }
//    console.log(arr)
// }
// printArray(arr)

const arr = [7,2,10,4,5,6]
let temp;

   for(let i = 0; i < arr.length-1; i++){
    for(let j = i+1; j < arr.length; j++){
          if(arr[i] > arr[j]){
             temp = arr[i]
             arr[i] = arr[j]
             arr[j] = temp;
          }
    }
   }
   console.log(arr)


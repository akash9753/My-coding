// var a = 10;
// let s = 100
// for(var i = 0; i<6; i++){
//     function close(x){
//         let b = 50;
//         setTimeout(()=>{
//             console.log(x);
//         },i*1000)
//     }
//     close(i)
// }

// for(var i = 1; i<6; i++){
//     console.log(i);
// }
function outerMost() {
    let a = 1;
  return function outer() {
    return function inner() {
      console.log(a);
    }
  }
}

const y = outerMost();
const x = y()
x()
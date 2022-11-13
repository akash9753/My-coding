// var promise1 = new Promise((resolve,reject)=>{
//      resolve("ye promise fullfilled")
// })
// console.log(promise1);
//--------------------------------------------------------------------------------------------
// var promise2 = new Promise((resolve,reject)=>{
//     reject("ye promise rejected")
// })
// console.log(promise2);
//--------------------------------------------------------------------------------------------
var promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve({message:"success"})
        reject({message:"error"})
      }, 3000);
})

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error',error);
})
//---------------------------------------------------------------------------------------------




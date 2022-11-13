// var userLoggedIn = true
// let promise = new Promise((resolve, reject) =>{
//      setTimeout(()=>{
//          if(userLoggedIn){
//              resolve();
//          }else{
//              reject();
//          }
//      },1000)
// })

// promise.then(()=>{console.log("user Logged In")
// }).catch(()=>{console.log("user not Logged In")});


// var userLoggedIn = true
// let promise = new Promise((resolve, reject) =>{
//      setTimeout(()=>{
//          if(userLoggedIn){
//              resolve("user Logged In");
//          }else{
//              reject("user not Logged In");
//          }
//      },1000)
// })

// promise.then((successMsg)=>{console.log(successMsg)
// }).catch(()=>{console.log()});

//promises have 3 state
// 1.pending
// 2.resolve
// 3.reject

// var isLoggedOf = true
// var promise = new Promise((resolve, reject)=>{
//           setTimeout(()=>{
//               if(isLoggedOf){
//                   resolve({message:'success'})
//               }else{
//                 reject({mesage: 'error'})
//               }
//             },3000)
// })

// promise.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log('error', error)
// })


//callback is a function which can be passed as argument to another function and which basically invoke sometime in the future

//callback are used to complete some sort of routine or actions

// const greet = ((name, callback)=>{
//     console.log(`Hi ${name}`)
//     callback()
// })

// const askQuestion = (()=>{
//     console.log('How Are you')
// })

// greet('akash', askQuestion)

//Why callback is required?


// setTimeout(()=>{
//     console.log(1)
// },0)

// var promise = new Promise((resolve, reject)=>{
//     resolve(2)
// })
// promise.then((data)=>{
//        console.log(data);
// })

// console.log(3)

var promise = new Promise((resolve, reject)=>{
         resolve('Resolve');
})
promise.then((data)=>{
   console.log(data)
})

Promise.resolve('Resolved').then(data => console.log(data))
//-------------------------------------------
async function asyncTask(){
    return "Resolved"
}
//shorthand syntax
asyncTask().then(data => console.log(data))
//-------------------------------------------
function getData(){
    return Promise.resolve('some data')
}

async function abc(){
    const data = await getData()
    console.log(data)
}
abc()
console.log('1')











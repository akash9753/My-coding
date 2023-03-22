//problemetic code
//asynchronus with callback
// console.log("start");

// function importantAction(username) {
//   setTimeout(() => {
//     return `Subscribe to ${username}`;
//   }, 1000);
// }

// const message = importantAction("Roadside Coder");

// console.log(message);

// console.log("stop");

//--------------------------------------------------
//asynchronus with callback
// console.log("start");

// function importantAction1(username1, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${username1}`);
//   }, 1000);
// }

// function likeThisVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 1000);
// }
// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`share the ${video} video`);
//   }, 1000);
// }
//callback hell
// importantAction1("Roadside Coder", function (message1) {
//   console.log(message1);
//   likeThisVideo("javascript interview question", (action) => {
//     console.log(action);
//     shareTheVideo("javascript interview question", (action) => {
//       console.log(action);
//     });
//   });
// });

// console.log("stop");
//-----------------------------------------------------------
//asynchronus with promise
// console.log("start");

// const sub = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result = false;
//         if(result) resolve("Success")
//         else reject(new Error("error"))
//     },2000)
// })
// console.log(sub);
// sub
//    .then((res)=>{
//     console.log(res);
//    }).catch((err)=>{
//     console.log(err);
//    })

// console.log("stop");
//------------------------------------------------------
//Directly resolve reject promise
// console.log("start");

// const promise = Promise.reject("error")
// promise.then((res)=>console.log(res)).catch((err)=>console.log('error : ',err))

// console.log("stop");
//-----------------------------------------------------
//modify callback async with promise async
// console.log("start");

// function importantAction(username1) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Subscribe to ${username1}`);
//     }, 1000);
//   });
// }

// function likeThisVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video} video`);
//     }, 1000);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`share the ${video} video`);
//     }, 1000);
//   });
// }
//callback hell bad pyramid like structure
// importantAction1("Roadside Coder", function (message1) {
//   console.log(message1);
//   likeThisVideo("javascript interview question", (action) => {
//     console.log(action);
//     shareTheVideo("javascript interview question", (action) => {
//       console.log(action);
//     });
//   });
// });
//promise async bad pyramid like structure
// importantAction("Roadside Coder")
//   .then((res) => {
//     console.log(res);
//     likeThisVideo("javascript interview question").then((res) => {
//       console.log(res);
//       shareTheVideo("javascript interview question").then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => console.log(err));

// console.log("stop");
//promise chaining good cleaner code
// importantAction("Roadside Coder")
//   .then((res) => {
//     console.log(res);
//     return likeThisVideo("javascript interview question")
//   })
//   .then((res)=>{
//     console.log(res);
//     return shareTheVideo("javascript interview question")
//   })
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// console.log("stop");
//--------------------------------------------------
//Promise combinator
//help us to excecute more than 1 promise at a time and return the result
//accordimgly
//there r 4 type of promise combinator
//1.promise.all
//2.promise.race
//3.promise.allSeteled
//4.promise.any

// console.log("start");

// function importantAction(username1) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Subscribe to ${username1}`);
//     }, 1000);
//   });
// }

// function likeThisVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Like the ${video} video`);
//     }, 1000);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`share the ${video} video`);
//     }, 1000);
//   });
// }

//1.promise.all => if any 1 of promise fail all of this will be failed
// Promise.all([
//   importantAction("Roadside Coder"),
//   likeThisVideo("javascript interview question"),
//   shareTheVideo("javascript interview question"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log("Error: Promise failed",err)
//   });

// console.log("stop");

//2.promise.race => this will give first promise which gets rejected or fullfiled
// console.log("start");

// function importantAction(username1) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Subscribe to ${username1}`);
//     }, 1000);
//   });
// }

// function likeThisVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Like the ${video} video`);
//     }, 1000);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`share the ${video} video`);
//     }, 500);
//   });
// }

// Promise.race([
//     importantAction("Roadside Coder"),
//     likeThisVideo("javascript interview question"),
//     shareTheVideo("javascript interview question"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => {
//       console.log("Error: Promise failed",err)
//     });

//   console.log("stop");

//3.promise.allSeteled => it will return failed promises as well as fullfilled promises
// console.log("start");

// function importantAction(username1) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Subscribe to ${username1}`);
//     }, 1000);
//   });
// }

// function likeThisVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Like the ${video} video`);
//     }, 1000);
//   });
// }
// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`share the ${video} video`);
//     }, 500);
//   });
// }

// Promise.allSettled([
//     importantAction("Roadside Coder"),
//     likeThisVideo("javascript interview question"),
//     shareTheVideo("javascript interview question"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => {
//       console.log("Error: Promise failed",err)
//     });

// console.log("stop");
//4.promise.any => only return 1st fullfill promise and ignore all the rejected once
console.log("start");

function importantAction(username1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username1}`);
    }, 1000);
  });
}

function likeThisVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 500);
  });
}

Promise.any([
  importantAction("Roadside Coder"),
  likeThisVideo("javascript interview question"),
  shareTheVideo("javascript interview question"),
])
  .then((res) => console.log(res))
  .catch((err) => {
    console.log("Error: Promise failed", err);
  });

console.log("stop");

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
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 1000);
  });
}
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
//promise chaining
importantAction("Roadside Coder")
  .then((res) => {
    console.log(res);
    return likeThisVideo("javascript interview question")
  })
  .then((res)=>{
    console.log(res);
    return shareTheVideo("javascript interview question")
  })
  .then((res)=>{
    console.log(res);
  })
  .catch((err) => console.log(err));

console.log("stop");
//--------------------------------------------------

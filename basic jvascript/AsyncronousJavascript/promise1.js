console.log("start");

function importantAction(username){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        }, 0);
    })
    
}

function likeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${video}`);
        }, 0);
    })
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${video}`);
        }, 0);
    })
}

// importantAction("Roadside Coder").then((res)=>{
//     console.log(res);
//     likeTheVideo("javascript Interview Question").then((res)=>{
//         console.log(res); 
//         shareTheVideo("video").then((res)=>{
//             console.log(res);
//         })
//     })
// }).catch((err)=> console.error(err));

importantAction("Roadside Coder")
.then((res)=>{
    console.log(res);
    return likeTheVideo("Javascript Interview Question")
}).then((res)=>{
    console.log(res);
    return shareTheVideo("Javascript Interview Question")
}).then((res)=>{
    console.log(res);
}).catch((err)=> console.error(err));

console.log("stop");













// console.log("start");


// const sub = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         const result = true;
//         if(result) resolve("Subscribed to Roadside Coder")
//         else reject(new Error("error"))
//      }, 2000);
// })
// sub.then((res)=>{
//       console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// console.log("stop");
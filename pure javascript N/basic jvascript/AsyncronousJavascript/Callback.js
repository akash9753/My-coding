//a callback is a function which can be passed as an argument to another function and which basically invoked
//somethime later in the futur
//

function greet(name, cb){
    console.log(`hello ${name}`);
    cb()
}

function askQuestion(){
    console.log(`How r u`);
}

greet("akash",askQuestion)
//--------------------------------------------------------------------------
//why callbacks
console.log(1);

setTimeout(function(){
    console.log(2);
},1000);

console.log(3);
//1 3 2
//--------------------------------------------------------------------------
var promise = new Promise((resolve, reject)=>{
       resolve(1);
})
promise.then((data)=>{
    console.log(data);
})
//--------------------------------------------------------------------------
console.log(1);

setTimeout(function(){
    console.log(2);
},0);

console.log(3);
//1 3 2

//--------------------------------------------------------------------------
setTimeout(() => {
    console.log(1);
}, 0);

var promise = new Promise(function(resolve,reject){
    resolve(2)
})
promise.then(function(data){
    console.log(data);
})
console.log(3);
//3 2 1

//micro task queue => will excecuted first 
//task queue => will excecuted after the micro task 
//setTimeout puted on task queue

//-----------------------------------------------------------------------------
var promise = new Promise(function(resolve,reject){
    resolve('Resolved')
})
promise.then(data => console.log(data));

//-----------------------------------------------------------------------------
//shorthand
Promise.resolve('Resolved').then(data => console.log(data))























const user = {
    name: "Akash Patel",
    age:24
}

delete user.age
console.log(user);
//-----------------------------------------
//IIFE
//delete keyword only used for dleteing property of an object | it dosent affect local var
const func = (function(a){
    delete a;
    return a;
})(5);
console.log(func);
//---------------------------------------------
const user1 = {
    name: "Akash Patel",
    age:24,
    "like this video": true
}

delete user.age
console.log(user1["like this video"]);
//delete user["like this video"]
//------------------------------------------------
//How to add dynamic key value pair to an object
const property = "firstName";
const name = "Akash Patel"

const user2 = {
    [property] : name
}
console.log(user);
//------------------------------------------------
const user3 = {
    name: "Akash Patel",
    age:24,
    isTotallyAwesome: true
}
for(key in user3){
    console.log(key);
}
for(key in user3){
    console.log(user3[key]);
}
//-------------------------------------
const obj = {
    a:"one",
    b:"two",
    a:"three"
}
console.log(obj);
//------------------------------------
let nums = {
    a:100,
    b:200,
    title:"My nums"
}

for(o in nums){
    if(typeof nums[o] === "number")
   console.log(nums[o]*2);
}
console.log(nums);
//-------------------------------------
const a = {}
const b = {key:"b"}
const c = {key:"c"}

a[b] = 123;
a[c] = 456;

console.log(a[b]);//a["[object Object]"] = 123;
//object can not be converted into a key unless its string
//when tries to convert object into string forcefully it gets converted into [object Object] 
//------------------------------------
const user5 = {
    name:"akash",
    age:24
}
const strObj = JSON.stringify(user5);
console.log(strObj);
console.log(JSON.parse(strObj));
//----------------------------------
console.log([..."Lydia"]);
//---------------------------------
const user17 = {name:"akash", age:21};
const admin = {admin:true, ...user17}

console.log(admin);
//----------------------------------
const settings ={
    username:"akash",
    level:19,
    health:90
}
const data = JSON.stringify(settings,["level","health"])
console.log(data);
//---------------------------------------------
//Destructuring of an object
let user52 = {
    name5: "akash",
    age:24,
    fullName:{
        first:"Akash",
        last:"Patel"
    }
}

const {name5,age} = user52;
console.log(name5);
const {fullName:{first}} = user52;
console.log(first);
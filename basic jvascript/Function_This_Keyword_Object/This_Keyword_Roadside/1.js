// this.a = 5;
//console.log(this.a);
//----------------------------------------
function a(){
    console.log(this);
}
//a()
//----------------------------------------
const fun1 = ()=> console.log(this);
//fun1()
//----------------------------------------
//Nornal function
let user = {
    name:"akash",
    age:24,
    childObj:{
        newName:"akash patel",
        getDetails(){
            console.log(this.newName,"and",this.name);//
        }
    }
}
//user.childObj.getDetails();
//------------------------------------------
//Arrow function
let userA = {
    name:"akash",
    age:24,
    getDetails:()=> console.log(this,"and",this.name),
}
//userA.getDetails();
//-----------------------------------------
let userAa = {
    name:"akash",
    age:24,
    childObj:{
        newName:"akash patel",
        getDetails:()=> console.log(this.newName,"and",this.name),
        
    }
}
//userAa.childObj.getDetails();
//------------------------------------------
let userAaa = {
    name:"akash",
    age:24,
    getDetails(){
        let newName="akash patel",
        nestedArrow=()=> console.log(this,newName,"and",this.name);//{ name: 'akash', age: 24, getDetails: [Function: getDetails] } akash patel and akash
        nestedArrow();
    }
}
//userAaa.getDetails();
//-------------------------------------------
//how this keyword work inside  class 
class user56{
    constructor(n){
        this.name = n;
    }
    getName(){
        console.log(this.name);
    }
}

const User  = new user56("Piyush");
//User.getName();
//--------------------------------------------
const user78 = {
   firstName:"akash",
   getName(){
    const firstName = "akash patel";
    return this.firstName;
   }
}
// console.log(user78.getName());
//---------------------------------------------
function makeUser(){
    return {
        name:"John",
        ref(){
            return this;
        }
    }
}

let user15 = makeUser()
// console.log(user15.ref().name);
//-----------------------------------------------
const user45 = {
    name: "akash patel",
    logMessage(){
        console.log(this.name);
    }
}
//setTimeout(function(){user45.logMessage()},1000)
//------------------------------------------------
var length = 4;

function callback(){
    console.log(this.length);
}

const object = {
    length:5,
    method(fn){
        fn()
    }
}
// object.method(callback)
//----------------------------------------
const calc = {
    total:0,
    add(a){
        this.total += a;
        return this;
    },
    multiply(a){
        this.total *= a;
        return this;
    },
    substract(a){
        this.total -=a;
        return this;
    }
};
const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
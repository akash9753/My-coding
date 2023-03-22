//call method
var obj = {name : "akash"}

function sayHello(age){
    return "Hello "+ this.name + " is "+ age
}

console.log(sayHello.call(obj,24));
//----------------------------------------------
//apply method
var obj1 = {name : "akash"}

function sayHello1(age,profession){
    return "Hello "+ this.name + " is "+ age + " is an " + profession;
}

console.log(sayHello1.apply(obj1,[24,"Software Engineer"]));
//-----------------------------------------------
//bind
var obj2 = {name : "akash"}

function sayHello2(age,profession){
    return "Hello "+ this.name + " is "+ age + " is an " + profession;
}

const bindFunc = sayHello2.bind(obj2);
console.log(bindFunc(24,"Software Engineer"));
console.log(bindFunc(29,"utuber"));
//-------------------------------------------------
//output based question//diff between call and bind
const person = {name : "Akash"}
function sayHi(age){
    return `${this.name} is ${age}`
}
console.log(sayHi.call(person,24));
console.log(sayHi.bind(person,24));
//--------------------------------------------------
const age = 10;

var person24 = {
   name: "akash",
   age: 24,
   getAge:function(){
     return this.age
   }
}
var person56 = {age : 27}
console.log(person24.getAge());
console.log(person24.getAge.call(person56));
//-------------------------------------------
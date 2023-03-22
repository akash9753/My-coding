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
const animals = [
    {spacies:"Lion", name:"King"},
    {spacies:"Whale",name:"Queen"}
]

function printAnimals(i){
    console.log(this);
       this.print = function(){
        console.log(this);
        console.log("#"+ i + " " + this.spacies + ": " + this.name);
    }
    this.print();
}
for(let i = 0; i < animals.length; i++){
    printAnimals.call(animals[i], i)
}
//------------------------------------------
//append an array to another array
const array = ["a","b"]

const elements = [0,1,2];

array.push.apply(array,elements);
console.log(array);
//-------------------------------------------
const numbers = [5,6,2,3,7];

console.log(Math.max.apply(null,numbers));
//-------------------------------------------
function f(){
    console.log(this);
}
let user = {
    g: f.bind(null)
}
user.g()
//-------------------------------------------
//arrow function with call bind and apply
//Arrow function => parent normal function | wont affact from call bind apply
const agee = 10;
 var person96 = {
    name:"akash",
    age:20,
    getArrow:()=>console.log(this.age),//nothing print
    getArrow:()=>console.log(this),//window obj
    getAge:function(){
        console.log(this.age);
    }
 }

 var person2 = {age:24}
 person.getArrow.call(person2)
 person.getAge.call(person2);
 //--------------------------------------------
 //polyfill for Call method
 
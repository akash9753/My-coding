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
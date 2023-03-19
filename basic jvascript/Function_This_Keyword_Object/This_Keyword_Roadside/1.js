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
            console.log(this.newName,"and",this.name);
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
        nestedArrow=()=> console.log(this,newName,"and",this.name);
        nestedArrow();
    }
}
//userAaa.getDetails();
//-------------------------------------------
//how this keyword work inside  class 
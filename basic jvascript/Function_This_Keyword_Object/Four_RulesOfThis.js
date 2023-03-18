var raj = {
    name:'raj',
    greetNormal:function(){
      console.log("greetNormal",this);
    },
    greetArrow:()=>console.log("greetArrow",this)
    
}

raj.greetNormal()//Hello {name: 'raj', greet: ƒ}//implicit binding third rule
raj.greetArrow()//window obj

var a1 = raj.greetNormal;
a1();//window obj
var a2 = raj.greetArrow;
a2();//window obj

setTimeout(raj.greetNormal.bind(raj),1000)//{name: 'raj', greetNormal: ƒ, greetArrow: ƒ}
setTimeout(raj.greetArrow.bind(raj),1000)//window obj
//-------------------------------------------------------------------
// const john = {
//     name : "John"
// }
// function ask(){
//     console.log(this, this.name);
// }
// ask.call(john);
// ask.Apply(john);
//-------------------------------------------------------------------
// function Person(name){
//      this.name = name;
//      setTimeout(function() { //simple function
//          console.log(this);//"this" has its own binding to window object
//      }, 1000);
//  }
//  var p = new Person("Manisha")

//-------------------------------------------------------------------
// function Person(name){
//     this.name = name;
//     setTimeout(()=> { //arrow function do not have their own binding
//         console.log(this);//"this" will pic its value from outer scope
//     }, 1000);
// }
// var p = new Person("Manisha")
//-------------------------------------------------------------------
var person = {
    name:"John",
    ask:function(){
        console.log(this);
    }
}
new (person.ask.bind(person))();//ask {}

// var raj = {
//     name:'raj',
//     greetNormal:function(){
//       console.log("greetNormal",this);
//     },
//     greetArrow:()=>console.log("greetArrow",this)
    
// }
// raj.greetNormal()//Hello {name: 'raj', greet: ƒ}//implicit binding third rule
// raj.greetArrow()

// setTimeout(raj.greetNormal.bind(raj),1000)
//-------------------------------------------------------------------
// function Person(name){
//      this.name = name;
//      setTimeout(function() { //simple function
//          console.log(this);//"this" has its own binding to window object
//      }, 1000);
//  }
//  var p = new Person("Manisha")

//-------------------------------------------------------------------
function Person(name){
    this.name = name;
    setTimeout(()=> { //arrow function do not have their own binding
        console.log(this);//"this" will pic its value from outer scope
    }, 1000);
}
var p = new Person("Manisha")

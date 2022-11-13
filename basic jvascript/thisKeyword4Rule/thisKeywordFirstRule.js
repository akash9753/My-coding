//**********************************1st rule "new" Keyword */
// function Vehicle(){
//     console.log(this);
// }
// new Vehicle();
//when we call function using new keyword it does 4 things
//1. it will create brand new object {}
//2. new keyword will link this brand new object with another object which is the prototype of Vichle function by a __proto
//3. new keyword ill call this vichle function with the value of this set to ne object
//Vehicle.call{}
//4. if the Vehicle function is not returning anything it will return brand new object
function Vehicle(name){
    this.name = name;
    console.log(this);
}
new Vehicle("car");
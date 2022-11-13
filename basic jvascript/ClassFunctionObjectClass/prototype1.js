//prototype = for every function we are creating javascript engine creates 2 objects 1 the function itself
//and other is the prototype of the function
//prototype is useful when we use function in constructor mode when we create multiple object from that function
//in contructor mode
function Vehcile(numWheels,price){
    this.numWheels = numWheels,
    this.price = price,
    this.getPrice = function(){
        return this.price
    }
}

var Vehcile1 = new Vehcile(2,50000)
var Vehcile2 = new Vehcile(4,60000)

// Vehcile
// ƒ Vehcile(numWheels,price){
//     this.numWheels = numWheels,
//     this.price = price,
//     this.getPrice = function(){
//         return this.price
//     }
// }
// Vehcile.prototype
// {constructor: ƒ}
// constructor
// : 
// ƒ Vehcile(numWheels,price)
// [[Prototype]]
// : 
// Object
//How

function Vehcile(numWheels,price){
    this.numWheels = numWheels,
    this.price = price;
    // this.getPrice = function(){
    //     return this.price
    // }
}

Vehcile.prototype.getPrice = function(){
    return this.price;
}

var Vehcile1 = new Vehcile(2,50000)
var Vehcile2 = new Vehcile(4,60000)
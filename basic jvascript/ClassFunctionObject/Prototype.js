function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    
}
Vehicle.prototype.getPrice = function(){//common for all object
    return this.price;
}
Vehicle.prototype.color = "black";//common for all object

var vehicle = new Vehicle(2,50000);
var vehicle = new Vehicle(4,500000);

//protoype are used to share behaviour and data among different objects
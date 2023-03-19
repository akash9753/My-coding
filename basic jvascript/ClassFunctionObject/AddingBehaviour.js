function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    this.getPrice = function(){
        return this.price
    }
}
var vehicle = new Vehicle(2,50000);
var vehicle = new Vehicle(4,500000);

class Vehicle{
    constructor(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
}

var Vihicle1 = new Vehicle(2,50000);
var Vehcile2 = new Vehcile2(4,400000);

//in javascript we cannot call class without new keyword
//hoisting dosent work with class

//---class expression is possible
var Vehicle = class Vehicle{
    constructor(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
}
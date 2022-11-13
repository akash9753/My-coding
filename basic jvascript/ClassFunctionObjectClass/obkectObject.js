var obj = {}
var obj = new Object()

function Vehcile(numWheels,price){
    this.numWheels = numWheels,
    this.price = price,
    this.getPrice = function(){
        return this.price
    }
}

var Vehcile = new Vehcile(2,50000)
var Vehcile = new Vehcile(4,60000)

//*----------------------
//Object prototype
//Vihicle prototype
//V1

//Object => this is constructor function
//object => key value pair 
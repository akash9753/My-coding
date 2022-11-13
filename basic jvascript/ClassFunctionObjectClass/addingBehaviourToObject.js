function Vehcile(numWheels,price){
    this.numWheels = numWheels,
    this.price = price,
    this.getPrice = function(){
        return this.price
    }
}

var Vehcile = new Vehcile(2,50000)
var Vehcile = new Vehcile(4,60000)

//getPrice func will attached with each and every object this is not correct
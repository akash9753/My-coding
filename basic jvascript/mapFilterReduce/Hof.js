// function x(){
//     console.log("namaste");
// }
// function y(x){
    
// }


//--------------------------------------
//not a good way of coding
const radius = [3,1,2,4]

const calculateArea = function(radius){
    const output = []
    for(let i =0; i<radius.length; i++){
       output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));


const calculateCircumference = function(radius){
    const output = []
    for(let i =0; i<radius.length; i++){
       output.push(2 * Math.PI * radius[i] );
    }
    return output;
}
console.log(calculateCircumference(radius));

const calculateDiameter = function(radius){
    const output = []
    for(let i =0; i<radius.length; i++){
       output.push(2 *  radius[i] );
    }
    return output;
}
console.log(calculateDiameter(radius));


//-----------------------------------
//modular code | functional code | reusable code

const area = function (radius){
    return Math.PI * radius * radius;
}
const Circumference = function (radius){
    return 2 * Math.PI * radius;
}
const Diameter = function (radius){
    return 2 *  radius;
}

const calculate = function(radius,logic){
    const output = []
    for(let i =0; i<radius.length; i++){
       output.push(logic(radius[i]));
    }
    return output;
}

Array.prototype.calculate = function(logic){
    const output = []
    for(let i =0; i<this.length; i++){
       output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.map(area));

console.log(calculate(radius,area));
console.log(radius.calculate(area));
// console.log(calculate(radius,Circumference));
// console.log(calculate(radius,Diameter));

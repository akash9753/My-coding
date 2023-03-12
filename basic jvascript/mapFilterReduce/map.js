// The map() method creates a new array with the results of calling a 
// provided function on every element in the calling array. We can create 
// a simple function which will multiply all the numbers inside the array 
// with itself, and this can be done by applying the map function on the 
// array.

const arr = [5,1,3,2,6];

// transformation logic
function double(x){
    return x*2;
}

function binary(x){
    return x.toString(2);
}

// const output = arr.map(function binary(x){
//     return x.toString(2);
// })

const output = arr.map((x) => x.toString(2));

console.log(output);
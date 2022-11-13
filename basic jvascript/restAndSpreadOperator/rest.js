// The spread operator is used to transform an array into its individual 
// elements whereas the rest parameters are used to transform individual 
// elements into an array. Also, the spread operator is used when calling 
// a function whereas the rest parameters are used in the function 
// parameters.

//  - When ... is at the end of function parameters, it’s “rest parameters” 
//  and gathers the rest of the list of arguments into an array.
//  - When ... occurs in a function call or alike, it’s called a “spread 
//  syntax” and expands an array into a list.




function sumOfNumbers(...args) {  
    console.log(typeof args);
    let sum = 0;
    for (let arg of args){
        sum = sum + arg;  
    }
    return sum;
}

console.log(sumOfNumbers(1,2,3,4,5));
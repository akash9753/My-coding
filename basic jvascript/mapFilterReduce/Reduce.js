const arr = [5,1,3,2,6];

function findSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
},0);//initial value = 0;
console.log(output);

function findMax(arr){
    for (let i = 0; i < arr.length; i++) {
        max = arr[i]
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const output1 = arr.reduce(function(max,curr){
       if(curr > max){
        max = curr;
       }
       return max;
},0);
console.log(output1);

const users = [
    {firstName:"akash", lastName:"patel", age:26},
    {firstName:"donald", lastName:"trump", age:75},
    {firstName:"elon", lastName:"musk", age:50},
    {firstName:"deepika", lastName:"padukon", age:26}
];

const output2 = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age] + 1;
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(output2);
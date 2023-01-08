document.getElementById('h').innerHTML = "t1";

//string
let x = 50 + "50"
console.log(x);//55
let y = "5" + 5
console.log(y);//55
console.log(10+20+"30"+10+20);//30301020
console.log(10+ +"10");//20
console.log(10-"10");//0
console.log(10*"10");//100
console.log(10/"10");//1
//apart from + operator  -*/ will convert string datatype to number datatype bydefault

console.log(10/"A"); //NaN = not a number
console.log(10*"A"); //NaN = not a number

console.log(true+true);//2
console.log(true/true);//1
console.log(1+true);//2
console.log(true/false);//Infinity

console.log(10>9>8);//false
//true > 8
//1 > 8
console.log(1<2<3);//true
//true<3
//1<3
x = 'hello'
console.log(x);//hello
//---------
const num1 = 10;
const num2 = 20;

const str1 = "test1";
const str2 = "test2";

const strNum1 = "30";
const strNum2 = "50";

console.log(`${num1} + ${num2} = ${num1 + num2}`);//10 + 20 = 30
console.log(`${str1} + ${str2} = ${str1 + str2}`);//test1 + test2 = test1test2
console.log(`${num1} + ${strNum1} = ${num1 + strNum1}`);//10 + 30 = 1030
console.log(`${num1} + ${num2} + ${strNum1} = ${num1 + num2 + strNum1}`);//10 + 20 + 30 = 3030
console.log(`${num1} + ${num2} + ${strNum1} +${num1} + ${num2}  = ${num1 + num2 + strNum1 + num1 + num2}`);//10 + 20 + 30 +10 + 20  = 30301020

let fName = 'steve'
console.log('salary =' + fName);
console.log('data type of fName = ' + typeof(fName));

//number
let n = 34;
let n2 = -24;
let n3 = 34.58;

let num = 100
console.log('num =' + num);
console.log('data type of num = ' + typeof(num));

let n5 = 130.21
console.log('n5 =' + n5);
console.log('data type of num = ' + typeof(n5));

//Boolean
let b = 2>3;
console.log(b);

let canVote = false;
console.log('canVote =' + canVote);
console.log('data type of canVote = ' + typeof(canVote));

//undefined
let u;
console.log(u);//undefined
u = null;
console.log(u);//null // removed from memory

//------------------------***************************----------------
console.log(typeof([]));
console.log(typeof({}));
console.log(typeof(typeof({})) === 'string');

//------------------------**********Type Cnversion*****************----------------
let type = 4;
console.log(typeof type);

let NewType = String(type)
console.log(typeof NewType);

let typeB = false
console.log(typeof typeB);

let NewtypeB = String(type)
console.log(typeof NewtypeB);

let typeC = "hello"
console.log(typeof typeC);

let NewtypeC = Number(typeC);
console.log(NewtypeC); //NaN
console.log(typeof NewtypeC);
//*------------------------------------------------------************
// 5 == 5 true
// 6 == 5 false
// 5 =='5' true

// 5===5 //true
// 6===5 //flase
// 5==='5'//false
console.log(true == "true");//false
console.log(true === "true");//false
console.log(true == "1");//true
console.log(0.1+0.2);//0.30000000000000004
console.log(0.1+0.2 == 0.3);//flase
console.log(0.1+0.2 === 0.3);//flase

//this compares only value
console.log(8!=5);true
console.log(5!=5);false

//this compare valye and datatype
console.log(5!==5);false
console.log(5!=="5");true
console.log(5!==8);true
//------------------------***********OPERATOR****************----------------
//& if both left and right side true result yrue
console.log(1 & 1);//true 
console.log(1 & 1);//false
console.log(0 & 1);//false
console.log(0 & 0);//flase
// / if atleast one value is true then result is true
console.log(1 | 0);//true 
console.log(1 | 1);//true
console.log(0 | 1);//true
console.log(0 & 0);//flase

// ^ if both are opposite then result is true
console.log(1 ^ 0);//true
console.log(1 ^ 1);//false
console.log(0 ^ 1);//true
console.log(0 & 0);//flase

//----------------------*****************************
//Array methods
let arr = [20,30,40]
console.log(arr.length);
arr.push(50);
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.shift();
console.log(arr);

//splice
let arr1 = [10,20,30,40,50,60,70,80,90,100]
arr1.splice(4,3)
console.log(arr1);//[10, 20, 30, 40, 80, 90, 100]
arr1.splice(6,1)
console.log(arr1);//[10, 20, 30, 40, 80, 90]
arr1.splice(0,1);
console.log(arr1);//[20, 30, 40, 80, 90]
arr1.splice(1,1);
console.log(arr1);//[20, 40, 80, 90]

arr1.splice(2,0,50,60,70);
console.log(arr1);[20, 40, 50, 60, 70, 80, 90]

arr1.splice(1,1,30,40);
console.log(arr1); [20, 30, 40, 50, 60, 70, 80, 90]

arr1.splice(0,0,10);
console.log(arr1);[10, 20, 30, 40, 50, 60, 70, 80, 90]
arr1.splice(9,0,100);
console.log(arr1);[10, 20, 30, 40, 50, 60, 70, 80, 90,100]


//findIndex
let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90,100]
console.log(
    arr2.findIndex((ele, index)=>{
          return ele===50;
    })
);

arr2.splice(arr2.findIndex((ele,index)=>{
     return ele == 50;
}),1)
console.log(arr2);

//map
console.log([1,2,3,4,5].map((ele,index)=>{
    return ele*2;
})); 

console.log(
    [1,2,3,4,5].map((ele,index)=>{
        return ele == 1 || ele == 5 ? "hello" : "welcome" 
    })
);

//Filter
//is used to apply condition
console.log([100,200,300,400,500].filter((ele, index)=>{
          return ele >= 300;
}));

console.log(
    [1,2,3,4,5].map((ele,index)=>{
        return ele * 100;
    }).filter((ele,index)=>{
         return ele <= 200;
    })
);

//to find the summation
console.log(
    [1,2,3,4,5].reduce((firstEle,nextEle )=>{
          return firstEle + nextEle
    })
);


console.log(
    [1,2,3,4,5].map((ele,index)=>{
        return ele*100;
    }).filter((ele,index)=>{
        return ele<=300
    }).reduce((firstEle,nextEle)=>{
        return firstEle + nextEle
    }, 10000)//thia static value technically called accumelator
);//10600


//reverse
let arr7 = [10,20,30,40,50]
console.log(arr7.reverse());


//split
console.log("hello".split("").reverse().join(''));//olleh

let arr10 = ["angular14", "reactjs", "nodejs", "veujs", "mongodb"]

console.log(
    arr10.map((ele,index)=>{
        return ele.split("").reverse().join("")
    })
);

console.log(
    arr10.map((ele,index)=>{
        return ele === "nodejs" ? ele.split("").reverse().join("") : ele
    })
);

//spread operator
let array1 = ["angular14"]
let array2 = ["nodejs"]
let array3 = ["mongodb"]
let array4 = [...array1,...array2,...array3]
console.log(array4);


//indexOf it wont create indexes to repeated elements
let arr5 = [10,20,30,10,20,30]

arr5.forEach((ele,index)=>{
    console.log(arr5.indexOf(ele));
})

//logic for removing duplicates
console.log(
    arr5.filter((ele,index)=>{
        return arr5.indexOf(ele) === index;
    })
);

//JSON Object
let obj = {
    "key1" : "Hello1",
    "key2" : "Hello2",
    "Key3" : "Hello3"
}

for(let key in obj){
    //console.log(key);
    //console.log(obj[key]);
    console.log(typeof key);
}
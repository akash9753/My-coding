//clouser makes it possible for function to have a private varibale
const username = "akash"
function makeFunc(){
    var name = "Mozilla";
    function displayName(num){
        console.log(name,num,username);
    }
    return displayName;
}
// var myFunc = makeFunc()
// myFunc();
makeFunc()(5);
//----------------------------------------------
var e = 10;
function sum(a){
    return function (b){
        return function(c){
            return function(d){
                return a+b+c+d+e;
            }
        }
    }
}
console.log(sum(1)(2)(3)(4));
//------------------------------------------------
let count = 0;
(function printCount(){
    if(count === 0){
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();
//-------------------------------------------------
function createBase(num){
    return function(innerNum){
        console.log(innerNum+num);
    }
}
var addSix = createBase(6);
addSix(10);
addSix(15);
//--------------------------------------------------
function find(index){
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i*i;
    }
    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("50");
find(50);
console.timeEnd("50");
//------------
function find(){
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i*i;
    }
    return function(index){
        console.log(a[index]);
    }
}
const clouser = find();
console.time("6");
clouser(6);
console.timeEnd("6");
console.time("50");
clouser(50);
console.timeEnd("50");
//--------------------------------------------
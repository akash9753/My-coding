function f (a,b,c){
    a = 3;
    b.push("bob")
    c.first = false;
}
var x = 4; //wont change
var y = ["raj", "rahul"]
var z = {first : true}

f(x,y,z);
console.log(x,y,z);
//4 | (3) ['raj', 'rahul', 'bob'] | {first: false}
//primitive data type value wont change
//object and array are pass by reference


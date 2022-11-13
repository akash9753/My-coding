// let arr = [10,20,30,40,50]
// console.log(arr[0], arr[2], arr[4])
// console.log(arr[0], arr[5], arr[-1])

// let arr = [10,20,30,40,50]
// console.log(arr.length)
// arr.length =3;
// console.log(arr[0], arr[2], arr[3],arr[5],arr[100])

// let arr = []
// console.log(arr.length)

// arr[100] = [1000]
// console.log(arr.length)

// let arr = [10,20,30,40,50]
// let result = arr.includes(80);
// console.log(result)  //false

// let arr = [10,20,30,40,50]
// console.log(arr)
// arr.push(50)
// console.log(arr)
// arr.unshift(5)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// delete arr[0]
// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.splice(4,3)
// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.splice(9,1)
// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.splice(2,0,5,10,15)
// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.splice(1,1,90,33)
// console.log(arr)

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(
//     arr.findIndex((element, index)=>{
//            return element == 50;
//     })
// )

// let arr = [10,20,30,40,50,60,70,80,90,100]

// arr.splice(arr.findIndex((element,index)=>{
//     return element == 50;
// }),1)
// console.log(arr)

// console.log(
//     [1,2,3,4,5].map((element, index)=>{
//         return element*100
//     })
// )

// console.log(
//     [1,2,3,4,5].map((element, index)=>{
//         return element ==1 || element == 5 ? "Hello" : "Welcome"
//     })
// )

// console.log(
//     [100,200,300,400,500].filter((element, index)=>{
//         return element >= 300
//     })
// )


// console.log(
//     [1,2,3,4,5].map((element, index)=>{
//         return element * 100
//     }).filter((element, index)=>{
//         return element <= 200
//     })
// )

// console.log(
//     [1,2,3,4,5].reduce((firstElement, nextElement)=>{
//         return firstElement + nextElement
//     })
// )

// console.log(
//     [1,2,3,4,5].map((element, index)=>{
//         return element * 100
//     }).filter((element, index)=>{
//         return element <= 300
//     }).reduce((firstElement, nextElement)=>{
//         return firstElement + nextElement
//     },10000)
// )


// let arr = [10,20,30,40,50]
// console.log(arr.reverse())

// console.log("hello".split("").reverse().join(""))

// let arr = ['angular14', "Reactjs", "Nodejs", "Vuejs","mongoDb"]

// console.log(
//     arr.map((element, index)=>{
//         return element.split("").reverse().join("")
//     })
// )

// console.log(
//     arr.map((element, index)=>{
//         return element == "Nodejs" ? element.split("").reverse().join("") : element
//     })
// )


// Spread operator
// let arr1 = ["Angular14"]
// let arr2 = ["nodejs"]
// let arr3 = ["mongoDB"]
// let arr4 = [...arr1,...arr2,...arr3]
// console.log(arr4)

// let father = ["1cr"]
// let child = [...father , "1 kg gold"]
// let grand_child = [...child, "1 kg silver"]
// console.log(grand_child)

// let arr = [10,20,30,10,20,30]
// arr.forEach((element, index)=>{
//         console.log(arr.indexOf(element))
// })

//in order to delete duplicate elements
// let arr = [10,20,30,10,20,30]
// console.log(
// arr.filter((element, index)=>{
//           return arr.indexOf(element) === index;
// }))

// let obj1 = {"key1" : "hello_1"}
// let obj2 = {"key2" : "hello_2"}
// let obj3 = {"key3" : "hello_3"}
// let obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)
    

// let obj1 = {"key1" : "hello_1"}
// let obj2 = {...obj1,"key2" : "hello_2"}

// let obj4 = {obj2}
// console.log(obj2)


// let arr = [
//     {"name": "shirt1", "cost": 500, "brand": "nikki"},
//     {"name": "shirt2", "cost": 1000, "brand": "puma"},
//     {"name": "shirt3", "cost": 1500, "brand": "uba"},
//     {"name": "shir4", "cost": 900, "brand": "reebok"},
//     {"name": "shirt5", "cost": 300, "brand": "united"},
//     {"name": "shirt5", "cost": 100, "brand": "bee"}
// ]

//Spread Operator
// var returnValue = Math.max(1,3,4,5,6,7,8,9)
// console.log(returnValue)

// var myObj = {}
// Object.assign(myObj,{a:1, b:2}, {z:9,y:6})
// console.log(myObj)

// function sum(a,b){
//     return a + b
// }
// var myA = [4,5]
// console.log(sum(...myA))

function sum(a, b, ...args){
    console.log(args);
    let multi = a*b
    let sum = 0;
    for (const arg of args) {
        sum += arg  
    }
    return [sum, multi];
}
console.log(sum(2,3,5,45,87,98,56,24,3,2))
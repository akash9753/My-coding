// var a = 100;//same memory location
// {
//     var a = 10;//same memory location
//     let b = 20;
//     const c = 30
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }
// console.log(a);
//---------------------------------------------------------------------
var b = 100;//Scipt scope
{
    var a = 10;//block scope
    let b = 20;
    const c = 30
    console.log(a);
    console.log(b);//20//shadowing the balue of b
    console.log(c);
}
console.log(b);//100
//------------------------------------------------------------------------
//Illegal shaowing
let a = 20;
{
    var a = 20;//incorrect
}

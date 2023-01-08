var a = 100;
{
    var a =  10
    let b = 20;
    const c = 30;
    console.log(a);//shadowing//10
    console.log(b);
    console.log(c);
}
console.log(a);//10
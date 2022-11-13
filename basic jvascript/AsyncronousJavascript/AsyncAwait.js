//as soon as i put async keyword in front of a function that means this function will return a promise

async function asyncTask(){
     return "Resolved";
}

asyncTask().then(data => console.log(data))//Resolved

//-----------------------------------------------------------
function getData(){
    return Promise.resolve('Some data')
}
async function abc(){
    const data = await getData();
    console.log(data);
}
abc()
//when javascript engine encounter the await keyword 
//1.suspend the function
//2.wait for getData to be completed
//3.js will move on to synchorous code
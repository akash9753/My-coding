const cart = ["shoes", "pants", "kurta"]

const promise = createOrder(cart);

promise.then(function (orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //cretaeOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
        }
        //logic for createOrder
        const orderId = "123456";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
        }
    })
    return pr;
}

function validator(cart){
    return true;
}
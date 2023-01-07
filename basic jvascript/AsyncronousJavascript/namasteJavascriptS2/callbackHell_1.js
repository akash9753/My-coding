//promise object are immutable

//always return promise when we r doing promise chainning 

const cart = ["shoes", "pants", "kurtas"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

  

// const promise = createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })

const GITHUB_API = "https://api.github.com/users/akshaymarch7"

 const user = fetch(GITHUB_API)

 console.log(user);

 user.then(function(data){
    console.log(data);
 })

 // createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return updateWalletBalance(paymentInfo);
//   });
 
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo)=> showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo))

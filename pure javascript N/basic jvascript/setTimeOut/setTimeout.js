console.log("start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");

//---------------------------------------------------

console.log("start");

setTimeout(function cb() {
    console.log("Callback");
}, 0);

console.log("End");

//implicit binding rule
var raj = {
    name:'raj',
    greet:function(){
      console.log("Hello",this);
    }
}
raj.greet()//Hello {name: 'raj', greet: ƒ}//implicit binding third rule

var localAskFunc = raj.greet
localAskFunc
localAskFunc()//Hello Window {window: Window, self: Window, document: document, name: '', location: Location, …}
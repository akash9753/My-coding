//explicit binding
const  jhon = {
    name: "jhon"
}
function ask(){
    console.log(this, this.name);
}
ask()//Window {window: Window, self: Window, document: document, name: '', location: Location, …} ''
ask.call(jhon)//{name: 'jhon'} 'jhon'
ask.apply(jhon)//{name: 'jhon'} 'jhon'


//sub Rule Hard binding rule

var raj = {
    name:'Raj',
    greet:function(){
        console.log('Hello',this);
    }
}
raj.greet()//Hello {name: 'Raj', greet: ƒ}
var localAsk = raj.greet
localAsk()

var localGreet = raj.greet.bind(raj)
localGreet()

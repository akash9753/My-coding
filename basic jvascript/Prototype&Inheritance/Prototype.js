let arr = ["a1,a2,a3,a4"]
let obj = {
    name:"a1",
    city:"a2",
    getIntro:function(){
        console.log(this.name + "from" + this,city);
    }
}

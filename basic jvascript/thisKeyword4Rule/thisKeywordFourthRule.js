//***************************4th rule default binding------------- */
//this rule will apply when other 3 wont
function ask(){
    console.log(this, this.name);//window object undefined
}
ask()//calling it in the global context default binding rule
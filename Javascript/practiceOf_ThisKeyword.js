let user = {
    name : 'honey',
    age : '6',
    laptop : ["asus","apple"],
    new : function(){
        console.log(this.age)
    }
}
user.new();
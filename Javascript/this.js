//this is one way to solve this problem as its using function to compare to objects as third party

// function fastestlaptop(laptop1,laptop2){
//     if(laptop1.cpu>laptop2.cpu){
//         console.log(laptop1);
//     }
//     else{
//         console.log(laptop2);
//     }
// }

let laptop2 =  {
    cpu : 'i7',
    ram : '16',
    brand : 'apple',

    

    getconfig : function(params) {
        console.log(this.cpu);
    }
}

let laptop1 = {
    cpu : 'i5',
    ram : '16',
    brand : 'hp',
    compare : function(other){
        if(this.cpu>other.cpu)
            console.log(this);
        
        else
            console.log(other);
        },
    getconfig: function(){
        console.log(this.cpu);
    }
}
//fastestlaptop(laptop1,laptop2);

laptop1.compare(laptop2);

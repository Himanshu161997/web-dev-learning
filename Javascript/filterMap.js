let num = [3,24,34,67,89]
//use filter method to filter even number 
let result = num.filter(n  => n%2===0)
//now we use map method to take the method and change it or double it
.map(n =>n*2)
//now we will use reduce method to take some value and reduce it to one value 
.reduce((a,b) => a+b);
//we use foreach loop in array to arrange the numbers one by one
// .forEach(n =>{
    console.log(result)
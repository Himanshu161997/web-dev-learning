// this is the way to do normal function for add three numbers

// function add(a,b,c){
// return a+b+c;
// }
// console.log(add(2,3,5));

//this id the way to do currying function for add 3 numbers
// function add(a) {
//     return function(b){
//         return function (c) {
//             return a+b+c;
            
//         };
//     };
// };
// console.log(add(1)(2)(3))

//this is the way to do this program by ecmascript 6 
//by arrow function

let add = (a)  => (b) => (c) => a+b+c;
console.log(add(1)(2)(4));
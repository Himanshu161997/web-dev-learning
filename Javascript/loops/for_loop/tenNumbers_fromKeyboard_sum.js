// Write a program in C to read 10 numbers from the keyboard and find their sum and average.
// Test Data :
// Input the 10 numbers :
// Number-1 :2
// ...
// Number-10 :2
// Expected Output :
// The sum of 10 no is : 55
// The Average is : 5.500000

const prompt = require("prompt-sync")({sigint:true});

console.log("give me 3 numbers:\n");
let sum = 0;

for(let num = 1;num<=3;num++){
    sum += num; 

    num = Number.parseInt(prompt("give me the number"));

}

console.log(sum);

//first n natural numbers


const prompt = require("prompt-sync")({sigint:true});
let number = Number.parseInt(prompt("what is the number:"));
let sum = 0;
for(let i = 1; i<= number;i++){

    console.log(i)
    sum =sum + i;
}
console.log(sum);
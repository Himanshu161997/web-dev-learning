// Write a program in C to display the multiplication table for a given integer.
// Test Data :
// Input the number (Table to be calculated) : 15
// Expected Output :
// 15 X 1 = 15
// ...
// ...
// 15 X 10 = 150
const prompt = require("prompt-sync")({sigint:true});
let num = Number(prompt("input the number:"));
for(let i = 1;i<=10;i++){
    console.log(`${num} * ${i} = ${num*i}`);
}
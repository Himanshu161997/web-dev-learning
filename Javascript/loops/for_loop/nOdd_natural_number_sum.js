// Write a C program to display the n terms of odd natural numbers and their sum.
// Test Data
// Input number of terms : 10
// Expected Output :
// The odd numbers are :1 3 5 7 9 11 13 15 17 19
// The Sum of odd Natural Number upto 10 terms : 100

const prompt = require("prompt-sync")({sigint:true});
let num = Number(prompt("input numbers of terms:"))
let sum = 0;
for(let i = 1; i<=num;i++){
  //if(i%2!==0){
    //console.log(i)/// thios is wrong logic for finding odd num bcs at 10%2 it goes out of loop
    //sum += i;

    console.log(2*i-1)
    sum += 2*i-1;
  }
 
console.log(sum);
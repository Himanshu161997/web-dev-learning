//ternary operator

const prompt = require("prompt-sync")({sigint:true});
let age = Number(prompt("what is ypur age:"));

const drive = age>=18 ? "you can drive" : "you cannot drive";
console.log(drive);
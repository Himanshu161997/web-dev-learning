const prompt = require("prompt-sync")({sigint:true});
let num = Number(prompt("give me the number"));
if(num%2===0 || num%3===0)
{
    console.log("number is divisible by either  two or three");
}
else{
    console.log("number is not divisible by either of them");
}
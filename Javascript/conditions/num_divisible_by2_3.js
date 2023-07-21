const prompt = require("prompt-sync")({sigint:true});
let num = Number(prompt("give me the number"));

if(num%2 === 0 && num%3 ===0)
{
    console.log("number is divisble by 2 and 3");
}
else{
    console.log("number is not divisible by 2 and 3");
}
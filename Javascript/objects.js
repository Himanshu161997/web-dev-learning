const prompt = require("prompt-sync")({sigint:true});
let hell = (prompt("give me the key: "));

let object ={
    name : 'honey',
    class : '10th',
    rollnumber : '2',
}
console.log(object[hell]);

// destructuring on string using split method
let words = "my name is honey and iam safe".split(' ')
let [a,b,,...d] = words;
console.log(d)
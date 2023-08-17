//simple function for email with using currying
function email (to) {
    return function(subject){
        return function(body){
            console.log(`sending email to ${to} with subject${subject}: ${body}`)
        };
    };
};
let step1 = email("himanshu.abc@gmail.com")
let step2 = step1("regarding the new order")
let step3 = step2("hey honey here is your order")

// es6 way for this program using arrow function

// const email = (to) => (subject) => (body) => console.log(`sending email to ${to} with subject${subject}: ${body}`);

// let step1 = email("himanshu.abc@gmail.com")
//  let step2 = step1("regarding the new order")
// let step3 = step2("hey honey here is your order")

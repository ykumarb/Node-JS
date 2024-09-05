
// This will allow us to use the greet function from the greet.js file
const greet = require("./greet");
const { variabl1, variabl2, variabl3 } = require("./peoples");

greet("John");

console.log(variabl1);
console.log(variabl2);
console.log(variabl3);

greet(variabl1);
greet(variabl2);
greet(variabl3);
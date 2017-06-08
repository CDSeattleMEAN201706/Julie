//this is where you would call your mathlib.js file so it knows what 'function' to use
//the empty () at the end of the mathlib is invoking the function you have on mathlib.js
//so the variables set in mathlib.js do not affect the variables in the apps.js
var math = require('./mathlib')();

let num1 = 6;
let num2 = 9;
let num = 93;
let num3 = 1;
let a = -2;

console.log("Sum of " + num1 + " and " + a + " is: ", math.add(num1, a));
console.log(math.multiply(num1,num2));
console.log(math.square(num));
console.log(math.random(num1,num));

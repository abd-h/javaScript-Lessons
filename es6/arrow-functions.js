/*  Topics Covered
    1. Arrow functions 8 - 77
    2. Default Parameters 78 - 105
    3. Rest parameters
*/


/*Use Arrow Functions to Write Concise Anonymous Functions



In JavaScript, we often don't need to name our functions, 
especially when passing a function as an argument to another function. 
Instead, we create inline functions. We don't need to name these functions 
because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:*/
const myFunc = function () {
    const myVar = "Value";
    return myVar;
}

/*ES6 provides us with the syntactic sugar to not have to write 
anonymous functions this way. Instead, you can use arrow function syntax:
*/
const myArrowFunc = () => {
    const myVar = "value";
    return myVar;
}

/*When there is no function body, and only a return value, 
arrow function syntax allows you to omit the keyword return 
as well as the brackets surrounding the code. 
This helps simplify smaller functions into one-line statements:*/

const ArrowFunc = () => value;
//This code will still return the string value by default.

/*Rewrite the function assigned to the variable magic which returns 
a new Date() to use arrow function syntax. Also, make sure nothing is 
defined using the keyword var.

var magic = function() {
  return new Date();
};
*/

const magic = () => new Date();
console.log(magic());

/*Write Arrow Functions with ParametersPassed
Just like a regular function, you can pass arguments into an arrow function.*/

const doubler = (a) => (a * 2);
console.log(doubler(8)); // returns 16

/*If an arrow function has a single parameter, the parentheses enclosing 
the parameter may be omitted.*/
const timesTwo = num => num * 2;
console.log(timesTwo(9)); // returns 18

/*It is possible to pass more than one argument into an arrow function.*/

const multiplier = (a, b) => a * b;
console.log(multiplier(4, 3)); //returns 12

// Rewrite the myConcat function which appends contents of 
// arr2 to arr1 so that the function uses arrow function syntax

/*var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

/* Set Default Parameters for Your Functions
In order to help us create more flexible functions, 
ES6 introduces default parameters for functions.

Check out this code: */
const greeting = (name = "anonymous") => "Hello " + name;
console.log(greeting("Tom"));
console.log(greeting());

/*The console will display the strings Hello John and Hello Anonymous.

The default parameter kicks in when the argument is not 
specified (it is undefined). As you can see in the example above, 
the parameter name will receive its default value Anonymous 
when you do not provide a value for the parameter. 
You can add default values for as many parameters as you want.

Modify the function increment by adding default parameters 
so that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
*/
const increment = (number, value = 1) => number + value;
console.log(increment(2,3));
console.log(increment(2));

/*se the Rest Parameter with Function Parameters

In order to help us create more flexible functions, ES6 introduces 
the rest parameter for function parameters. With the rest parameter, 
you can create functions that take a variable number of arguments. 
These arguments are stored in an array that can be accessed later 
from inside the function.

Check out this code:*/

function howManyArgs(...args) {
    return `You have passed ${args.length} arguments`;
}
console.log(howManyArgs(1,2,3));
console.log(howManyArgs([1,2,3], {}, true, null));

/*The console would display the strings You have passed 3 arguments, 
and You have passed 4 arguments..

The rest parameter eliminates the need to check the args array 
and allows us to apply map(), filter() and reduce() on the parameters array.

Modify the function sum using the rest parameter in such a way that the 
function sum is able to take any number of arguments and return their sum.

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}*/

// clue

const product = (n1,n2,n3) => {
    const args =[n1, n2, n3];
    return args.reduce((a, b) => a * b, 1);
}

// Can be written as 

const products = (...arg) => {
    return arg.reduce((a, b) => a * b, 1)
}
console.log(products(1,2,3,4));

const sum = (...args) => {
    
    return args.reduce((a, b) => a + b, 0)
}
console.log(sum());
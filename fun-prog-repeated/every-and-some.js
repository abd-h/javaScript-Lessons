/**
    Use the every Method to Check that Every Element in an Array Meets a Criteria

The every method works with arrays to check if every element passes a particular test. 
It returns a Boolean value - true if all values meet the criteria, false if not.

For example, the following code would check if every element in the numbers array 
is less than 10:
 */
let numbers = [1, 5, 8, 0, 10, 11];

let lessThanTen = numbers.every((currentValue) => (currentValue < 10));
console.log(lessThanTen);

/*The every method would return false here.

1.  Challenge
Use the every method inside the checkPositive function to check if every 
element in arr is positive. The function should return a Boolean value.
*/

function checkPositive(arr) {
   return arr.every((a) => a > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));

/*Use the some Method to Check that Any Elements in an Array Meet a Criteria

The some method works with arrays to check if any element passes a particular test. 
It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:*/

let nums = [10, 50, 8, 220, 110, 11];
let underTen = nums.some((currentValue) => (currentValue < 10));
console.log(underTen);

/**
    The some method would return true.

    1.  Challenge
Use the some method inside the checkPositive function to check 
if any element in arr is positive. The function should return a Boolean value.
 */
function checkPositive(arr) {
    return arr.some((currentValue) => (currentValue == true));
}
console.log(checkPositive([1, 2, 3, -4, 5]));

/*      Introduction to Currying and Partial Application

The arity of a function is the number of arguments it requires. 

Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another 
function that takes the next argument, and so on.

Here's an example:

*/

function uncurried(x, y){
    return x + y;
}


function curried(x){
    return function(y) {
        return x + y
    }
}
console.log(curried(2)(4)); // returns 6

/**
This is useful in your program if you can't supply all the arguments to a function at one time. 
You can save each function call into a variable, which will hold the returned function reference 
that takes the next argument when it's available. Here's an example using the curried function 
in the example above:
 */

let funcForY = curried(1);
console.log(funcForY(2));

/**
Similarly, partial application can be described as applying a few arguments t
o a function at a time and returning another function that is applied to more arguments. 

Here's an example:
 */
function impartial(x,y,z){
    return x + y + z;
}

let partialFn = impartial.bind(this, 1, 2);
console.log(partialFn(10));

/**
            1.  Challenge

Fill in the body of the add function so it uses currying to add parameters x, y, and z.

 */
function add(x) {
    return ((y) => ((z) => x + y + z))
}
console.log(add(10)(20)(30));

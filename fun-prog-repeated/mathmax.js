/**
Why Math.max() Without Arguments Returns -Infinity

Math.max() is a built-in JavaScript utility function that determines 
the maximum number from the arguments.

For example, let’s determine the maximum of the numbers 1, 2 and 3: */

console.log(Math.max(1,2,3)); // 3
/*
As expected, 3 is the maximum of 1, 2, and 3.

What would happen if Math.max() is invoked with just one argument:

Math.max(1); // => 1
As expected, the maximum of one number is the number itself.

But what would happen if you invoke Math.max() without arguments at all?

Math.max(); // => -Infinity
While it might be unexpected at first, but calling Math.max() without arguments 
returns -Infinity. Let’s find out why it happens, and why it’s important to happen this way.

1. Max of one array
Before diving into the main question (why Math.max() without args returns -Infinity), 
let’s see how Math.max() can be used to determine the maximum number from an array.

Math.max(num1, num2, ..., numN) accepts multiple number arguments and returns the 
maximum number of them. Simple as a pie.

If you want to determine the maximum number of an array, then you can use the spread 
arguments operator on the array:

*/
const numbers = [1, 2,3,4,5,6,7,8,9,10];
const largestNum = Math.max(...numbers);
console.log(largestNum);

/*
Math.max(...numbers1) expression uses the spread syntax and returns the maximum 
number of numbers1 array: 3.

2. Max of 2 arrays
Now let’s try something more interesting. Given two arrays of numbers, let’s determine 
the maximum number of each array, and then determine the maximum of these 2 maximum values.

A bit overwhelming, but bear with me…

 */
const numbers2 = Math.max(...numbers)
console.log(numbers2);



/*
Challenge 3 

Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are 
of the same value as these arguments.

Note: You have to use the arguments object.

function destroyer(arr) {
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));*/

/* Here below steps we'll gives a bit of direction.

1. arguments in an array-like object.
function destroyer(arr) {
  console.log(arguments);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// [object Arguments] {
//  0: [1, 2, 3, 1, 2, 3],
//  1: 2,
//  2: 3
//}

So, we have our arguments in an 'array-like' object.

I'm thinking we can convert arguments into an actual Array so we will have 
more built-in methods to potentially work with.

From the above mentioned MDN documentation, we learn how to convert arguments 
into an Array.

*****************

2. convert into an actual array  
let args = Array.from(arguments);
// or
let args = [...arguments];

## Using slice()

We now have an array of all our arguments. The first item in our new array is an array 
where we want to check if the other items exist. I would like to separate the arr from the 
other arguments, so we can call a frequently used method, slice().

We can call it like the below to result in having the other arguments in their own array.

const argsArray = [...arguments].slice(1);

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

This would give us argsArray = [2, 3];

We can now prepare a for loop on the amount of arr's length. We will have to check if 
each index in arr exists in our argsArray. If it is false, we can push it into a new empty array, 
and we would return the new array.

To check if the value exists in the array, we have one more Array method 
which we can use: indexOf().

3.  using indexOf()

When we compare, we will check the equality against -1 to see if the item is in the array or not (example below).
const nums = [1, 2, 3, 4];
console.log(nums.indexOf(20));
 -1 means is not there


 */

function destroyer(arr){

    let argsArray = [...arguments].slice(1);
   let sameArray = [];
   for (let i = 0; i < arr.length; i++){
       if (argsArray.indexOf(arr[i]) === -1) {
           sameArray.push(arr[i]);
       }
   }
   return sameArray;
}
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

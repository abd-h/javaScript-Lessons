/*          Return Part of an Array Using the slice Method
The slice method returns a copy of certain elements of an array. 
It can take two arguments, the first gives the index of where to begin the slice, 
the second is the index for where to end the slice (and it's non-inclusive). 

If the arguments are not provided, the default is to start at the beginning of the array 
through the end, which is an easy way to make a copy of the entire array. The slice method 
does not mutate the original array, but returns a new one.

Here's an example:
*/
let arr = ["Cat", "Dog", "Tger", "Zebra"];
let newArr = arr.slice(1, 4);
console.log(newArr);

/*
newArray would have the value ["Dog", "Tiger"].

Use the slice method in the sliceArray function to return part of the anim array 
given the provided beginSlice and endSlice indices. The function should return an array.

*/
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

    return anim.slice(beginSlice, endSlice)

  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

/*      Remove Elements from an Array Using slice Instead of splice

A common pattern while working with arrays is when you want to remove 
items and keep the rest of the array. JavaScript offers the splice method for this, 
which takes arguments for the index of where to start removing items, 
then the number of items to remove. If the second argument is not provided, the default 
is to remove items through the end. However, the splice method mutates the original array 
it is called on. Here's an example:
*/
let cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
let largeCities = cities.splice(3,1)
console.log(largeCities);
console.log(cities);// cities is now mutated array.

/*Here splice returns the string London and deletes it from the cities array. 
cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

As we saw in the last challenge, the slice method does not mutate the original array, 
but returns a new one which can be saved into a variable. 

Recall that the slice method takes two arguments for the indices to begin and end the 
slice (the end is non-inclusive), and returns those items in a new array. 
Using the slice method instead of splice helps to avoid any array-mutating side effects.

Rewrite the function nonMutatingSplice by using slice instead of splice. 
It should limit the provided cities array to a length of 3, and return a new 
array with only the first three items.

Do not mutate the original array provided to the function.

*/

function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3)

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));

/*    Combine Two Arrays Using the concat Method

Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:*/

let a = [1,2,3,4];
let b = [5,6,7,8];

let c = a.concat(b);
console.log(c); // The Return Array would be [1, 2, 3, 4, 5, 6, 7, 8]

/*
Use the concat method in the nonMutatingConcat function to concatenate 
attach to the end of original. The function should return the concatenated array.
*/

function nonMutatingConcat(original, attach)  {
  return original.concat(attach);
}

let first = [1, 2, 3];
let second = [4,5];

console.log(nonMutatingConcat(first, second));

/**   Add Elements to the End of an Array Using concat Instead of push

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to combine arrays into 
a new one without mutating the original arrays. Compare concat to the push method. push 
adds an item to the end of the same array it is called on, which mutates that array. 

Here's an example:

 */

let arr1 = [1, 2, 3];
let arr2 = [4,5,6];
console.log(arr2.push([6,7,8]));
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log(arr1.push(arr2));
console.log(arr1.push(arr2));

/** arr2 would have a modified value of [1, 2, 3, [4, 5, 6]], 
 * which is not the functional programming way.

concat offers a way to add new items to the end of an array 
without any mutating side effects.

 Change the nonMutatingPush function so it uses concat to add newItem 
 to the end of original instead of push. The function should return an array.

*/

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

console.log(nonMutatingPush(first, second));
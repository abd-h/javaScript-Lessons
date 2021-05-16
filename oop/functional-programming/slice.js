/**  Return Part of an Array Using the slice Method
The slice method returns a copy of certain elements of an array. 
It can take two arguments, the first gives the index of where to begin the slice, 
the second is the index for where to end the slice (and it's non-inclusive). 
If the arguments are not provided, the default is to start at the beginning 
of the array through the end, which is an easy way to make a copy of the entire array. 
The slice method does not mutate the original array, 
but returns a new one.

Here's an example: */

const arr = ["Dog", true, 1234, {fullName: "John Doe"}, undefined];
const arr2 = arr.slice(1, 3);
console.log(arr2);
// arr2 returns [true, 1234];

/**Use the slice method in the sliceArray function 
 * to return part of the anim array given the provided 
 * beginSlice and endSlice indices. 
 * The function should return an array. */

function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}
let inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

/*          Remove Elements from an Array Using slice Instead of splice
    A common pattern while working with arrays is when you want to remove items 
    and keep the rest of the array. JavaScript offers the splice method for this, 
    which takes arguments for the index of where to start removing items, 
    then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on. Here's an example:
*/

let cities =["Chicago","Deli", "Islamabad", "London", "Berlin"];
console.log(cities);
console.log(cities.splice(3,1));
console.log(cities);

/*
    Here splice returns the string London and deletes it from the cities array. 
    cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

    As we saw in the last challenge, the slice method does not mutate the original array, 
    but returns a new one which can be saved into a variable. 
    Recall that the slice method takes two arguments for the 
    indices to begin and end the slice (the end is non-inclusive), 
    and returns those items in a new array. Using the slice method 
    instead of splice helps to avoid any array-mutating side effects.

    Rewrite the function nonMutatingSplice by using slice instead of splice. 
    It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.
*/

function nonMutingSplice(cities) {
    return cities.slice(0,3);
}
let inputCities = ["Chicago","Deli", "Islamabad", "London", "Berlin"];
console.log(nonMutingSplice(inputCities));

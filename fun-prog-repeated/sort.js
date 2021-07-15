/**
 * Sort an Array Alphabetically using the sort Method
The sort method sorts the elements of an array according to the callback function.

For example:
 */

function ascendingOrder(arr){
    return arr.sort((a,b) => (a - b));
}
console.log(ascendingOrder([1,4,3,5,2]));
//This would return the value [1, 2, 3, 4, 5].

function reverseOrder(params) {
    return params.sort((a,b) => (b - a));
}

console.log(reverseOrder([1,4,2,5,3]));
//returns [5,4,3,2,1]

function reverseAlpha(arr){
    return arr.sort((a, b) => (a === b)? 0: (a < b)? 1 : -1);
}
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));
/**
    This would return the value ['z', 's', 'l', 'h', 'b'].

JavaScript's default sorting method is by string Unicode point value, 
which may return unexpected results. Therefore, it is encouraged to provide 
a callback function to specify how to sort the array items. 

When such a callback function, normally called compareFunction, is supplied, 
the array elements are sorted according to the return value of the compareFunction: 

If compareFunction(a,b) returns a value less than 0 for two elements a and b, 
then a will come before b. If compareFunction(a,b) returns a value greater than 0 
for two elements a and b, then b will come before a. If compareFunction(a,b) returns 
a value equal to 0 for two elements a and b, then a and b will remain unchanged.


            Challenge

Use the sort method in the alphabeticalOrder function to sort the elements of arr 
in alphabetical order.

function alphabeticalOrder(arr) {
  // Only change code below this line


  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
 */
function alphabeticalOrder(arr) {
    
    return arr.sort((a,b) => (a === b)? 0 :(a > b)? 1 : -1 );
}
const alphabetical = ["a", "d", "c", "a", "z", "g"];
console.log(alphabetical);//["a", "d", "c", "a", "z", "g"]
console.log(alphabeticalOrder(alphabetical));//["a", "a", "c", "d", "g", "z"]
console.log(alphabetical);//["a", "a", "c", "d", "g", "z"] sort mutates arrays.

/**
    Return a Sorted Array Without Changing the Original Array
A side effect of the sort method is that it changes the order of the elements 
in the original array. In other words, it mutates the array in place. 

One way to avoid this is to first concatenate an empty array to the one 
being sorted (remember that slice and concat return a new array), 
then run the sort method.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}
nonMutatingSort(globalArray);
 */

let globalArray = [5,6,3,2,9];
console.log(globalArray); // [5, 6, 3, 2, 9]

// 1.   nonMutating sorting using concat
function nonMutatingSort(arr){
    return arr.concat().sort((a,b) => a - b)
}
console.log(nonMutatingSort(globalArray));//[2, 3, 5, 6, 9]
console.log(globalArray);   //[5, 6, 3, 2, 9]

// 2.   Non Mutating sort using slice

function nonMutatingSort2(arr) {
    return arr.slice().sort((a,b) => a-b);
}
console.log(nonMutatingSort2(globalArray));//[2, 3, 5, 6, 9] sorted
console.log(globalArray);// [5, 6, 3, 2, 9] not Mutated globalArray.

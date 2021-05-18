/*      Combine Two Arrays Using the concat Method
 Concatenation means to join items end to end. JavaScript offers the concat 
 method for both strings and arrays that work in the same way. 
 For arrays, the method is called on one, then another array is 
 provided as the argument to concat, which is added to the end of the first array. 
 It returns a new array and does not mutate either of the original arrays. 
 Here's an example:*/

 let number = [1,2, 3, 4];
 let nums = [5, 6, 7, 8];
 let total = number.concat(nums);
 console.log(total);

 //The returned array would be [1, 2, 3, 4, 5, 6, 7, 8].

 /*Use the concat method in the nonMutatingConcat function 
 to concatenate attach to the end of original. The function should return 
 the concatenated array.
*/

function nonMutatingConcat(original, attached) {
    return original.concat(attached);
}
let first = [1, 2, 3];
let second = [4, 5];
console.log(nonMutatingConcat(first, second));


/*Add Elements to the End of an Array Using concat Instead of push

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to 
combine arrays into a new one without mutating the original arrays. 
Compare concat to the push method. push adds an item to the end of the same array 
it is called on, which mutates that array. Here's an example:

*/
let pushArr = [1,2, 3];
pushArr.push([4, 5, 6]);
console.log(pushArr);

/*pushArr would have a modified value of [1, 2, 3, [4, 5, 6]], 
which is not the functional programming way.

concat offers a way to add new items to the end of an array 
without any mutating side effects.

Change the nonMutatingPush function so it uses concat to add 
newItem to the end of original instead of push. 
The function should return an array.
*/

function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}
let firstNum = [1, 2, 3, 4, 5];
let secNum = [6, 7, 8]
console.log(nonMutatingPush(firstNum, secNum));
/**         Use an Array to Store a Collection of DataPassed
The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:
 */
let simpleArray = [true, "this", 234, undefined, null];
/**
 * 
 *          Remove Items Using splice()
 * 
 * All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length. A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects. 
 * 
 * Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArray has the value ['really', 'happy'].

We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.


*/
let complexArray = [
   
        {
           firstLevel:{
                stageOne :{
                one: 1,
            two: 2
            },
            stageTwo: {
                three: 3,
                four: 4
            }
           }
        },
        
        {
          firstPerson: {
                firstName: "John",
            lastName: "Smithiest",
            address :{
                postCode: "TW3 1QF",
               firstLine : [
                    "FLAT 7",
                    "BIRMINGHAM STREET",
                    "LEEDS"
                ]
            },
            contact: {
                phone: "07932412812",
                email: "bjames@gmail.com"
            },
            jobSearch: {
                app: "Indeed"
            }
          }
        }
   
]; 
complexArray.firstName = "James"
complexArray.lastName = "Bond"
console.log(complexArray);
let newPerson = complexArray.splice(1, 1);
console.log(newPerson);

/**We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10. */
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,1);
arr.splice(3, 4);
console.log(arr);
let arr1 =[...complexArray]
console.log(arr1);
/**Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
The second entry of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

Here, we begin with an array of numbers. Then, we pass the following to splice(): The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the remaining arguments (13, 14) will be inserted starting at that same index. Note that there can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.

 */
arr.splice(0,0, arr1)
console.log(arr);

/**Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs

function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);*/

let a =[1,2, 3];
let b = [4,5,6]
let c = a.slice();
let d = b.slice();
let e = [1];
let f = d.splice(e,...c);
let g =[a, b,...c];


console.log(g);

function frankenSplice(arr3,arr2, n) {
    let dc = arr2.slice();
    // dc.splice(n,0,...arr3);
    // return dc;
      for (let i = 0; i < arr3.length; i++) {
        dc.splice(n,0, arr3[i]);
        n++;
    }
    return dc;
  
    }
console.log(frankenSplice([1, 2, 3], [4, 5], 1));


/**     Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. 

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9])*/

function bouncer(arr5) {
    return arr5.filter(Number) && arr5.filter(String);
}    
console.log(bouncer([7, "de"]));

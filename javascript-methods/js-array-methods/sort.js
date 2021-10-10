/*Sort an Array Alphabetically using the sort Method

The sort method sorts the elements of an array according to the callback function.

For Example
*/
function assendingOrder(arr) {
    return arr.sort((a, b) =>   a- b )
}
const numbers = [22, 4, 6, 2, 24, 12];
console.log(assendingOrder(numbers));
// This would return [2, 4, 6, 12, 22, 24];

function reverseAlpha(arr) {
    return arr.sort((a, b) => (a === b)? 0 :(a < b)? 1 : -1);
}
const alpha = ['l', 'h', 'z', 'b', 's'];
console.log(reverseAlpha(alpha));
//This would return the value ['z', 's', 'l', 'h', 'b'].

/*JavaScript's default sorting method is by string Unicode point value, 
which may return unexpected results. 
Therefore, it is encouraged to provide a callback function to 
specify how to sort the array items. When such a callback function, 
normally called compareFunction, is supplied, the array elements are sorted 
according to the return value of the compareFunction: If compareFunction(a,b) 
returns a value less than 0 for two elements a and b, then a will come before b. 
If compareFunction(a,b) returns a value greater than 0 for two elements a and b, 
then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

Use the sort method in the alphabeticalOrder function to sort the 
elements of arr in alphabetical order.
*/

const alphabet = ["a", "d", "c", "a", "z", "g"];

function alphabeticalOrder(arr) {
    return arr.sort((a, b) => //sort methode mutates arrays
            (a === b)? 0
            :(a > b)? 1
            : -1);
}
let alphab = alphabet.slice();
 let alphabets=alphab.sort((a, b) => 
            (a === b)? 0
            :(a > b)? 1
            : -1);
console.log(alphabets);

console.log(alphabeticalOrder(alphabet));
console.log(alphabet);

/*Return a Sorted Array Without Changing the Original Array
A side effect of the sort method is that it changes the order of the 
elements in the original array. 
In other words, it mutates the array in place. One way to avoid this is 
to first concatenate an empty array to the one being sorted 
(remember that slice and concat return a new array), then run the sort method.


Use the sort method in the nonMutatingSort function to sort the elements 
of an array in ascending order. The function should return a new array, 
and not mutate the globalArray variable.
*/

let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    return arr.slice()
        .concat([])
        .sort((a, b) => (a === b)? 0
                :(a > b)? 1
                : -1)
}
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));

let orderArr = globalArray.slice()
                   .concat([])
                   .sort((a, b) => (a === b)? 0 :(a > b)? 1 : -1);

console.log(orderArr);                   
/*______________________________________________

*** Top 7 JavaScript Array sort() Method Use Cases ***

    Here I will be practicing the most common use cases for 
    Array sort() method in JavaScript. The sort() method sorts 
    the elements of an array and returns the sorted array, and no 
    copy is made. 
    
    The default sort order is ascending. In this article, we will see 
    how we can utilise its power to the fullest.

            Table of Contents
   1. Sort an Array of Strings
   2. Case-insensitive Sort an Array of Strings
   3. Sort an Array of Numbers
   4. Sort an Array of Date Strings
   5.Sort an Array except for one Element
   6. Sort Array of Objects by Property Value
    7. Sort Array of Objects by Multiple Property values
*/

//  1. Sort an Array of Strings

const arrStr = ["Apples", "Watermelon", "Bananas", "Cheries"];

const sortedArrStr = arrStr
    .slice().sort(
                            (a, b) => (a === b)? 0
                            :(a > b)? 1
                            : -1);
console.log(sortedArrStr); //returns ['Apples', 'Bananas', 'Cheries', 'Watermelon']
console.log(arrStr);// nonMutated ['Apples', 'Watermelon', 'Bananas', 'Cheries']

// On Decending order
const decendeingArrStr = arrStr
        .slice().concat()
        .sort((a,b) => b.localeCompare(a));
console.log(decendeingArrStr); 
//.......................................................................

// 2. Case-insensitive Sort an Array of Strings in decending order

const arrStr1 = ["Apples", "Watermelon", "Bananas", "cheries"];
const caseInSenArr = arrStr1
        .map(a => a[0].toUpperCase().concat(a.slice(1)))
        .slice()
        .concat()
        .sort((a, b) => (b === a)? 0
             : (b > a)? 1
             : -1
        );

console.log(caseInSenArr); // returns['Watermelon', 'Cheries', 'Bananas', 'Apples']
//...........................................................................

// 3. Sort an Array of Numbers

const numbersArr = [9, 12, 98, 1, 100,  2, 300]
const orderedNums = numbersArr
                                    .slice().concat()
                                    .sort((a, b) => (a === b)? 0
                                            :(b > a)? 1
                                            : -1);
console.log(numbersArr);
console.log(orderedNums);     

const sortingDates = ['2021-08-1', '2021-08-4', '2021-08-10', '2021-08-2'];
const ascendingDates = sortingDates
                                        .slice()
                                        .concat()
                                        .sort((a, b) => (new Date(a) === new Date(b))? 0
                                                                :(new Date(a) > new Date(b))? 1
                                                                : -1);
console.log(ascendingDates);   
const descendingDates = 
    sortingDates.slice().concat().sort((a, b) => 
                                                (new Date(b) === new Date(a))? 0
                                                :(new Date(b) > new Date(a))? 1
                                                : -1);                                                    
console.log(descendingDates);

                                                  

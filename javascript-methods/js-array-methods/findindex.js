/*              Array.prototype.findIndex()

The findIndex() method returns the index of the first element in the array t
hat satisfies the provided testing function. Otherwise, it returns -1, indicating 
that no element passed the test.*/

//JavaScript Demo: Array.findIndex()
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element => element > 13)

console.log(array1.findIndex(isLargeNumber));


/*Examples
Find the index of a prime number in an array
The following example returns the index of the first element in the array that is a prime 
number, or -1 if there is no prime number.*/

function isPrimeNumber(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrimeNumber)); // returns -1 (no prime)
console.log([4, 6, 7, 9, 12].findIndex(isPrimeNumber)); // return 2 (index 2 is 7);

/*         Find index using arrow function
The following example finds the index of a fruit using an arrow function:*/

const fruits  =["Apple", "Banana", "Cantaloup", "Blueberries", "Grapefruit"];
const blueberries = fruits.findIndex(a => a === "Blueberries");
console.log(blueberries); // returns index 3;
console.log(fruits[blueberries]); // Blueberries



/*Drop it
Given the array arr, iterate through and remove each element starting 
from the first element (the 0 index) until the function func returns true 
when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, 
arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
*/
function dropElements(arr, func){
    let number = arr.findIndex(a => func(a))
    if(number === -1){
        return [];
    }
    else if(number !== -1){
        return arr.slice(number);
    }
}

console.log(dropElements([1, 2, 3], function(n) {return n >=3; }));// returns 3
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); // returns 3,4
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // returns 1,0,1
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));// returns  1,2,3
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})) // should return [].;
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})) //should return [7, 4];
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))// should return [3, 9, 2].;


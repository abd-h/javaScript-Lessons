/* . Use the every Method to Check that Every Element in an Array Meets a Criteria

The every method works with arrays to check if every element passes 
a particular test. It returns a Boolean value - 
true if all values meet the criteria, false if not.

For example, the following code would check if every element 
in the numbers array is less than 10:
*/

// ES 5
var numbers = [1, 5, 8, 0, 10, 11];
var check = numbers.every(function(currentValue) {
  return currentValue < 10;
});
console.log(check);
// returns false;
function underTen(params) {
    return params.every(n => n < 10);
}

let underTwenty = [1, 2, 3, 4, 5, 10, 11, 13, 14];
console.log(underTen(underTwenty));
//The every method would return false here.

let mixNums = [1, 5, 8, 0, 10, 11];
let allNums = mixNums.every(x => x >= 0);
console.log(allNums);

/*Use the every method inside the checkPositive function 
to check if every element in arr is positive. 
The function should return a Boolean value.*/

function checkPositive(params) {
    return params
              .every(x => x >0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));

/* . Use the some Method to Check that Any Elements in an Array Meet a Criteria

The some method works with arrays to check if any element passes a particular test. 
It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:

*/

let under = [10, 50, 8, 220, 110, 11]
let inclusive = under.some(x => x < 10);
console.log(inclusive);
//The some method would return true.
function checkAgain(params) {
    return params
              .some(x => x < 10);
}
let isItTrue = [1, 2, 3, -4, 5];
console.log(checkAgain(isItTrue));
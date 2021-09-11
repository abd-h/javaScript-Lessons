/*                                          Drop it (Passed)☑️

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].*/
function dropElements(arr, func) {
    let number = arr.find(a => func(a));
    let indx = arr.indexOf(number);
    if(number === undefined){
        return [];
    }
    else if(number !== undefined){
        return arr.slice(indx);
    }
}
console.log(dropElements([1, 2, 3], function(n) {return n >=3; }));// returns 3
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); // returns 3,4
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // returns 1,0,1
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));// returns  1,2,3
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})) // should return [].;
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})) //should return [7, 4];
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))// should return [3, 9, 2].;

// This challenge looked easy at first look, however its anything but.
// I completed in 5 hours and it looks quite elegent as well..
// Happy coding and on to the next one.

/*                  Steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.*/
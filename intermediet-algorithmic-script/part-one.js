/*
*******   Contents    *******
1.  Sum All Numbers in a Range
2. Diff Two Arrays
3. Seek and Destroy

Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. The lowest number will not always 
come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers 
between 1 and 4 (both inclusive) is 10. 

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

***         Test            ***        

sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);*/

/*
 1. Since we have to figure out the numbers in between the two given to us in arr, 
    I would start by running sort() on arr, so arr[0] would be the smallest number.

2. I will also declare a new empty array to add all the numbers in between into.

3. In order to get all the numbers in between, I will create a for loop, and push 
    each value into our fullArr.
    If we sort() as above then run our for loop, fullArr on sumAll([1,4]) should be [1, 2, 3, 4].    

4. We now have all the numbers we need in an array. We just have to figure out how to add them all up.
    Enter another new-er array method, reduce().    
*/
function sumAll(arr) {
  arr = [...arr];
    let fullArr = [];
    arr.sort((a, b) => (a -b));
    for(let i = arr[0]; i <= arr[1]; i++){
        fullArr.push(i);
    }
   return fullArr.reduce((a,b) => (a + b),0);
}    
console.log(sumAll([4,1])); // returns 10

/* Take 2*/

function sumsInRange(arr){
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0],arr[1]);
  let fullArr = 0;
  for(let i = min; i <= max; i++) {
    fullArr += i;
  }
  return fullArr;
}
console.log(sumsInRange([1,4]));// returns 10

// Take 3

function sumOfRanges(arr) {
  const startNum = arr[0];
  const endNum = arr[1];
  const numCount = Math.abs(startNum - endNum) + 1;
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
}
console.log(sumOfRanges([5,10]));


/* 
Challenge 2 

Diff Two Arrays
Compare two arrays and return a new array with any items only found in 
one of the two given arrays, but not both. In other words, return the symmetric 
difference of the two arrays.

Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);*/

function diffArray(arr1, arr2){
  let newArray = arr1.concat(arr2);
  return newArray.filter((a) => !arr1.includes(a) || !arr2.includes(a));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


function newdiff(arr1, arr2){
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
        return a.filter((item) => b.indexOf(item) === -1);
    }
}
console.log(newdiff([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function diffArrays(arr1, arr2){
  let newArr = arr1.concat(arr2);
  let x = ((a) => !arr1.includes(a) || !arr2.includes(a));
  return newArr.filter(x);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



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


/*
4. Challenge 4

 ***    Wherefore art thou    ***
 Make a function that looks through an array of objects (first argument) and returns an array of all objects 
 that have matching name and value pairs (second argument). Each name and value pair of the source object has 
 to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }
, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return 
the third object from the array (the first argument), because it contains the name and its value, that was 
passed on as the second argument.

 function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", 
last: "Capulet" }], { last: "Capulet" });

***   Test    **

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", 
last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ 
  "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, 
"bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, 
"cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], 
{ "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []*/


//Stater Code
function whatIsInAName(collection, source){
  let arr = [];
  let sourceKey = Object.keys(source);
  arr = collection.filter((obj) => {
    for (let i = 0; i  < sourceKey.length; i++){
      if(!obj.hasOwnProperty(sourceKey[i]) || obj[sourceKey[i]] !== source[sourceKey[i]]){
        return false;
      }
    }
    return true;
  })
  return arr;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", 
last: "Capulet" }], { last: "Capulet" }));

/*
4. Challenge

Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string all-the-small-things

function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');*/

function spinalCase(str){
  let x = str 
                  .toLowerCase()
                  .split()
                  .replace(/\s/)
                  .join()
                  
  return x;
}
console.log(spinalCase('This Is Spinal Tap'));

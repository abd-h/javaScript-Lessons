/*      .slice
          .spread  
          indexOf

Copy Array Items Using slice()

The next method we will cover is slice(). Rather than modifying an array, 
slice() copies or extracts a given number of elements to a new array, leaving 
the array it is called upon untouched. slice() takes only 2 parameters — the first 
is the index at which to begin extraction, and the second is the index at which to stop 
extraction (extraction will occur up to, but not including the element at this index). 
Consider this:*/

let weatherConditions = ["rain"," snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1, 3); //snow and sleet;

/*todaysWeather would have the value ['snow', 'sleet'], while weatherConditions 
would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].

In effect, we have created a new array by extracting elements from an existing array.
------------------------------------------------------------

We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.

forecast should return ["warm", "sunny"]

The forecast function should utilize the slice() method

function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));*/

function forecast(arr) {
    return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/*      Copy an Array with the Spread Operator

While slice() allows us to be selective about what elements of an array to copy, 
among several other useful tasks, ES6's new spread operator allows us to easily 
copy all of an array's elements, in order, with a simple and highly readable syntax. 
The spread syntax simply looks like this: ...

In practice, we can use the spread operator to copy an array like so:
*/
let thisArray = [true, true, undefined,false, null];
let thatArray = [...thisArray];
console.log(thatArray);

/*  thatArray equals [true, true, undefined, false, null]. 
thisArray remains unchanged and thatArray contains the same elements as thisArray.
------------------------------------------------------------

We have defined a function, copyMachine which takes arr (an array) 
and num (a number) as arguments. The function is supposed to return 
a new array made up of num copies of arr. We have done most of the work for you, 
but it doesn't work quite right yet. Modify the function using spread syntax so that it
 works correctly (hint: another method we have already covered might come in handy here!).

copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]

copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]

copyMachine([true, true, null], 1) should return [[true, true, null]]

copyMachine(["it works"], 3) should return [["it works"], ["it works"], ["it works"]]

The copyMachine function should utilize the spread operator with array arr


function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}


*/
function copyMachine(arr, num) {
    let newArr = [];
    while(num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

/*      Combine Arrays with the Spread Operator

Another huge advantage of the spread operator is the ability to combine arrays, or 
to insert all the elements of one array into another, at any index. With more traditional syntaxes, 
we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:
*/
let oldArray = ["sage", "rosemery", "parsley", "thyme"];
let ingredientArray = ["basil", "cilantro", ...oldArray, "coriander"];
console.log(ingredientArray);

/*thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Using spread syntax, we have just achieved an operation that would have been more complex 
and more verbose had we used traditional methods.

We have defined a function spreadOut that returns the variable sentence. 
Modify the function using the spread operator so that it returns the 
array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());*/

function spreadOut() {
    let fragment = ["to", "code"];
    let  sentence  = ["learning",...fragment, "is", "fun"];
    return sentence
}
console.log(spreadOut());

/* Check For The Presence of an Element With indexOf()
Since arrays can be changed, or mutated, at any time, there's no guarantee 
about where a particular piece of data will be on a given array, or if that element 
even still exists. 

Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us 
to quickly and easily check for the presence of an element on an array. indexOf() takes 
an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

For example:*/

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
console.log(fruits.indexOf("dates"));
console.log(fruits.indexOf("oranges"));
console.log(fruits.indexOf("pears"));
/*indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 
(the first index at which each element exists).

indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. 
We have defined a function, quickCheck, that takes an array and an element as arguments. 
Modify the function using indexOf() so that it returns true if the passed element exists on the array, 
888sand false if it does not.

function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

*/
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) === -1){
        return false;
    }
    else {
        return true;
    }
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
//returns false;

/*  Iterate Through All an Array's Items Using For Loops

Sometimes when working with arrays, it is very handy to be able to iterate through
 each item to find one or more elements that we might need, or to manipulate an array 
 based on which data items meet a certain set of criteria. JavaScript offers several built in 
 methods that each iterate over arrays in slightly different ways to achieve different results 
 (such as every(), forEach(), map(), etc.), however the technique which is most flexible and 
 offers us the greatest amount of control is a simple for loop.
 
 consider the following*/

 function greaterThanTen(arr) {
     let newArr = [];
     for (let i = 0;  i < arr.length; i++){
         if (arr[i] > 10) {
             arr[i];
             newArr.push(arr[i]);
         }
     }
     return newArr;
 }
 console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

 /*We have defined a function, filteredArray, which takes arr, a nested array, 
 and elem as arguments, and returns a new array. elem represents an element 
 that may or may not be present on one or more of the arrays nested within arr. 
 Modify the function, using a for loop, to return a filtered version of the passed 
 array such that any array nested within arr containing elem has been removed.
 
 function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));*/

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/*  Create complex multi-dimensional arrays

Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, 
and there is plenty more to learn about working with arrays, much of which you will see in later sections. 
But before moving on to looking at Objects, lets take one more look, and see how arrays can become 
a bit more complex than what we have seen in previous challenges.

One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, 
or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, 
but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, 
each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very 
complex data structure, known as a multi-dimensional, or nested array. Consider the following example:
*/

let nestedArrays = [
    ["Deep"],
    [
        ["Deeper"], ["Deeper"]
    ],
    [
        [
            ["Deepest"]
        ],
        [
            [
                ["Deepest-est?"]
            ]
        ]
    ]
];

/*The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. 
The deepest arrays are 4 levels, and the deepest-est? is 5.

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, 
when dealing with large amounts of data. However, we can still very easily access the deepest levels 
of an array this complex with bracket notation:*/

console.log(nestedArrays[2][1][0]); // returns deepest-est;

/*This logs the string deepest-est?. And now that we know where that piece of data is, 
we can reset it if we need to:
*/

nestedArrays[2][1][0] = "Deeper still";
console.log(nestedArrays);

/*We have defined a variable, myNestedArray, set equal to an array. 
Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, 
so that it has exactly five levels of depth (remember, the outer-most array is level 1). 
Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, 
and on the fifth level, include the string deepest.

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];*/

let myNestedArray = [[
 
  ['unshift', false, 1, 2, 3, 'complex', 'nested', ["deep"]],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', [["deeper"]]],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [[["deepest"]]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
]];
console.log(myNestedArray[0][3][5]);
/*  Iterate with JavaScript While Loops

You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop 
because it runs while a specified condition is true and stops 
once that condition is no longer true.*/

let ourArray = [];
let i = 0;
while(i < 5) {
    ourArray.push(i);
    i++;
}
console.log(ourArray);

/*In the code example above, the while loop will execute 5 times 
and append the numbers 0 through 4 to ourArray.

Let's try getting a while loop to work by pushing values to an array.

Add the numbers 5 through 0 (inclusive) in descending order to myArray 
using a while loop.*/

let myArray = [];
let b = 5;
while (b >= 0) {
    myArray.push(b);
    b--;
}
console.log(myArray);
/*[5, 4, 3, 2, 1, 0]*/

/*      Iterate with JavaScript For Loops

You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop 
because it runs for a specific number of times.

For loops are declared with three optional expressions separated 
by semicolons:

for (a; b; c), where a is the intialization statement, b is the condition 
statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. 
It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration 
and will continue as long as it evaluates to true. When the condition is false 
at the start of the iteration, the loop will stop executing. This means if the 
condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the 
next condition check and is usually used to increment or decrement your loop 
counter.

In the following example we initialize with i = 0 and iterate while our condition 
i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final 
expression.
*/

let basicLoop = [];
for(let i = 0; i < 5; i++){
    basicLoop.push(i);
}
console.log(basicLoop);
// returns [0, 1, 2, 3, 4];

/*Use a for loop to push the values 1 through 5 onto myArr
// Setup
var myArray = [];

// Only change code below this line*/

let myArr = [];
for(let i = 1; i <= 5; i++){
    myArr.push(i);
}
console.log(myArr);

/*      Iterate Odd Numbers With a For Loop

For loops don't have to iterate one at a time. By changing our 
final-expression, 
we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 
each loop with i += 2.

*/
let anArray = [];
for(let i = 0; i < 10; i += 2) {
    anArray.push(i)
}
console.log(anArray);
/*ourArray will now contain [0,2,4,6,8]. Let's change our initialization 
so we can count by odd numbers.

Push the odd numbers from 1 through 9 to myArray using a for loop.

*/

let oddArray = [];
for (let i = 1; i < 10; i += 2) {
    oddArray.push(i)
}
console.log(oddArray);

/*      Count Backwards With a For Loop

A for loop can also count backwards, so long as we can define the right
 conditions.

In order to decrement by two each iteration, we'll need to change our 
initialization, 
condition, and final expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each 
loop with i -= 2.
*/
let countBackWords = [];
for(let i = 10; i > 0; i -=2){
    countBackWords.push(i)
}
console.log(countBackWords);

/*ourArray will now contain [10,8,6,4,2]. Let's change our initialization 
and final expression so we can count backwards by twos to create an array 
of descending odd numbers.

Push the odd numbers from 9 through 1 to myArray using a for loop.
*/

let descendingOdds = [];
for(let i = 9; i > 0; i -=2){
    descendingOdds.push(i);
}
console.log(descendingOdds);

/*  Iterate Through an Array with a For Loop

A common task in JavaScript is to iterate through the contents of an array. 
One way to do that is with a for loop. This code will output each element 
of the array arr to the console:*/

let iArray = [10, 9, 8, 7, 6];

for(let i = 0; i < iArray.length; i++){
    console.log(iArray[i]);
}

/*Remember that arrays have zero-based indexing, which means the last index 
of the array is length - 1. Our condition for this loop is i < arr.length, which stops 
the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when 
i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, 
and the loop terminates because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to add the value of each element 
of the myArr array to total.

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
*/
let myArray1 = [2, 3, 4, 5, 6];
let total = 0;
for(let i = 0; i < myArray1.length; i++){
    total += myArray1[i];
}
console.log(total);

/*      Nesting For Loops
If you have a multi-dimensional array, you can use the same logic 
as the prior waypoint to loop through both the array and any sub-arrays. 

Here is an example:*/

let nestedArrays = [[1, 2], [3, 4], [5, 6]];
for(let i = 0; i < nestedArrays.length; i++){
    for(let j = 0; j < nestedArrays[i].length; j++){
        console.log(nestedArrays[i][j]);
    }
}

/*This outputs each sub-element in arr one at a time. Note that for the 
inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

Modify function multiplyAll so that it returns the product of all the numbers 
in the sub-arrays of arr.

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);*/

function multiplyAll(arr) {
    let product = 1;
    for(let i = 0; i <arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

/*          Iterate with JavaScript Do...While Loops

The next type of loop you will learn is called a do...while loop. 
It is called a do...while loop because it will first do one pass of the 
code inside the loop no matter what, and then continue to run the loop 
while the specified condition evaluates to true.*/

let ourArr = [];
let a = 0;
do {
    ourArr.push(a);
    a++;
} while(a < 5);
console.log(ourArr);
/*The example above behaves similar to other types of loops, and the resulting 
array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different 
from other loops is how it behaves when the condition fails on the first check. 
Let's see this in action: Here is a regular while loop that will run the code in the 
loop as long as i < 5:
*/

let ourArr2 = [];
let c = 5;
while(c < 5){
    ourArr2.push(b)
    i++
}
console.log(ourArr2);

/*In this example, we initialize the value of ourArr2 to an empty array and the value of c to 5. 
When we execute the while loop, the condition evaluates to false because c is not less than 5, 
so we do not execute the code inside the loop. The result is that ourArray will end up with no 
values added to it, and it will still look like [] when all of the code in the example above has 
completed running. Now, take a look at a do...while loop:*/

let ourArr3 = [];
let d = 5;
 do{
    ourArr3.push(d);
    d++;
} while(c < 5);
console.log(ourArr3);

/*In this case, we initialize the value of d to 5, just like we did with the while loop. 
When we get to the next line, there is no condition to evaluate, so we go to the code 
inside the curly braces and execute it. We will add a single element to the array and 
then increment i before we get to the condition check. When we finally evaluate the 
condition d < 5 on the last line, we see that d is now 6, which fails the conditional check, 
so we exit the loop and are done. 

At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop 
ensures that the code inside the loop will run at least once. Let's try getting a do...while loop 
to work by pushing values to an array.

Q) Change the while loop in the code to a do...while loop so the loop will push only the 
number 10 to myArray, and i will be equal to 11 when your code has finished running.

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}*/

let doArray = [];
let e = 10;
do {
    doArray.push(e);
    e++
} while(e < 10);
console.log(doArray);

/*      Replace Loops using Recursion

Recursion is the concept that a function can be expressed in terms of itself. 
To help understand this, start by thinking about the following task: multiply the first n elements 
of an array to create the product of those elements. Using a for loop, you could do this:*/

function multiply(arr, n) {
    let product = 1;
    for(let i = 0; i < n; i++){
        product *=  arr[i];
    }
    return product;
}

/* However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
That means you can rewrite multiply in terms of itself and never need to use a loop.*/

function multi(arr, n){
    if (n <= 0){
        return 1;
    }
    else {
        return multi(arr, n-1) * arr[n-1];
    }
}

/*The recursive version of multiply breaks down like this. In the base case, 
where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. 
That function call is evaluated in the same way, calling multiply again until 
n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}

*/

function sum(arr, n) {
    if (n === 0) {
        return 0;
    }
    else {
        return sum(arr, n -1) + arr[n - 1];
    }
}
console.log(sum([2, 3, 4], 1))// 2
console.log(sum([2, 3, 4, 5], 3));// 9

/*          Profile Lookup

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.



// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

lookUpProfile("Akira", "likes");*/

let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for(let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (prop in contacts[i]) {
                return contacts[i][prop];
            }   
            else {
                return "No such contact";
            }
        }  
    }
    return "No such contact";
}
console.log(lookUpProfile("Kristian", "lastName"));
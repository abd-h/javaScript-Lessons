/*  Use the map Method to Extract Data from an Array;

So far we have learned to use pure functions to avoid side effects in a program. 
Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered 
around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return 
a function from another function. Functions are considered first class objects in JavaScript, 
which means they can be used like any other object. They can be saved in variables, stored in 
an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. 
In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the 
results of calling the callback function on each element. 
It does this without mutating the original array.

When the callback is used, it is passed three arguments. 
1. The first argument is the current element being processed. 
2. The second is the index of that element.
3. And the third is the array upon which the map method was called.

See below for an example using the map method on the users array 
to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.
*/

const users =[
    {
        name: "John",
        age: 23
    },
    {
        name: "Amy",
        age: 24
    },
    {
        name: "CamperCat",
        age: 10
    }
];

const names = users.map((user) => user.name);
console.log(names);
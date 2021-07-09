/*
JavaScript - How to Use The Array map() Method in JavaScript

Array map() is a method included in the Array.prototype property 
which was introduced in ECMAScript 5 (ES5) and is supported in 
all modern browsers.

Map is an Iteration Method, and like other such methods – forEach(), 
filter(), reduce() etc. – it helps us iterate through a dataset, applying 
the specified actions to each element.

Basic map() usage example
Using map() allows us to iterate through all items in an array, performing 
actions on each item. The results of this activity are returned to us inside 
a new array.

For example, the following code iterates through an array of numbers and 
multiplies each number by 2:*/
const numArray = [6, 7, 15, 22, 45];
const numMultiply = numArray.map((a) => a * 2);
console.log(numMultiply);
console.log(numArray);

/*(This example uses abbreviated syntax, more complex version will be 
    exemplified below the Syntax)

In the example above, which uses the abbreviated map() syntax, numArray 
was not changed at all. The new array (numMultiply) has the same length (5)
 as the input array, and all items were manipulated in the same manner 
 (i.e. the value of each is item * 2).
...........................................................................................................

 map() vs. forEach(), filter() and reduce()
When comparing map() versus forEach(), filter(), and reduce(), it is important 
to note that while all of these methods iterate through an array, they differ in their 
return value:

    .map() returns a new array with the same length as the parent array.
    .forEach() returns undefined, preventing us from chaining methods together.
    .filter() returns an array containing items that meet a certain condition 
    (e.g. greater than 5). Given this, the filter() method may return an array with 
    the same length, an empty array, or something in between. The final length of 
    the return value depends on how many items met the required condition.
    .reduce() is used to reduce an array to a single value. For example you can use 
    reduce() to sum all of the values of the array, or to retrieve the highest value 
    in the array. Use reduce() whenever it is crucial that you work with a single 
    value built from the underlying array.
    
Syntax

The syntax of the map() method is straightforward. The method accepts 
a callback function, which takes the currentValue, index, and the return array 
as arguments, providing a new array as output:

array.map(callback function (currentValue, index, array), this.Arg)

Consider the following code:
*/
const numArr = [6, 7, 15, 22, 45];
const numMulti = numArr.map((currrentElement, index) => currrentElement * index);
console.log(numMulti);
//[0, 7,30, 66, 180]

// import React from 'react';
// export function BookList(props) {
//   const {books} = props;
//   return (
//     <section>
//       {books.map((book, idx) => {
//         return <div book={book} key={idx}></div>  
//       })}
//     </section>
//   )  
// }
/*
Introduction to looping through objects using javascript
If you have an array that is considered to be an object in javascript, 
you can’t loop through the array using map(), forEach(), or a for..of loop.

You will get errors:
*/
const items = {
    'first': new Date(),
    'second': 2,
    'third': 'test'
}
/*map() will give you TypeError: items.map is not a function:
items.map(item => {})
forEach() will give you TypeError: items.forEach is not a function:
items.forEach(item => {})
for..of will give you TypeError: items are not iterable:
for (const item of items) {}


Methods to loop through objects using javascript
for...in Loop
The most straightforward way to loop through an object's properties 
is by using the for...in statement. This method works in all modern and 
old browsers including Internet Explorer 6 and higher.

Here is an example that uses the for...in loop to iterate over an object:*/
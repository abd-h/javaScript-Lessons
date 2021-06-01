/*  Extract Matches

So far, you have only been checking if a pattern exists or not within a string. 
You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:*/

`Hello World`.match(/Hello/);
let ourStr = `Regular Expressions`;
let  ourRegex = /Expressions/g; 
let ourResult = ourStr.match(ourRegex);
console.log(ourResult);
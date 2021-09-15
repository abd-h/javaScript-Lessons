/*Create a Module ScriptPassed
JavaScript started with a small role to play on an otherwise mostly HTML web. 
Today, it’s huge, and some websites are built almost entirely with JavaScript. 
In order to make JavaScript more modular, clean, and maintainable; 

ES6 introduced a way to easily share code among JavaScript files. 
This involves exporting parts of a file for use in one or more other files, 
and importing the parts you need, where you need them. In order to take 
advantage of this functionality, you need to create a script in your HTML 
document with a type of module. 
Here’s an example:

<script type="module" src="filename.js"></script>
A script that uses this module type can now use the import and export features 
you will learn about in the upcoming challenges.

Add a script to the HTML document of type module and give it the source file of index.js

====================================================

            Use export to Share a Code BlockPassed
Imagine a file called math_functions.js that contains several functions related to 
mathematical operations. One of them is stored in a variable, add, that takes in two 
numbers and returns their sum. You want to use this function in several different JavaScript files. 
In order to share it with these other files, you first need to export it.*/

export const add = (x,y) => {
    return x + y;
}
/*The above is a common way to export a single function, but you can achieve 
the same thing like this:*/

const adD = (a, b) => {
    return a + b;
}
export {adD};
 
const multiple = (a, b) => {
    return a * b;
}

const subtruct = (a, b) => {
    return a - b;
}
/*      +++++++     
            Export
        +++++++
*/
export {multiple, subtruct};




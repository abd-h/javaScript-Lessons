/*         ++++++++++++++++++
                Using the Test Method
            ++++++++++++++++++    

Regular expressions are used in programming languages to match parts of strings. 
You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the 
following regular expression: /the/. Notice that quote marks are not required within the 
regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. 
The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
and returns true or false if your pattern finds something or not.
*/ 
let string = "Free code Camp";
let regex = /Free/
let result = regex.test(string);
console.log(result); // returns true

/*Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line*/
function regexEp(str) {
    let myRegex = /Hello/
    return myRegex.test(str)
}
console.log(regexEp("Hello World"));

/*Match Literal Strings
In the last challenge, you searched for the word Hello using the regular expression /Hello/. 
That regex searched for a literal match of the string Hello. 
Here's another example searching for a literal match of the string Kevin:*/
let testStr = "Hello my names Kevin"
let testReg = /Kevin/
result  = testReg.test(testStr)
console.log(result);//returns true

/*This test call will return true.

Any other forms of Kevin will not match. For example, the regex /Kevin/ 
will not match kevin or KEVIN.
*/
let wrongReg = /kevin/
result = wrongReg.test(testStr)
console.log(result);// This test call will return false.

/*
A future challenge will show how to match those other forms as well.

Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding 
with a literal match.*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // 
result = waldoRegex.test(waldoIsHiding);
console.log(result);
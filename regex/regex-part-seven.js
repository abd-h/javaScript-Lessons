/*      Match Whitespace

The challenges so far have covered matching letters of the alphabet and numbers. 
You can also match the whitespace or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not only 
matches whitespace, but also carriage return, tab, form feed, and new line characters. 
You can think of it as similar to the character class [ \r\t\f\n\v].
*/
let whiteSpace =  "Whitespace. Whitespace everywhere";
let wSpaceRegex = /\s/g;
console.log(whiteSpace.match(wSpaceRegex));
/*This match call would return [" ", " "].

Change the regex countWhiteSpace to look for multiple whitespace characters 
in a string.
*/
let sample = "Whitespace is important in separating words";
let countWhiteSpaceRegex = /\s/g;
let sampleResult = sample.match(countWhiteSpaceRegex);
console.log(sampleResult);

//
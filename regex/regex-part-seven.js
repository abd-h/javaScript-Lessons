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

/*      Match Non-Whitespace Characters

You learned about searching for whitespace using \s, with a lowercase s. 
You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not
 match whitespace, carriage return, tab, form feed, and new line characters. 
 You can think of it being similar to the character class [^ \r\t\f\n\v].

*/

let whiteSpaceOne = "Whitespace. Whitespace Everywhere!";
let nonWhitespace = /\S/g;
console.log(whiteSpaceOne.match(nonWhitespace).length);
/*The value returned by the .length method would be 32.

Change the regex countNonWhiteSpace to look for multiple non-whitespace characters 
in a string.*/

let nonSample = "Whitespace is important in separating words";
let nonsampleRegex = /\S/g
console.log(nonSample.match(nonsampleRegex));

/*      Specify Upper and Lower Number of Matches

Recall that you use the plus sign + to look for one or more characters 
and the asterisk * to look for zero or more characters. 

These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. 
Quantity specifiers are used with curly brackets ({ and }). 

You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the 
string ah, your regex would be /a{3,5}h/.
*/
let A4 = "aaaah";
let A2 = "aah";
let multiplyRegex = /a{3,5}h/
console.log(multiplyRegex.test(A4));
console.log(multiplyRegex.test(A2));
/*The first test call would return true, while the second would return false.

Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
*/
let oPhrase = "Ohhh no";
let ohRegex = /(Oh{3,6})\sno/g;
console.log(ohRegex.test(oPhrase));// returns true;
console.log(oPhrase.match(ohRegex));
// returns ["Ohhh no"]

/*      Specify Only the Lower Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers 
using curly brackets. Sometimes you only want to specify the lower number of 
patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, 
your regex would be /ha{3,}h/.
*/
let a4 = "haaaah";
let a2 = "haah";
let a100 = "h" +  "a".repeat(100) + "h";
let multipleRegex = /ha{3,}h/;
console.log(multipleRegex.test(a4));
console.log(multipleRegex.test(a2));
console.log(multipleRegex.test(a100));

/*In order, the three test calls would return true, false, and true.

Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
*/
let haStr = "Hazzzza";
let haRegex = /Haz{4,}a/;
let haResult = haRegex.test(haStr)
console.log(haResult);

/*      Specify Exact Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. 
Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.*/

let aA4 = "haah";
let aA2 = "haaah";
let aA100 = "h" +  "a".repeat(100) + "h";
let hahRegex = /ha{3}h/;
console.log(hahRegex.test(aA4)); // returns false
console.log(hahRegex.test(aA100));// returns false
console.log(hahRegex.test(aA2)); // returnstrue

/*Change the regex timRegex to match the word Timber only when it has four letter m's.*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
console.log(timRegex.test(timStr));
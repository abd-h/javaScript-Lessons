/*Find One or More Criminals in a Hunt

Time to pause and test your new regex writing skills. A group of criminals 
escaped from jail and ran away, but you don't know how many. However, 
you do know that they stay close together when they are around other people. 
You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. 
It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

But it does not find matches in the following strings since there are no 
letter z characters:

""
"ABC"
"abcabc"

Write a greedy regex that finds one or more criminals within a group 
of other people. A criminal is represented by the capital letter C.

let reCriminals = /./; // Change this line
*/
let c = "P6P2P7P4P5CCCCCP3P1";
let reCriminals = /C+/;
let cResult = c.match(reCriminals);
console.log(cResult);
// returns "CCCCC"

/*      Match Beginning String PatternsPassed
Prior challenges showed that regular expressions can be used to look for a number of matches. 
They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set 
to create a negated character set in the form [^thingsThatWillNotBeMatched]. 

Outside of a character set, the caret is used to search for patterns at the beginning of strings.

*/

let firstStr = "Ricky is the first and can be found.";
let firstRegex = /^Ricky/;
let firstResult = firstStr.match(firstRegex);
console.log(firstRegex.test(firstStr));// returns true
console.log(firstResult);

let noFirstStr = "You can't find Ricky now";
console.log(noFirstStr.match(firstRegex));
console.log(firstRegex.test(noFirstStr));// returns false

/*Use the caret character in a regex to find Cal only in the beginning 
of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let calResult = calRegex.test(rickyAndCal);
let callResult = rickyAndCal.match(calRegex)
console.log(calResult);
console.log(callResult.slice());// ["Cal"]

/*      Match Ending String Patterns

In the last challenge, you learned to use the caret character to search for 
patterns at the beginning of strings. There is also a way to search for patterns 
at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.
*/

let endingStr = "This is never ending story";
let storyRegex = /story$/;
let storyResult = storyRegex.test(endingStr);
console.log(storyResult); // returns true

let notEndingStr = "sometimes a story will have to end";
console.log(storyRegex.test(notEndingStr)); //returns false;

/*Use the anchor character ($) to match the string caboose at the end of the string 
caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let cabooseResult = lastRegex.test(caboose);
console.log(cabooseResult);

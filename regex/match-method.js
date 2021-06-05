/*  Extract Matches

So far, you have only been checking if a pattern exists or not within a string. 
You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the 
regex inside the parentheses.

Here's an example:*/

`Hello World`.match(/Hello/);
let ourStr = `Regular Expressions`;
let  ourRegex = /Expressions/g; 
let ourResult = ourStr.match(ourRegex);
console.log(ourResult);

/*Here the first match would return ["Hello"] and the second would 
return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you 
have been using thus far:
*/
'string'.match(/regex/);
/regex/.test('strng');

/*Q) Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/g;
let codingResult = extractStr.match(codingRegex);
console.log(codingResult);


/*Find More Than the First MatchPassed
So far, you have only been able to extract or search a pattern once.*/

let testStr = "Repeat, Repeat, Repeat";
let ourRegex1 = /Repeat/i;
let ourRegex2 = /Repeat/gi;
let repeatResult = testStr.match(ourRegex1);
let repeatResult1 = testStr.match(ourRegex2);
console.log(repeatResult.slice());
// returns ["Repeat"]
console.log(repeatResult1);

/*And here match returns the value ["Repeat", "Repeat", "Repeat"]

Q) Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
*/
 let twinkleStar =  "Twinkle, twinkle, little star";
 let starRegex = /twinkle/gi;
 let twinkleResult = twinkleStar.match(starRegex);
 console.log(twinkleResult);

 /*     Match Anything with Wildcard Period

Sometimes you won't (or don't need to) know the exact 
characters in your patterns. Thinking of all words that match, 
say, a misspelling would take a long time. Luckily, 
you can save time using the wildcard character: .

The wildcard character . will match any one character. 
The wildcard is also called dot and period. 

You can use the wildcard character just like any other character in the regex. 
For example, 
if you wanted to match hug, huh, hut, and hum, you can use 
the regex /hu./ to match all four words.*/

let humStr =  "I'll hum a song";
let hugStr = "I'll hug a bear";
let huRegex = /hu./;
let humResult = humStr.match(huRegex);
console.log(huRegex.test(humStr)); // returns true
console.log(huRegex.test(hugStr));// returns true;
console.log(humResult);

/* Complete the regex unRegex so that it matches the strings 
run, sun, fun, pun, nun, and bun. 
Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);*/

let exampleStr = "Let's have bun with reglar expresions";
let unRegex = /.un/; 
let unResult = exampleStr.match(unRegex);
console.log(unResult);







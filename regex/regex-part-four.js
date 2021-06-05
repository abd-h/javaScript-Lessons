/*  Match Single Characters Not Specified

So far, you have created a set of characters that you want to match, 
but you could also create a set of characters that you do not want to match. 

These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) 
after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. 

Note that characters like ., !, [, @, / and white space are matched - 
he negated vowel character set only excludes the vowel characters.
    
Q) Create a single regex that matches all characters that are not a number or a vowel. 
Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line*/

let miceQuote= "3 blind mice.";
let miceRegex = /[^aeiou0-9]/gi
let miceResult = miceQuote.match(miceRegex);
console.log(miceResult.length);

/*Match Characters that Occur One or More Times

Sometimes, you need to match a character (or group of characters) that appears 
one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or 
pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, 
it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and 
return ["a", "a"] because the a characters are not in a row - there is a b between them. 
Finally, since there is no a in the string bcd, it wouldn't find a match.

You want to find matches when the letter s occurs one or more times in Mississippi. 
Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);*/

let defficultSpelling = "Mississipi";
let dRegex = /s+/gi
let resultD = defficultSpelling.match(dRegex);
console.log(resultD);

/*   Match Characters that Occur Zero or More Times

The last challenge used the plus + sign to look for characters that occur one or more times. 
There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

*/
let soccerWord = "gooooooooal";
let gphrase = "gut feeling";
let ophrase = "Over the moon";
let  goRegex = /go*/;
let resultG = soccerWord.match(goRegex);
console.log(resultG);
console.log(gphrase.match(goRegex).slice());
console.log(ophrase.match(goRegex));

/*In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! 
behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase 
A character immediately followed by zero or more lowercase a characters in chewieQuote. 
Your regex does not need flags or character classes, and it should not match any of the other quotes.*/
 
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult[0]);
// returns Aaaaaaaaaaaaaaaa

/*   Find Characters with Lazy Matching

In regular expressions, a greedy match finds the longest possible 
part of a string that fits the regex pattern and returns it as a match. 

The alternative is called a lazy match, which finds the smallest possible 
part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically 
a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. 
It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" 
matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern 
matching an HTML string with regular expressions is completely fine.

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text 
"<h1>Winter is coming</h1>". Remember the wildcard . in a regular 
expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);*/

let text = "<h1>Winter is coming</h1>";
let tRegex = /<.*?>/
let tResult = text.match(tRegex);
console.log(tResult);

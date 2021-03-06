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

/*  Check for All or None

Sometimes the patterns you want to search for may have parts of it that may 
or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. 

This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.*/

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));
/*Both uses of the test method would return true.

Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

*/

let favWord = "favorite";
let regFav = /favou?rite/;
console.log(regFav.test(favWord));//returns true

/*      Positive and Negative Lookahead

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check 
for patterns further along. This can be useful when you want to search for multiple 
patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.*/

let quit = " qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let noquitRegex= /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(noquitRegex));
/* Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string. 
Here is a (naively) simple password checker that looks for between 3 and 6 characters 
and at least one number:
*/
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/
console.log(checkPass.test(password));// true

/*Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, 
and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
*/

let sampleWord = "astrounout";
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/;
let pwResult = pwRegex.test(sampleWord);
console.log(pwResult);// returns false

/*      Check For Mixed Grouping of Characters

Sometimes we want to check for groups of characters using 
a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, 
you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string 
by using the test() method.*/

let pumpkinStr = "Pumpkin";
let penguinStr = "Penguin";
let pumRegex = /P(umpk|engu)in/g;
let pumResult = pumRegex.test(penguinStr);
console.log(pumResult);

/*  Q) Fix the regex so that it checks for the names of Franklin Roosevelt 
or Eleanor Roosevelt in a case sensitive manner and it should make concessions 
for middle names.

Then fix the code so that the regex that you have created is checked against myString 
and either true or false is returned depending on whether the regex matches.

let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works*/

let myNewString = "Eleanor Roosevelt";
let myNewString2 = "Franklin D Roosevelt";
let myRegex = /(Franklin(.+)|Eleanor)(Roosevelt)/i;
//let myRegex = /(Franklin | Eleanor).*Roosevelt/; this works as well.
let myResult1 = myRegex.test(myNewString2) 
console.log(myResult1); //returns true

/*  Reuse Patterns Using Capture Groups

Some patterns you search for will occur multiple times in a string. 
It is wasteful to manually repeat that regex. There is a better way 
to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using capture groups. 
Parentheses, ( and ), are used to find repeat substrings. You put the regex 
of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and 
then a number. This number starts at 1 and increases with each additional capture 
group you use. An example would be \1 to match the first group.

The example below matches any word that occurs twice separated by a space:
*/
let repeatedStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
console.log(repeatRegex.test(repeatedStr));
console.log(repeatedStr.match(repeatRegex));

/*The test call would return true, and the match call would return ["regex regex", "regex"].

Using the .match() method on a string will return an array with the string it matches, 
along with its capture group.

Q) Use capture groups in reRegex to match a string that consists of only 
the same number repeated exactly three times separated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let reResult = reRegex.test(repeatNum);
console.log(reResult);
console.log(repeatNum.match(reRegex));

/*      Use Capture Groups to Search and Replace

Searching is useful. However, you can make searching even more powerful 
when it also changes (or replaces) the text you match.

You can search and replace text in a string using .replace() on a string. 
The inputs for .replace() is first the regex pattern you want to search for. 
The second parameter is the string to replace the match or a function to do something.*/

let  wrongText = "The sky is silver";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));

/*The replace call would return the string The sky is blue..

You can also access capture groups in the replacement string with dollar signs ($).*/

console.log("Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1"));
/*The replace call would return the string Camp Code.

Q) Write a regex fixRegex using three capture groups that will search for 
each word in the string one two three. Then update the replaceText 
variable to replace one two three with the string three two one and assign 
the result to the result variable. Make sure you are utilizing capture groups 
in the replacement string using the dollar sign ($) syntax.

let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
*/

let str = "one two three";
let fixRegex  = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let strResult = str.replace(fixRegex, replaceText)
console.log(strResult);// returns three two one;

/*      Remove Whitespace from Start and End

Sometimes whitespace characters around strings are not wanted but are there. 
Typical processing of strings is to remove the whitespace at the start and end of it.

Q) Write a regex and use the appropriate string methods to remove whitespace 
at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line*/

let hello = " Hello, World! ";
let wsRegex = /^\s|.(\w+)\s(\w+)|[\s]+$/g;
let wsResult = hello.replace(wsRegex, "");
console.log(wsResult);
// returns Hello, World!


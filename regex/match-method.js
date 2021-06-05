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

/* Match Single Character with Multiple Possibilities

You learned how to match literal patterns (/literal/) and wildcard character (/./). 
Those are the extremes of regular expressions, where one finds exact matches and 
the other matches everything. 

There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. 
Character classes allow you to define a group of characters you wish to match 
by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. 
You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will 
only match the characters a, i, or u.

*/

let bagStr = "bag";
let bigStr = "big";
let bugStr = "bug";
let bogStr = "bog";
let bagRegex = /b[aiu]g/g
console.log(bagStr.match(bagRegex));
console.log(bigStr.match(bagRegex));
console.log(bugStr.match(bagRegex));
console.log(bogStr.match(bagRegex));
//In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

/*Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex 
to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[a-z]gi/; // Change this line
let result = vowelRegex; // Change this line*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi
let vowelResult = quoteSample.match(vowelRegex);
console.log(vowelResult);

/*      Match Letters of the Alphabet

You saw how you can use character sets to specify a group of characters to match, 
but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].*/
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let cbmRegex = /[a-e]at/;
console.log(catStr.match(cbmRegex));
console.log(batStr.match(cbmRegex));
console.log(matStr.match(cbmRegex));
//In order, the three match calls would return the values ["cat"], ["bat"], and null.

/*Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line*/

let qSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let alphabetResult = qSample.match(alphabetRegex);
console.log(alphabetResult);

/*  Match Numbers and Letters of the Alphabet

Using the hyphen (-) to match a range of characters is not limited to letters. 
It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set.*/
let jennyStr = "Jenny8675309";
let jennyRegex = /[a-z0-9]/gi;
let jennyResult = jennyStr.match(jennyRegex);
console.log(jennyResult);

/*Create a single regex that matches a range of letters between h and s, and 
a range of numbers between 2 and 6. Remember to include the appropriate 
flags in the regex.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
*/

let quoteSampleA = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi;
let myResult = quoteSampleA.match(myRegex1);
console.log(myResult);

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

/*Match All Letters and Numbers

Using character classes, you were able to search for all letters of the alphabet 
with [a-z]. This kind of character class is common enough that there is a 
shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. 
This shortcut is equal to [A-Za-z0-9_]. 

This character class matches upper and lowercase letters plus numbers. 
Note, this character class also includes the underscore character (_).*/

let numbersBe = 42;
let varNamesBe = "Important_var";
let longHandRegex = /[a-zA-Z0-9_]+/ ;
let shortHandBe = /\w/;
console.log(shortHandBe.test(numbersBe));
console.log(longHandRegex.test(numbersBe));
console.log(shortHandBe.test(varNamesBe));
console.log(longHandRegex.test(varNamesBe));

/*All four of these test calls would return true.

 These shortcut character classes are also known as shorthand character classes.

 Use the shorthand character class \w to count the number of alphanumeric 
 characters in various quotes and strings.
 
 let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 =*/

let qStr  = "The five boxing wizards jump quickly.";
let alphRegex = /[\w]/g;
let countStr = qStr.match(alphRegex);
console.log(countStr.length); // returns 31

/*  Match Everything But Letters and Numbers

You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. 
A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].*/
let sentenceBe = "Coding!";
let numb = "43%";
let shorthand = /\W/g;
console.log(numb.match(shorthand));
console.log(sentenceBe.match(shorthand));

/*Use the shorthand character class \W to count the number of non-alphanumeric 
characters in various quotes and strings.*/

let sentenceBe1 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
console.log(sentenceBe1.match(nonAlphabetRegex).length); 
/* returns 6

        Match All Numbers
You've learned shortcuts for common string patterns like alphanumerics. 
Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. 
This is equal to the character class [0-9], which looks for a single character 
of any number between zero and nine.

Use the shorthand character class \d to count how many digits are in movie titles. 
Written out numbers ("six" instead of 6) do not count.
*/

let movieName = "2001: A Space Oddyssey";
let mRegex = /[\d]/g;
let mResult = movieName.match(mRegex);
console.log(mResult.length);// returns 4

/*      Match All Non-Numbers
The last challenge showed how to search for digits using the shortcut \d with a lowercase d. 
You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], 
which looks for a single character that is not a number between zero and nine.

Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

*/

let movieNameD = "2001: A Space Oddyssey";
let mRegexD = /[\D]/g;
let mResultD = movieNameD.match(mRegexD);
console.log(mResultD.length);// returns 18;

/*Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique 
identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that 
users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

1. The only numbers in the username have to be at the end. There can be zero 
or more of them at the end. 2.2.2/2. Username cannot start with the number.

3. Username letters can be lowercase and uppercase.

4. Usernames have to be at least two characters long. A two-character username 
can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);*/

let username = "RegexGuru";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
//userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;   this works as well
let userResult = userCheck.test(username);
console.log(username.match(userCheck));
console.log(userResult);

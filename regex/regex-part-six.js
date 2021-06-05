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

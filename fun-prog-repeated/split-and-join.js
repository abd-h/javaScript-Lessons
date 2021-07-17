/**
            Split a String into an Array Using the split Method

The split method splits a string into an array of strings. 
It takes an argument for the delimiter, which can be a character 
to use to break up the string or a regular expression. 

For example, if the delimiter is a space, you get an array of words, 
and if the delimiter is an empty string, you get an array of each character 
in the string.

Here are two examples that split one string by spaces, 
then another by digits using a regular expression:
 */
let str = "Hello World";
let bySpace = str.split(" ");
console.log(bySpace);//["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

let otherString = "How9are7you2today";
let byDigits = otherString.split(/\d/);
console.log(byDigits);

/**
    bySpace would have the value ["Hello", "World"] and byDigits would have the value 
    ["How", "are", "you", "today"].

Since strings are immutable, the split method makes it easier to work with them.

        1. Challenge

Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}
splitify("Hello World,I-am code");

 */

function splitify(str) {
    return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));


/**
      Combine an Array into a String Using the join Method

The join method is used to join the elements of an array together 
to create a string. It takes an argument for the delimiter that is 
used to separate the array elements in the string.

Here's an example: */

let arr = ["Hello", "World"];
let arrStr = arr.join(" ");
console.log(arrStr);//arrStr would have a value of the string Hello World.

/**
      1. Challenge

      Use the join method (among others) inside the sentensify function to 
      make a sentence from the words in the string str. The function should 
      return a string. For example, I-like-Star-Wars would be converted to 
      I like Star Wars. For this challenge, do not use the replace method.
 */

function sentensify(str) {
  return str.split(/\W/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));

/**
 Apply Functional Programming to Convert Strings to URL Slugs

The last several challenges covered a number of useful array and string methods
 that follow functional programming principles. We've also learned about reduce, 
 which is a powerful method used to reduce problems to simpler forms. 
 
 From computing averages to sorting, any array operation can be achieved by applying it. 
 Recall that map and filter are special cases of reduce.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added 
to part of the URL for simple bookmarking purposes. For example, 
if you write a Medium post titled Stop Using Reduce, 
it's likely the URL would have some form of the title string in it (.../stop-using-reduce). 

You may have already noticed this on the freeCodeCamp site.
 
Fill in the urlSlug function so it converts a string title and returns 
the hyphenated version for the URL. You can use any of the methods 
covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces*/

function ourSlug(title) {
  return title.split(/\s/)
                  .filter((a) => a != "")
                  .join("-")
                  .toLowerCase();
                  
}


console.log(ourSlug(" Winter Is Coming"));

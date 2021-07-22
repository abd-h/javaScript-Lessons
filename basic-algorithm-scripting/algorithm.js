/**
        Basic Algorithm Scripting
An algorithm is a series of step-by-step instructions that describe how to do something.

To write an effective algorithm, it helps to break a problem down into smaller parts, and 
think carefully about how to solve each part with code.

In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms 
that do everything from converting temperatures to handling complex 2D arrays.

    * Challenge 1
    Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, 
plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit 
already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);

 */

function convertToF(celius){
    let fahrenheit = (celius * 9/5) + 32;
    return fahrenheit;
}
console.log(convertToF(30));

/**
 * Challenge 2
 
            Reverse a StringPassed
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

function reverseString(str) {
  return str;
}

reverseString("hello");
 */
function reverseString(str){
    return str.split("")
                .reverse()
                .join("");
}
console.log(reverseString("Hello"));

/**
 * Challenge 3
    Factorialize a NumberPassed
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Factorialize a NumberPassed
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of 
all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  return num;
}

factorialize(5);
 */

function factorialize(n){
  if(n < 1){
    return 1;
  }
  else {
    return factorialize(n -1) * n;
  }
}
console.log(factorialize(5));

/**
Challenge 3

Find the Longest Word in a StringPassed
Return the length of the longest word in the provided sentence.

Your response should be a number


function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
 */

//option 1.  using reduce methode 
function findLongestWordLength(str){
let s = str.split(" ").reduce((a,b) => (b.length > a.length)? b :a,  "");
return s.length;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

//Option 2 using sort methode
function longestWord(str){
  let s = str.split(" ").sort((a, b) => b.length - a.length);
  return s[0].length;
}
console.log(
  longestWord("The quick brown fox jumped ssssssss over the lazy dog")
);

// option 3 Using Math.max() methode

function longestWordLength(str){
    const longestWord = str.split(" ");
  let a = Math.max([...longestWord].length);
  return a;
}
console.log(
    longestWordLength("The quick brown fox jumped over the lazy dog")
);

/*
      Challenge 4

Return Largest Numbers in ArraysPassed
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access 
each member with array syntax arr[i]. 

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*/

function largestOfFour(arr){
  return arr.map((a) => a.reduce((a,b) =>(a< b)?b: a))
}
console.log(
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


/*
Challeng 5
Confirm the EndingPassed
Check if a string (first argument, str) ends with the given target string 
(second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the 
JavaScript substring methods instead. 

function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");*/

function confirmEnding(str,target) {
  return str.substr(-target.length) === target;
 
}
console.log(confirmEnding("Bastian", "n"));

/*
      Challenge 5
Repeat a String Repeat a StringPassed
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of 
this challenge, do not use the built-in .repeat() method.       

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);*/

function repeatStringNumTimes(str, n){
  if (n < 1){
    return "";
  }
  else {
    return repeatStringNumTimes(str, n-1) + str;
  }
}
console.log(repeatStringNumTimes("abc", 3));

/*
      Challenge 6
      
Truncate a StringPassed
Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.      

function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);*/

function truncateString(str, num) {
  let a = "";
  if(str.length > num) {
    return a += str.slice(0, num).concat("...");
  }
  else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


/*

      Challenge 7

Finders KeepersPassed
Create a function that looks through an array arr and returns the first element in it 
that passes a 'truth test'. 

This means that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
 */

function findElement(arr, func){
  let num = arr.filter((x) => (func(x))? true :undefined);
  return num[0];
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

/*
      Challenge 8 
      
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

function booWho(bool) {
  return bool;
}

booWho(null);      */

function booWho(bool) {
  return typeof bool === "boolean";
  // return bool === true || bool === false
}
console.log(booWho(false));
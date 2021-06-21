/* Generate Random Fractions with JavaScript

Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random 
decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() 
can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls 
will be resolved before the return executes, so we can return the value of the 
Math.random() function.

Change randomFraction to return a random number instead of returning 0.

function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
*/
function randomFraction(){
    return Math.random();
}
console.log(randomFraction());
//returns 0.24841069482091616;

/*      Generate Random Whole Numbers with JavaScriptPassed
It's great that we can generate random decimal numbers, but it's even more 
useful if we use it to generate random whole numbers.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest 
whole number.

Remember that Math.random() can never quite return a 1 and, because we're 
rounding down, it's impossible to actually get 20. This technique will give us a 
whole number between 0 and 19.

Putting everything together, this is what our code looks like:*/

let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);
/*We are calling Math.random(), multiplying the result by 20, then passing the value 
to Math.floor() function to round the value down to the nearest whole number.

Use this technique to generate and return a random whole number between 0 and 9.

The result of randomWholeNum should be a whole number.

You should use Math.random to generate a random number.

You should have multiplied the result of Math.random by 10 to make it a number that is 
between zero and nine.

You should use Math.floor to remove the decimal part of the number.

function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
*/
function randomWholeNum(){
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
// returns random number everytime between 0 - 9

/*      Generate Random Whole Numbers within a Range

Instead of generating a random whole number between zero and a given number 
like we did before, we can generate a random whole number that falls within a range 
of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what 
this code is doing:

Math.floor(Math.random() * (max - min + 1) + min)


Q) Create a function called randomRange that takes a range myMin and myMax 
and returns a random whole number that's greater than or equal to myMin, and is 
less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
  // Only change code below this line
  return 0;
  // Only change code above this line
}

*/

function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(2, 6));
// returns range of between 2-5 but not 6

/*Use the parseInt Function
The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");
The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {

}

convertToInteger("56");*/

function convertToInteger1(str){
  return parseInt(str)
}
console.log(convertToInteger1("56"));

/*Use the parseInt Function with a Radix
The parseInt() function parses a string and returns an integer. 
It takes a second argument for the radix, which specifies the base of the number in the string. 
The radix can be an integer between 2 and 36.

The function call looks like:
*/

let  a = parseInt("11", 5);
console.log(a);

/*The radix variable says that 11 is in the binary system, or base 2. 
This example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts a binary 
number to an integer and returns it.

function convertToInteger(str) {

}

convertToInteger("10011");
*/

function convertToInteger(str){
    return parseInt(str, 2);
}
console.log(convertToInteger("10011"));
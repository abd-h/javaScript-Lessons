/*      Understanding Boolean Values

Another data type is the Boolean. Booleans may only be one of two values: true or false. 
They are basically little on-off switches, where true is on and false is off. 
These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" 
are not Boolean and have no special meaning in JavaScript.

Q) Modify the welcomeToBooleans function so that it returns true 
instead of false when the run button is clicked.
..................................................................................*/
function welcometomBooleans(){
    return true;
}
console.log( welcometomBooleans());

/*Use Conditional Logic with If Statements
If statements are used to make decisions in code. The keyword if tells JavaScript 
to execute the code in the curly braces under certain conditions, defined in the parentheses. 
These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. 
When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
*/
function testFunc(condition) {
    if (condition) {
        return "It was true"
    }
    return  "It was false"
}
console.log(testFunc(true));
console.log(testFunc(false));

/*testFunc(true) returns the string It was true, and testFunc(false) returns the string It was false.

When testFunc is called with a value of true, the if statement evaluates myCondition to see if it is true or 
not. Since it is true, the function returns It was true. When we call testFunc with a value of false, 
myCondition is not true and the statement in the curly braces is not executed and the function returns It was 
false.


Q) Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true 
and return No, that was false otherwise.
......................................................................
*/
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

/*Comparison with the Equality Operator
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns 
true if they're equivalent or false if they are not. Note that equality is different from assignment (=), 
which assigns the value on the right of the operator to a variable on the left.

*/

function equalityTest(myVal) {
    if (myVal == 10){
        return "Equal";
    }
    return "Not equ"
}
console.log(equalityTest(10));

/*If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, 
and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to 
compare two different data types (for example, numbers and strings), it must convert one type to another. This 
is known as Type Coercion. Once it does, however, it can compare terms as follows:*/

1   ==  1
1   ==  2
1   == '1'
"3" ==  3;

/*In order, these expressions would evaluate to true, false, true, and true.

Add the equality operator to the indicated line so that the function will return 
the string Equal when val is equivalent to 12.

// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
............................................................
*/

//Setup
function testEquality(val) {
    if (val == "12"){
        return "Equal";
    }
    return "False";
}

console.log(testEquality(12));

/*      Comparison with the Strict Equality Operator
Strict equality (===) is the counterpart to the equality operator (==). However, 
unlike the equality operator, which attempts to convert both values being compared t
o a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and 
the strict equality operator will return false.

Examples
*/
3 === 3 // returns true
3 ==="3" // returns false
/*In the second example, 3 is a Number type and '3' is a String type.

Q) Use the strict equality operator in the if statement so the function will return 
the string Equal when val is strictly equal to 7
............................................
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);*/

// Setup
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Unequal"
}
console.log(testStrict(10));

/*Practice comparing different values
In the last two challenges, we learned about the equality operator (==) 
and the strict equality operator (===). Let's do a quick review and practice 
using these operators some more.

If the values being compared are not of the same type, the equality operator 
will perform a type conversion, and then evaluate the values. However, the 
strict equality operator will compare both the data type and value as-is, without 
converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 
3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, 
as follows: */
typeof 3;
typeof "3"; 
/*typeof 3 returns the string number, and typeof '3' returns the string string.

Q) The compareEquality function in the editor compares two values using the equality operator. 
Modify the function so that it returns the string Equal only when the values are strictly equal.

compareEquality(10, "10") should return the string Not Equal

compareEquality("20", 20) should return the string Not Equal

You should use the === operator
......................................................................
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");*/

// Setup

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal"
}
console.log(compareEquality(10, "10"));

/*      Comparison with the Inequality Operator

The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.*/
1 != 2
1!= "1"
1 != '1' 
1 != true
0 != false

/*In order, these expressions would evaluate to true, false, false, false, and false.

Q)Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99
........................................................................................
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);*/

function testNotEqual(val){
    if (val != 99){
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

/*          Comparison with the Strict Inequality Operator

The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples */

3 !== 3
3 !== "3"
4 !== 3

/*In order, these expressions would evaluate to false, true, and true.

Q) Add the strict inequality operator to the if statement so the function will 
return the string Not Equal when val is not strictly equal to 17
.............................................................................
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);*/

function testStrictNotEqual(val){
    if (val !== 17) {
        return "Not Equal";
    } 
    return "Equal";
}
console.log(testStrictNotEqual(10));

/*  Comparison with the Greater Than Operator

The greater than operator (>) compares the values of two numbers. 
If the number to the left is greater than the number to the right, it returns true. 
Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types 
of values while comparing.

Examples*/

5 > 3;
7 > '3'
2 > 3
'1' > 9

/*In order, these expressions would evaluate to true, true, false, and false.

Q) Add the greater than operator to the indicated lines so that the return statements make sense.
..................................................................................

function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);*/

function testGreaterThan(val){
    if(val >100){
        return "over 100";
    }
    if (val > 10){
        return "over 10";
    }
    return "10 or under"
}

/*      Comparison with the Less Than Operator

The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.
*/
 2 < 5
 '3' < 7
 5 < 5
 3 < 2
 '8' < 3
 /*In order, these expressions would evaluate to true, true, false, false, and false.

Q) Add the less than operator to the indicated lines so that the return statements make sense.
....................................................................................
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);*/
function testLessThan(val) {
    if(val < 25) {
        return "Under 25";
    }
    if(val < 55) {
        return "Under 55"
    }
    return "Over 55"
}
console.log(testLessThan(10));

/*      Comparison with the Less Than Or Equal To Operator

The less than or equal to operator (<=) compares the values of two numbers. 
If the number to the left is less than or equal to the number to the right, it returns true. 
If the number on the left is greater than the number on the right, it returns false. 
Like the equality operator, the less than or equal to operator converts data types.

Examples*/
4 <= 7
'7' <= 7
5 <= 5
3 <= 2
'8' <= 4


/*In order, these expressions would evaluate to true, true, true, false, and false.

Q) Add the less than or equal to operator to the indicated lines so that the return 
statements make sense.
.........................................................................................
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);*/
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12"
    }
    if (val <= 24) {
      return "Smaller Than or Equal to 24"
    }
    return "More Than 24"
}
console.log(testLessOrEqual(10));

/*    Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. 
The logical and operator (&&) returns true if and only if the operands 
to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:
*/
function nestedIfs(num) {
  if(num < 10) {
    if(num > 5) {
    return "In between 6 to 9"
    }
    
  } 
  return "More Than 9";
}
console.log(nestedIfs(10));

//Will only return Yes if num is greater than 5 and less than 10. 
//The same logic can be written as:

function andAndAnd(val) {
  if (val >5 && val < 10) {
    return "Yes";
  }
  return "No"
}
console.log(andAndAnd(9)); // returns Yes
console.log(andAndAnd(11));// returns No

/*Q Replace the two if statements with one statement, using the && operator, 
which will return the string Yes if val is less than or equal to 50 and greater 
than or equal to 25. Otherwise, will return the string No.
............................................................................................
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

*/
function testLogicalAnd(val){
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(10));

/*    Comparisons with the Logical Or Operator
The logical or operator (||) returns true if either of the operands is true. 
Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). 
This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:*/
function logicalOr(val){
  if(val >= 10){
    return "No";
  }
  if(val <= 5) {
    return "No"
  }
  return "Yes"
}
console.log(logicalOr(6)); //returns yes
/*will return Yes only if num is between 5 and 10 (5 and 10 included). 
The same logic can be written as:*/

function logicOr(val){
  if (val <= 5 || val >= 10) {
    return "No";
  }
  return "Yes";
}

/*Combine the two if statements into one statement which returns the string Outside 
if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
...............................................................................
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);*/

function testLogicalOr(val) {
  if (val < 10 || val > 20 ) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(15));

/*  Introducing Else Statements
When a condition for an if statement is true, the block of code following it is executed. 
What about when that condition is false? Normally nothing would happen. 
With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

Q) Combine the if statements into a single if/else statement.
.............................................................................
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
*/

function testElse(val){
  var result = "";
  if(val > 5){
    result = "Bigger than 5";
  }
  else {
    result = "Less than 5";
  }
  return result;
}
console.log(testElse(4));

/*      Introducing Else If Statements
If you have multiple conditions that need to be addressed, 
you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

Q) Convert the logic to use else if statements.
  function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
...................................................................................
  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
*/
function testElseIf(val) {
  if (val > 10){
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Less than 5";
  }
  else {
    return "between 5 and 10";
  }
}
console.log(testElseIf(7));

/*Logical Order in If Else StatementsPassed
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:*/
function foo(val) {
  if(val < 1){
    return "Less than one";
  }
  else if (val < 2){
    return "Less than two";
  }
  else {
    return "Greater than or Equal to two";
  }
}

//And the second just switches the order of the statements:

function bar(val) {
  if (val < 2) {
    return "Less than two";
  }
  else if (vale < 1) {
    return "Less than one";
  }
  else {
    return "greater than or equal to two";
  }
}

//While these two functions look nearly identical if we pass a number to both we get different outputs.
console.log(foo(0.99));
console.log(bar(0.9));
/*foo(0) will return the string Less than one, and bar(0) 
will return the string Less than two.

Q)    Change the order of logic in the function so that it will return the correct statements in all cases
...................................................................
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);*/
function orderMyLogic(val){
  if (val < 5) {
    return "Less than 5";
  }
  else if (val < 10) {
    return "Less than 10";
  }
  else {
    return "Greater than or equal to 10"
  }
}
console.log(orderMyLogic(7));

/*      Chaining If Else Statements
if/else statements can be chained together for complex logic. 
Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);*/

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if(num < 15) {
    return "Medium";
  }
  else if(num <  20) {
    return "Large";
  }
  else {
    return "Huge";
  }
}
console.log(testSize(7));
//................................................................

/*  Golf Code

In the game of golf, each hole has a par, meaning, the average number of strokes 
a golfer is expected to make in order to sink the ball in the hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. 
Return the correct string according to this table which lists the strokes in order of priority; 
top (highest) to bottom (lowest):

Strokes	                          Return
1	                                  "Hole-in-one!"
<= par - 2	                  "Eagle"
par - 1	                          "Birdie"
par	                                "Par"
par + 1	                       "Bogey"
par + 2	                       "Double Bogey"
>= par + 3	               "Go Home!"
par and strokes will always be numeric and positive. 
We have added an array of all the names for your convenience.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes){
  if (strokes === 1) {
    return "Hole-in-one!";
  }
  else if (strokes <= par - 2) {
    return "Eagle";
  }
  else if (strokes === par - 1) {
    return "Birdie";
  }
  else if (strokes === par) {
    return "Par";
  }
  else if(strokes === par + 1) {
    return "Bogey";
  }
  else if (strokes === par + 2) {
    return "Double Bogey";
  }
  else if (strokes >= par + 3) {
    return "Go Home";
  }
}
console.log(golfScore(4,1));//  Hole-in-one!
console.log(golfScore(4,2));//Eagle
console.log(golfScore(5,2));// Eagle
console.log(golfScore(4,3));// Birdie
console.log(golfScore(4, 4));// par
console.log(golfScore(1,1));// Hole-in-one!
console.log(golfScore(5,5)); //par
console.log(golfScore(4,5)); // Bogey
console.log(golfScore(4,6)); // Double
console.log(golfScore(4, 7)); // Go Home
console.log(golfScore(5, 9));// Go Home

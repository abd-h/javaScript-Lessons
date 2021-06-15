/*      Understanding Boolean Values

Another data type is the Boolean. Booleans may only be one of two values: true or false. 
They are basically little on-off switches, where true is on and false is off. 
These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" 
are not Boolean and have no special meaning in JavaScript.

Modify the welcomeToBooleans function so that it returns true 
instead of false when the run button is clicked.*/
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


Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true 
and return No, that was false otherwise.

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

*/

//Setup
function testEquality(val) {
    if (val == "12"){
        return " Equal";
    }
    return "False";
}

console.log(testEquality(12));
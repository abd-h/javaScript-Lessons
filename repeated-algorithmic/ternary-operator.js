/* Use the Conditional (Ternary) Operator

The conditional operator, also called the ternary operator, can be used 
as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when 
the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:*/

function findGreater(a, b) {
    if (a > b){
        return "a is greater"
    }
    else {
        return "b is greater";
    }
}


function findGreaters(a,b) {
    return (a > b) ?"a is greater"
                : "b is greater";
}
console.log(findGreaters(3,4));

/*Use the conditional operator in the checkEqual function to check if two 
numbers are equal or not. The function should return either the string Equal 
or the string Not Equal.*/

function checkEqual(a, b) {
    return (a == b)? "Equal"
                : "Not Equal";
}
console.log(checkEqual("3",2));

/*Use Multiple Conditional (Ternary) OperatorsPassed
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
The above function can be re-written using multiple conditional operators: as shown below*/
function findGreaterOrEqual(a, b) {
    return (a === b)? "a and b are equal"
                :(a > b)? "a is greater"
                : "b is greater";
}
console.log(findGreaterOrEqual(2,6));

/*It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.*/

function checkSign(num) {
    return (num > 0)? "number is positive"
                : (num === 0)? "number is zero"
                :"number is negative";
}
console.log(checkSign(10));
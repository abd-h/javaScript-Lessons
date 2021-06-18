/*Selecting from Many Options with Switch Statements

If you have many options to choose from, use a switch statement. 
A switch statement tests a value and can have many case statements 
which define various possible values. Statements are executed from the 
first matched case value until a break is encountered.

Here is an example of a switch statement:

*/
function lowerCase(lowerCaseLetter) {
    switch (lowerCaseLetter) {
        case "a":
            console.log("A");
        break;
        case "b":
            console.log("B");
        break;
    }
}
lowerCase("a");
/*case values are tested with strict equality (===). The break tells JavaScript to 
stop executing statements. If the break is omitted, the next statement will be executed.

Q)  Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
............................................................................................................
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);*/

function caseInSwitch(val) {
    var result = "";
    switch(val){
        case 1:
            result = "alpha"
            break;
        case 2:
            result = "beta";
            break;
        case 3:
            result = "gamma";
            break;
        case 4:
            result = "delta";
            break;     
    }
    return result;
}
console.log(caseInSwitch(1));

/*Adding a Default Option in Switch Statements

In a switch statement you may not be able to specify all possible values as case statements. 
Instead, you can add the default statement which will be executed if no matching case statements are found. 
Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

*/
function addDefualt(val){
    switch(val){
        case "value1":
            return "statement 1";
            break;
        case "value2":
            return "statement2";
            break;
        default:
            return "Statement";
    }
}
console.log(addDefualt("value"));

/*Q) Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
.........................................................
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);*/

function switchOfStaff(val) {
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;            
    }
    return answer;
}
console.log(switchOfStaff("g"));

/*      Multiple Identical Options in Switch Statements

If the break statement is omitted from a switch statement's case, 
the following case statement(s) are executed until a break is encountered. 

If you have multiple inputs with the same output, you can represent them in 
a switch statement like this:*/
function manyOutputs(val) {
    var result = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            result = "1, 2 or 3";
            break;
        case 4:
            result = "4 alone";    
            break;
    }
    return result;
}
console.log(manyOutputs(1));// returns 1,2 or 3
console.log(manyOutputs(4));// 4 alone

/*Cases for 1, 2, and 3 will all produce the same result.

Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  // Only change code above this line
  return answer;
}

sequentialSizes(1);*/

function sequentialSize(val) {
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:    
        case 5:    
        case 6:
            answer = "Mid";
            break;
        case 7:        
        case 8:        
        case 9:
            answer = "High";
            break;  
    }
    return answer;
}
console.log(sequentialSize(1));

/*     Replacing If Else Chains with Switch

If you have many options to choose from, a switch statement can 
be easier to write than many chained if/else if statements. 
The following:*/
function ifElsechains(val) {
    if(val ===1){
        return "a";
    }
    else if(val === 2){
        return "b";
    }
    else {
        return "c";
    }
}

function useSwitch(val) {
    switch(val){
        case 1:
            return "a";
            break;
        case 2:
            return "b";
            break;
        default:
            return "c";                    
    }
}

/*Q)  Change the chained if/else if statements into a switch statement.
.....................................................
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);*/

function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1: 
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
console.log(chainToSwitch(7));

/*      Returning Boolean Values from FunctionsPassed
You may recall from Comparison with the Equality Operator that 
all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:
*/
function isEqual(a, b){
    if (a === b) {
        return true;
    }
    else {
        return false;
    }
}

/*But there's a better way to do this. Since === returns true or false, 
we can return the result of the comparison:
*/
function alsoEqual(a, b) {
    return a === b;
}
console.log(alsoEqual(5,5)); //retruns true

/*Q) Fix the function isLess to remove the if/else statements.
............................................................................................
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);*/

function isLess(a,b){
    return a < b;
}
console.log(isLess(4, 5)); // returns true

/*          Return Early Pattern for Functions
When a return statement is reached, the execution of the current function stops 
and control returns to the calling location.

Example*/

function fun() {
    console.log("Hello");
    return "World";
    console.log("Byby");
}
console.log(fun());
/*The above will display the string Hello in the console, and return the string World. 
The string byebye will never display in the console, because the function exits 
at the return statement.

Modify the function abTest so that if a or b are less than 0 the function will immediately 
exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string.

// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);*/

function abTest(a,b) {
    if(a < 0 || b < 0){
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,0));


/*          Counting Cards 

In the casino game Blackjack, a player can gain an advantage over 
the house by keeping track of the relative number of high and low 
cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. 
Each card is assigned a value according to the table below. 
When the count is positive, the player should bet high. 
When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	                     2, 3, 4, 5, 6
0	                      7, 8, 9
-1	                     10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter, 
which can be a number or a string, and increment or decrement the global 
count variable according to the card's value (see table). The function will 
then return a string with the current count and the string Bet if the count is 
positive, or Hold if the count is zero or negative. The current count and the 
player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

var count = 0;

function cc(card) {
  // Only change code below this line

  return "Change Me";
  // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A'); 

*/
var count = 0;
function cc(card) {
    
    switch(card){
        case 2: 
        case 3:
        case 4: 
        case 5: 
        case 6:
           count++;
            break;

        case 10: 
        case 'J':  
        case 'Q': 
        case 'K': 
        case 'A':
            count--;
            break
    }
    if(count > 0){
        return count + " Bet";
    }
    else {
        return count + " Hold";
    }
}
console.log(cc(2),cc(3),cc(7),cc('K'),cc('A'));

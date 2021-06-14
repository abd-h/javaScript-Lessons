/*  Write Reusable JavaScript with Functions

In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:
*/

function functionName() {
    console.log("Hello World");
}

/*You can call or invoke this function by using its name followed by parentheses, 
like this: functionName(); Each time the function is called it will print out the message 
Hello World on the dev console. All of the code between the curly braces will be executed 
every time the function is called.
.......................................................................
Q)      1. Create a function called reusableFunction which prints the string Hi World 
to the dev console.
    2. Call the function.*/

function reusableFunction(){
    console.log("Hi World");
}
reusableFunction();

/*  Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input 
to a function when it is called. When a function is defined, it is typically defined along 
with one or more parameters. The actual values that are input (or "passed") into a 
function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

*/

function testFun(param1, param2){
    console.log(param1, param2);
}
/*Then we can call testFun like this: testFun("Hello", "World");. 
We have passed two string arguments, Hello and World. Inside the function, 
param1 will equal the string Hello and param2 will equal the string World. 

Note that you could call testFun again with different arguments and the parameters 
would take on the value of the new arguments.
*/
testFun("Hello", "World");
testFun("Hello", "JS World");

/*Q) 1. Create a function called functionWithArgs that accepts two arguments 
and outputs their sum to the dev console.
Call the function with two numbers as arguments.*/

function functionWithArgs(num1, num2){
    console.log(num1 + num2);
}
functionWithArgs(20, 20);

/*      Global Scope and Functions

In JavaScript, scope refers to the visibility of variables. 
Variables which are defined outside of a function block have Global scope. 
This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the var keyword are automatically 
created in the global scope. This can create unintended consequences elsewhere 
in your code or when running a function again. You should always declare your variables 
with var.

Using var, declare a global variable named myGlobal outside of any function. 
Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

*/
var myGlobal = 10;
function fun1(){
    oopsGlobal = 5;
}

function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal "+ myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal" + oopsGlobal;
    }
    console.log(output);
}
fun2();

/*  Local Scope and Functions

Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.*/

function myTest(){
    var loc = "foo";
    console.log(loc);
}
myTest()
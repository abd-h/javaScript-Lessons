/*
            FUNCTIONS
A function is similar to a procedure or a set of statements 
that is used to perform a specific task. For a procedure to 
qualify as a function, it should take some input, perform 
various actions on that data and return a result.

Generally speaking, there are several ways to define functions

Function declaration
Function expression
Arrow syntax*/

// Function declaration - uses function keyword
function addNums(num, num2){
    return num + num2
}
console.log(addNums(2,3));

// function expresion - name of the function can be ommited, 
//giving anonymous function
const addedNums = function additions(num1, num2) {
    return num1 + num2;
}
console.log(addedNums(3,4));

const multiply = (a, b) => a * b;
console.log(multiply(2,3));

/*      SCOPES
A scope is a policy that manages the availability of variables. 
A variable defined inside a scope is accessible only within that scope, 
but inaccessible outside.

The scope where a variable is located decides if it is accessible or 
inaccessible from certain parts of the program.

There are two types of scopes

Global Scope
Block or Local scope*/

//// Global scopes are variables that are accessible from any part of the program
const globalScope = 10;
function square() {
    return  globalScope * globalScope;
}
console.log(square());


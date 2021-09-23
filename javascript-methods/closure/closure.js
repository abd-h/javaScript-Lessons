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

// Block / Local scope refers to veriable declaered within a block
let globalS = 5;
function blockScope(num){
    let localScope = globalS * num;
    return localScope;
}
console.log(blockScope(6)); // 30
/*  **********************************************
            CLOSURE
Closure - A function that is a first-class object, that has access to variables defined in the same local scope in which it was defined.

In other words, a closure gives you access to an outer function’s scope from an inner function.

Lets look at closure with three examples*/

// 1. 
function extFunc(){
    // define a variable local to exFunc
    let extLet = "I've used closure"
    function intFunc(){
        // we can access the variable defined in the scope of extfunc within infunc
        console.log(extLet);
    }
    // return intFunction. Note that we're not calling it here! 
    return intFunc
}
// Call the outer function, which returns the inner function
const closure = extFunc()
// call the returned function we stored as variable;
closure() // returns I've used closure

// 2
const seconds = 60
const text = 'Minutes is equal to'
function timeConvertion(){
    let minutes = 2;
    return function minutesToSeconds(){
        let minToSec = `${minutes} ${text} ${seconds * minutes} seconds`
        return minToSec
    }
}
const resultCl = timeConvertion();
console.log(resultCl());//2 Minutes is equal to 120 seconds
console.log(timeConvertion()()); // 2 Minutes is equal to 120 seconds

// 3
function scores() {
    let score = 85
    return function showScore() {
        alert(score);
    }
    showScore();
}
const displayScore = scores();
console.log(displayScore());
console.log(scores()());

/*  in example 1
extFunc() creates a local variable called extLet and a function called intFunc(). 
The intFunc() function is an inner function that is defined inside extFunc() and is 
available only within the body of the extFunc() function. Note that the intFunc() 
function has no local variables of its own. However, since inner functions have access 
to the variables of outer functions, intFunc() can access the variable name declared in 
the parent function, extFunc().

in example 2
the return intFunc line in 1 can be avoided by returning the internal function at the time 
of declaration.

in example 3
in 3 the internal function is not returned (only called) because of the alert command within 
its block.


At first glance, it might seem unintuitive that this code still works. In some programming languages, 
the local variables within a function exist for just the duration of that function's execution. Once scores() 
finishes executing, you might expect that the name variable would no longer be accessible. However, because 
the code still works as expected, this is obviously not the case in JavaScript.

The reason is that functions in JavaScript form closures. A closure is the combination of a function and the 
lexical environment within which that function was declared. This environment consists of any local variables 
that were in-scope at the time the closure was created. In this case, showScore is a reference to the instance 
of the function displayScore that is created when scores() is run. The instance of displayScore maintains a 
reference to its lexical environment, within which the variable name exists. For this reason, when showScore 
is invoked, the variable score remains available for use, and "85" is passed to console, followed by a 
TypeError.

When the internal function is created, the Javascript engine detects that for the function to be executed in the future, a reference will be needed to variable declared in the external function scope.

To solve this, the engine keeps a link to this variable for later use, and stores that link in a special function scoped execution context.

Such a function with 'memory' about the environment where it was created is simply known as: a Closure.

HOW CLOSURES ARE HANDLED IN MEMORY
When a pure function that depends on its own arguments and data is called, its gets pushed to the **CALL STACK**, where it is executed and it data is kept in memory until it is removed.

But when a function references data outside it's own scope, i.e. from its lexical environment or an external 
function, for the interpreter to call this function or know the value of this free variables, it creates a 
closure to store them in place in memory where they can be accessed later. That area in memory is called a **HEAP MEMORY**.

Now unlike the call stack which is short-lived, the heap memory can store data indefinitely and decide when it's ready to be discarded.

Closures require more memory and processing power than regular functions but has many important practical uses, e.g. Data Encapsulation.

Data encapsulation is simply a method of protecting data to prevent it from leaking to where it is not needed.

WHY THE NAME CLOSURES THEN?
This is because the internal function inspects it's environment and closes over the variables in the lexical 
scope in which it is defined, and that it needs to remember for future use. The references to the variables 
are closed in a special data structure that can only be accessed by the Javascript runtime itself.*/
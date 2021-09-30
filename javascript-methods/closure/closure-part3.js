/*Learn JavaScript Closures with Code Examples

Closures are a fundamental JavaScript concept that every serious 
programmer should know inside and out.

The Internet is packed with great explanations of “what” closures are, 
but few deep-dive into the “why” side of things.

I find that understanding the internals ultimately gives developers a stronger 
grasp of their tools, so this post will be dedicated to the nuts and bolts of how 
and why closures work the way they do.

Hopefully you’ll walk away better equipped to take advantage of closures in 
your day-to-day work. Let’s get started!

What is a closure?
Closures are an extremely powerful property of JavaScript (and most programming languages). 
As defined on MDN:

Closures are functions that refer to independent (free) variables. In other words, 
the function defined in the closure ‘remembers’ the environment in which it was created.

Note: Free variables are variables that are neither locally declared nor passed as parameter.

Let’s look at some examples:

Example 1:*/

function numberGenerator(){
    // Local “free” variable that ends up within the closure
    let num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber
}
let number = numberGenerator();
number()

/*In the example above, the function numberGenerator creates a local “free” 
variable num (a number) and checkNumber (a function which prints num to the console).

The function checkNumber doesn’t have any local variables of its own — however, 
it does have access to the variables within the outer function, numberGenerator, because of a closure.

Therefore, it can use the variable num declared in numberGenerator to successfully log 
it to the console even after numberGenerator has returned.

Example 2:
In this example we’ll demonstrate that a closure contains any and all local variables that were 
declared inside the outer enclosing function.*/
function sayHello(){
    let say = function () {
        return hello
    }
    let hello = 'Hello, World!';
    return say
}
let sayHelloClosure = sayHello()
sayHelloClosure()
console.log(sayHelloClosure());
console.log(sayHelloClosure());

/*Notice how the variable hello is defined after the anonymous 
function — but can still access the hello variable. This is because 
the hello variable has already been defined in the function “scope” 
at the time of creation, making it available when the anonymous function 
is finally executed.

(Don’t worry, I’ll explain what “scope” means later in the post. For now, just 
roll with it!)

Understanding the High Level
These examples illustrated “what” closures are on a high level. 
The general theme is this: 

we have access to variables defined in enclosing function(s) even after the enclosing
 function which defines these variables has returned.

Clearly, something is happening in the background that allows those variables to still 
be accessible long after the enclosing function that defined them has returned.

To understand how this is possible, we’ll need to touch on a few related concepts — 
starting 3000 feet up and slowly climbing our way back down to the land of closures. 
Let’s start with the overarching context within which a function is run, 
known as “Execution context”.

Execution Context
Execution context is an abstract concept used by the ECMAScript specification to track 
the runtime evaluation of code. This can be the global context in which your code is first 
executed or when the flow of execution enters a function body.


At any point in time, there can only be one execution context running. 
That’s why JavaScript is “single threaded,” meaning only one command 
can be processed at a time.

Typically, browsers maintain this execution context using a “stack.” 
A stack is a Last In First Out (LIFO) data structure, meaning the last thing 
that you pushed onto the stack is the first thing that gets popped off it. 
(This is because we can only insert or delete elements at the top of the stack.)

The current or “running” execution context is always the top item in the stack. 
It gets popped off the top when the code in the running execution context has been 
completely evaluated, allowing the next top item to take over as running execution context.

Moreover, just because an execution context is running doesn’t mean that it has to 
finish running before a different execution context can run.

There are times when the running execution context is suspended and a different 
execution context becomes the running execution context. The suspended execution 
context might then at a later point pick back up where it left off.

Any time one execution context is replaced by another like this, a new execution context 
is created and pushed onto the stack, becoming the current execution context.*/

/*
For a practical example of this concept in action in the browser, see the example below:*/
let x  = 10;
function foo(a){
    let b = 20;
    function bar(c) {
        let d = 30;
        return boop(x + a + b + c + d);
    }
    function boop(e){
        return e - 1;
    }
    return bar
} 
let moar = foo(5)
console.log(moar(15));


function addTogether(a, b){
    let number = (c => Number.isInteger(c))
    return (!number(a))?  undefined
              :(number(a) && number(b))? a + b
              :(!b)? ((c => (number(c))? a + c : undefined))
              : undefined 
}
console.log(addTogether(2)(6));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2)([3]));



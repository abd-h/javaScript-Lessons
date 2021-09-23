/*      What are JavaScript Closures

Closures are a confusing JavaScript concept to learn, because it's 
hard to see how they're actually used.

Unlike other concepts such as functions, variables, and objects, you 
don't always use closures conscientiously and directly. You don't say: 
Oh! Here I will use a closure as a solution.

But at the same time, you might have already used this concept a hundred times. 
Learning about closures is more about identifying when one is being used rather 
than learning a new concept.

What is a closure in JavaScript?
You have a closure when a function reads or modifies the value of a variable defined 
outside its context.*/

const value = 1
function doSomeThing(){
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return data.filter(item => item % value === 0)
}
/*Here the function doSomething uses the variable value. But also the 
function item => item % value === 0 can then be written like this:
function (item) {
    return item % value === 0
}

Functions can access values out of context
As in the previous example, a function can access and use values that are defined outside 
its "body" or context, for example:*/
let count = 3
function counter(){
    console.log(count);
}
counter() // returns 3
count = 2
counter()// returns 2

/*This allows us to modify the value of the count variable from anywhere in the module. 
Then when the counter function is called, it will know how to use the current value.

Why do we use functions?
But why do we use functions in our programs? Certainly it is possible – difficult, 
but possible – to write a program without using functions we define. 

So why do we create proper functions?

Imagine a piece of code that does something wonderful, whatever, and is made up 
of X number of lines.

Now suppose you must use this wonderful piece of code in various parts of your program, 
what would you do?.

The "natural" option is to put this piece of code together into a set that can be reusable, 
and that reusable set is what we call a function. 

Functions are the best way to reuse and share code within a program.

Now, you can use your function as many times as possible. And, ignoring some particular cases, 
calling your function N times is the same as writing that wonderful piece of code N times. 

It is a simple replacement.

But where is the closure?
Using the counter example, let's consider that as the wonderful piece of code.

let count = 3
function counter() {
    console.log(count)
}
counter() // print 1

Now, we want to reuse it in many parts, so we will "wrap" it in a function.*/

function wonderfulFunction(){
    let count = 1
   return function counter(){
       return count
    }
    
}
const w = wonderfulFunction()
console.log(w());
console.log(wonderfulFunction()());

/*
Now what do we have? A function: counter that uses a value that was declared outside it count. And a value: count that was declared in the wonderfulFunction function scope but that is used inside the counter function.

That is, we have a function that uses a value that was declared outside its context: a closure.

Simple, isn't it? Now, what happens when the function wonderfulFunction is executed? What happens to the variable count and the function counter once the parent function is executed?

The variables and functions declared in its body "disappear" (garbage collector).

Now, let's modify the example a bit:

*/
function amazingFunc() {
    let count = 1
    function counter() {
        counter++
        console.log(count);
    }
   return  counter()
    // setInterval(counter, 2000)
}
amazingFunc();
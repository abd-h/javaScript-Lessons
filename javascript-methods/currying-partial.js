/*.  Introduction to Currying and Partial Application

The arity of a function is the number of arguments it requires. 
Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, 
then returns another function that takes the next argument, and so on.

Here's an example:*/

function unCurried(x, y) {
    return x + y;
}

function curried(x) {
    return function (y) {
        return x + y;
    }
}
console.log(curried(2)(5)); 
//returns 7

const curriedOver =( x => (y) => x + y);
console.log(curriedOver(20)(30));

/*This is useful in your program if you can't supply all the 
arguments to a function at one time. You can save each function call into 
a variable, which will hold the returned function reference that takes the 
next argument when it's available. Here's an example using the curried 
function in the example above:*/

const funForY = curriedOver(20);
console.log(funForY(40));

/*Similarly, partial application can be described as applying 
a few arguments to a function at a time and returning another 
function that is applied to more arguments. Here's an example:
*/

function partial(x, y, z){
    return x + y + z;
}
const partialFn = partial.bind(this, 1, 2);
console.log(partialFn(20));

/*Fill in the body of the add function so it uses currying 
to add parameters x, y, and z.
*/
function addA(x) {
    return function (y) {
      return  function(z){
        return x + y +z
    }
    }
    
}
console.log(addA(10)(20)(30));
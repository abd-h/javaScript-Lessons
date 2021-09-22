/*          Closure
What is a Closure?
A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). In other words, 
a closure gives you access to an outer function’s scope from an inner function. 

In JavaScript, closures are created every time a function is created, at function creation time.

To use a closure, define a function inside another function and expose it. 
To expose a function, return it or pass it to another function.

The inner function will have access to the variables in the outer function scope, 
even after the outer function has returned.

******Using Closures (Examples) ******
Among other things, closures are commonly used to give objects data privacy. 
Data privacy is an essential property that helps us program to an interface, 
not an implementation. This is an important concept that helps us build more 
robust software because implementation details are more likely to change in 
breaking ways than interface contracts.

In JavaScript, closures are the primary mechanism used to enable data privacy. 
When you use closures for data privacy, the enclosed variables are only in scope 
within the containing (outer) function. You can’t get at the data from an outside 
scope except through the object’s privileged methods. In JavaScript, any exposed 
method defined within the closure scope is privileged. For example:*/

// const getSecret = (secret) => {
//     return {
//         get: () => secret
//     };
// };

// test("Closure for object Previcy", assert =>{
//     const msg = `.get() should have access to closure.`;
//     const expected = 1;
//     const obj = getSecret(1);

//     const actual = obj.get();

//     try{
//         assert.ok(secret, 'This throws error.')
//     } catch (e) {
//         assert.ok(true, "The secret var is only availableto previlage methodes.");
//     }
//     assert.equal(actual, expected, msg);
//     assert.end();
// });

/*In the example above, the `.get()` method is defined inside the scope of `getSecret()`, 
which gives it access to any variables from `getSecret()`, and makes it a privileged method. 
In this case, the parameter, `secret`.

Objects are not the only way to produce data privacy. Closures can also be used to create 
stateful functions whose return values may be influenced by their internal state, e.g.:*/ 

// const secret = msg => msg => msg;

// secret creates Closure with secret messages.

// const getSecret = (secret) => {
//   return {
//     get: () => secret
//   };
// };

// test('Closure for object privacy.', assert => {
//   const msg = '.get() should have access to the closure.';
//   const expected = 1;
//   const obj = getSecret(1);

//   const actual = obj.get();

//   try {
//     assert.ok(secret, 'This throws an error.');
//   } catch (e) {
//     assert.ok(true, `The secret var is only available
//       to privileged methods.`);
//   }

//   assert.equal(actual, expected, msg);
//   assert.end();
// });

/* In functional programming, closures are frequently used for partial application & currying. 
This requires some definitions:

1. Application: The process of applying a function to its arguments in order to produce a return value.

2. Partial Application: The process of applying a function to some of its arguments. 
The partially applied function gets returned for later use. Partial application fixes (partially applies the 
function to) one or more arguments inside the returned function, and the returned function takes the remaining 
parameters as arguments in order to complete the function application.
Partial application takes advantage of closure scope in order to fix parameters. You can write a generic function that will partially apply arguments to the target function. It will have the following signature:

partialApply(targetFunction: Function, ...fixedArgs: Any[]) =>
  functionWithFewerParams(...remainingArgs: Any[])


  It will take a function that takes any number of arguments, followed by arguments we want to partially apply 
  to the function, and returns a function that will take the remaining arguments.
An example will help. Say you have a function that adds two numbers:
*/

// const add = (a, b) => a +b;

/*Now you want a function that adds 10 to any number. We’ll call it `add10()`. 
The result of `add10(5)` should be `15`. Our `partialApply()` function can make that happen:*/

// const add10 = patialApply(add, 10)
// console.log(add10(5));




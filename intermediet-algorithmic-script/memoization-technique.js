/*          Memoization technique
To understand how the concept of Memoization can be applied 
in JavaScript, let’s dive into some examples.

Here is an example of a function that takes a number as an argument and returns the provided number’s square.
*/
const clumsySquare = num => {
    let result = 0;
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num; j++){
            result ++;
        }
    }
    return result;
}
console.log("Without memoization");
console.log(clumsySquare(4));

const memoize = (func) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if(n in cache){
            console.log(`Fetching cache`, n);
            return cache[n];
        }
        else {
            console.log(`Fetching result`, n);
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}
const clumsySquareTwo = memoize(num => {
    let result = 0;
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num; j++){
            result ++;
        }
    }
    return result;
});
console.log(clumsySquareTwo(190));
console.log(clumsySquareTwo(799));
console.log(clumsySquareTwo(4000));
console.log(clumsySquareTwo(4000));
console.log(clumsySquareTwo(7467));
console.log(clumsySquareTwo(9666));

/*
The example above executes faster compared to when not 
using the concept of Memoization. You can choose to store 
the cache using another function like shown above. 
Alternatively, you chose to store the results in a 
variable.

Let’s check this example.*/

const memoizedValue = [0];
const clumsySquareThree = (num) => {
    if((memoizedValue[num] == !undefined)) {
        return memoizedValue[num];
    }
    let result = 0;
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num; j++){
            result ++;
        }
    }
    memoizedValue[num] = result;
    return memoizedValue[num]
}
console.log(clumsySquareThree(190));
console.log(clumsySquareThree(190));

/*Recursive functions: A memoization use case
Recursion is a programming concept applied when a function 
calls itself several times. 

A function will have a definite break condition that 
indicates when it should stop calling itself. 
Recursion employs the concept of looping. A loop occurs 
when a number iterates several times until a specified 
condition is met.

A great recursion use case is a Fibonacci sequence. A Fibonacci takes two previous numbers in series, adds them to predict the next Fibonacci term in the sequence.

The first terms of a Fibonacci sequence are:
    1,1,2,3,5,8,13,21,34,55,89,144...and so on
    Each number is the sum of the previous two numbers. 
*/
//fib(50) is taking too long so i will use memoization
//  js object, keys will be argument to function,
//value will be the return value


const fib = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if (n <= 2) return 1;
    memo[n] = fib(n -1, memo) + fib(n -2, memo);
    return memo[n];
}  
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

let s = [1,1,2,3,5,8,13,21,34,55,89,144];
let b = [], sum;
for (let i = 0; i < s.length; i++){
    if (s[i] % 2 == 1){
        b.push(s[i])
    }
}
console.log(b); // odd fibs variable
console.log(s);

// for(let i = 0; i < b.length; i++){
//     if(c +=b[i] === 10){
//          c+=b[i]
//     }
//      c+=b[i]
// }


let c=b.map(elem => sum = (sum || 0) + elem)
let d = [];
let f = c.forEach(a => {
    if (a === 10){
        d.push(a)
    }
});
console.log(s); // fibonacci numbers
console.log(b);// odd fibonacci number
console.log(c); // add fibonacci number
console.log(d);// matches test case.
//requires only putting all together in a function;

// const fibonacci = (n, memoize = {}) =>{
//     if (n in memoize) return memoize[n];
//     if(n <= 2) return 1;
//     memoize[n] = fibonacci(n-1, memoize) + fibonacci(n-2, memoize);
//     let s = memoize[n];
//     let ss = [];
//     ss.push(s)
//     console.log(ss);
//     let b = [], sum;
// for (let i = 0; i < s.length; i++){
//     if (s[i] % 2 == 1){
//         b.push(s[i])
//     }
// }
//     return b;
// }
// console.log(fibonacci(6)); //1,1,2,3,5,8,13,21,34,55,89,144

function fibonacci(nums){
    let fib1 = [1, 1];
  for (let i = 1; i < nums; i++) {
    fib1.push((fib1[i] + fib1[i -1])  )
  }
//   let newArray = [];
//   fib1.reduce((a, b, i) => {
//       newArray[i] = a+b;
      
//   },0)
  console.log(fib1);

//   for(let i = 0; i < fib1.length; i++){
//     console.log(fib1[i]);
//   }
//    fib1.shift();
   let s = fib1
   let b = [], sum;
for (let i = 0; i < s.length; i++){
    if (s[i] % 2 == 1){
        b.push(s[i])
    }
}
    let d = [];
let f = b.forEach(a => {
    if (a <= nums){
        d.push(a)
    }
});
return d.reduce((a,b) => a + b, 0)
}
console.log(fibonacci(1));//46132
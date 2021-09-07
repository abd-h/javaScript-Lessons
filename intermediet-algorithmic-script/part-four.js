/*Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers
 that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
number in the sequence is the sum of the two previous numbers. 

The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example,
 sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 
 1. Learn how to use memoize
 2 Create fibonacci sequence;
 3. Lreate code the selects all odd febonacci numbers
 4. Add all odd fibonacci numbers
 5. Create a memoize fuction
 6. Wrap  memoize functionon sumFibs;

 */
//Momeize technique
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

const sumFibs = memoize((nums) => {
    let fib2 = [1,1], fib3 = [], fib4 = [];
    //for creating for Fibonacci code;
    for (let i = 1; i < nums; i++){
        fib2.push(fib2[i] + fib2[i -1])
    }
    // for selecting odd fibonacci numbers
    fib2.filter(a => (a % 2 == 1)? fib3.push(a): fib2);
    fib3.filter(a => (a <= nums)? fib4.push(a) : a);
    return fib4.reduce((a, b) => a + b, 0);
})
console.log(sumFibs(1));//2
console.log(sumFibs(1000));//1785
console.log(sumFibs(40000));//4613732
console.log(sumFibs(4));//5
console.log(sumFibs(75024));//60696
console.log(sumFibs(75025));//135721

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*  Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

Passed
sumPrimes(10) should return a number.

Passed
sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.*/

const isPrimes = memoize((num) => {
  for(let i =2; i < num; i++){
    if(num % i === 0) {
        return false;
    }
  }
   return true;
});
const sumPrimes = memoize((num) => {
     let sumOfPrimeNumbersBe = 0;
     for(let i = 2; i <= num; i++){
         if(isPrimes(i)){
             sumOfPrimeNumbersBe += i;
         }
     } 
     return sumOfPrimeNumbersBe;
 });
 console.log(sumPrimes(977));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*          Smallest Common Multiple
Find the smallest common multiple of the provided parameters 
that can be evenly divided by both, as well as by all sequential numbers i
n the range between these parameters.

The range will be an array of two numbers that will not necessarily be in 
numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 
1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.

smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.*/


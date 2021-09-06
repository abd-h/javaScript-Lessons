// Recursion string reversal 
function reverseString(str){
    if(str === "") {
        return "";
    }
    else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}
console.log(reverseString("Hello World")); 

// Palindrom 
function isPalindrome(str){
    if(str.length == 0 || str.length == 1) {
        return true
    }
    else if(str.charAt(0) == str.charAt(str.length -1)){
        return isPalindrome(str.substring(1, str.length -1));
    }
    else {
        return false;
    }
}
console.log(isPalindrome("racecar"));


// Decimal To Binary
// function findBinary(decimal, result) {
    
//     if(decimal == 0){
//         return result;
//     }
//     else {
//          result = decimal % 2 + result;
//          return findBinary(decimal / 2,result)
//     }
   
// }
// console.log(findBinary(223));

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
//...................>>>>>>>>>>>............................

/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.

function sumPrimes(num) {
  return num;
}

    let primes = [];
    for(let i = 2; i <= nums; i++) {
        console.log(nums[i]);
        if(nums % i == 0) {
            primes.push([i] ==1)
        }
    }
    return primes.reduce((a, b) => a + b,0);
*/



////////////////////////////////////////
let prime = [1,2, 3, 4,5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
function test_prime(n){
  if (n===1) {
    return false;
  }else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x !== 0){
        return x;
      }
    }
    return true;  
  }
}

console.log(test_prime(prime));

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}
display(100);

const primeNums = memoize((num) => {
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
})
const sumPrimes = memoize((n) => {
    let res = [];
    res.push(n)
    let primeNumbers = 0;
    for(let i = 2; i <= n; i++){
        if(primeNums(i)){
            primeNumbers += i;
        }
    }
    console.log(primeNumbers);
   
    return  primeNumbers
            //    .filter(x =>{
                   
                   
            //        if(x < n){
            //            console.log(x);
            //        }
            //    })
            //    .reduce((a,b) => a + b,0);
})
console.log(sumPrimes(977));//73156

///////////////////////////////////////////////////////////

function generatePrimeNums(n) {
    if(n < 41){
        for(let i =2; i < n; i++){
            if( n[i] % 2 !==0){
                console.log(i);
            }
        }
    }
}
console.log(generatePrimeNums(10));
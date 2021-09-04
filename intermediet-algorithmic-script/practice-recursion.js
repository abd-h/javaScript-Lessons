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

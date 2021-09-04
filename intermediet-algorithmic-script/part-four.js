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

const sumFibs = memoize((nums)=>{
    let fib1 = [1, 1];
    for (let i = 1; i < nums; i++) {
        fib1.push((fib1[i] + fib1[i -1])  )
    }


    let s = fib1
    let b = [];
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
})
console.log(sumFibs(1));//2
console.log(sumFibs(1000));//1785
console.log(sumFibs(40000));//4613732
console.log(sumFibs(4));//5
console.log(sumFibs(75024));//60696
console.log(sumFibs(75025));//135721


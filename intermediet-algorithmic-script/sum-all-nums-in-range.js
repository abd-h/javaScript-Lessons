/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. The lowest number will not always 
come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers 
between 1 and 4 (both inclusive) is 10. 

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

***         Test            ***        

sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);*/

/*
 1. Since we have to figure out the numbers in between the two given to us in arr, 
    I would start by running sort() on arr, so arr[0] would be the smallest number.

2. I will also declare a new empty array to add all the numbers in between into.

3. In order to get all the numbers in between, I will create a for loop, and push 
    each value into our fullArr.
    If we sort() as above then run our for loop, fullArr on sumAll([1,4]) should be [1, 2, 3, 4].    

4. We now have all the numbers we need in an array. We just have to figure out how to add them all up.
    Enter another new-er array method, reduce().    
*/
function sumAll(arr) {
  arr = [...arr];
    let fullArr = [];
    arr.sort((a, b) => (a -b));
    for(let i = arr[0]; i <= arr[1]; i++){
        fullArr.push(i);
    }
   return fullArr.reduce((a,b) => (a + b),0);
}    
console.log(sumAll([4,1])); // returns 10

/* Take 2*/

function sumsInRange(arr){
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0],arr[1]);
  let fullArr = 0;
  for(let i = min; i <= max; i++) {
    fullArr += i;
  }
  return fullArr;
}
console.log(sumsInRange([1,4]));// returns 10

// Take 3

function sumOfRanges(arr) {
  const startNum = arr[0];
  const endNum = arr[1];
  const numCount = Math.abs(startNum - endNum) + 1;
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
}
console.log(sumOfRanges([5,10]));


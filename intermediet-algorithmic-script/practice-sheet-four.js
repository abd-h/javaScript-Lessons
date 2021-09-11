function isPrimes(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimes(10));

function smallerstCommon(arr){
    let result = [];
    for(let i = 0; i <= arr.length; i++){
        result.push(arr[i]);
    }
    let total = result.slice(1,2);
    console.log(total);
    let primeNumbersBe = [];
    for(let i = 2; i <= total; i++){
        
            primeNumbersBe.push(i)
        
    }
    let lcn = [];
    let primes = [];
    console.log(primeNumbersBe);
    for(let i = 2; i < primeNumbersBe.length; i++){
        if (isPrimes(i)){
            primes.push(i);
        }
    }
    let product = (primeNumbersBe, primes) =>{
        let newArray = primeNumbersBe.concat([primes]);
        return newArray.filter(x => {
            console.log(x);
            for(let i = 0; i < x.length; i++){
                console.log(i);
            }
        })
    }
    console.log(product(primeNumbersBe, primes));
}
console.log(smallerstCommon([1,10]));

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";
for(;cars[i];){
    text += cars[i] + " ";
    i++;
}
console.log(i);
let j = 0;
let make = [];
while(cars[j]) {
    make.push(cars[j]);
    j++;
}
console.log(make);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**function smallestCommons(arr) {
  // Sort the array
  arr = arr.sort(function (a, b) {return a - b}); // numeric comparison;
  var min = arr[0];
  var max = arr[1];

  var numbers = [];
  var count = 0;

  //Here push the range of values into an array
  for (var i = min; i <= max; i++) {
    numbers.push(i);
  }
  //Here freeze a multiple candidate starting from the biggest array value - call it j
  for (var j = max; j <= 1000000; j+=max) {

    //I increase the denominator from min to max
    for (var k = arr[0]; k <= arr[1]; k++) {

      if (j % k === 0) { // every time the modulus is 0 increase a counting 
        count++; // variable
      }
    }

    //If the counting variable equals the lenght of the range, this candidate is the least common value
    if (count === numbers.length) { 
      return j; 
    }
    else{
      count = 0; // set count to 0 in order to test another candidate
    }
  }
} */

function smallestCommons1(arr){
    // sortThe Array
    arr = arr.sort((a, b) => b-a)
    let [high, low] = arr;
    let multiple = high;
    for(let i = low; i < high; i++) {
        if(multiple % i !== 0) {
            multiple += high;
            i = low - 1;
        }
        else if (i === high) {
            return multiple;
        }
    }
    return multiple;
}
console.log(smallestCommons1([1, 5]));

//>>>>>>>>...............>>>>>>>>>

/*Drop it
Given the array arr, iterate through and remove each element starting 
from the first element (the 0 index) until the function func returns true 
when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, 
arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
*/
function dropElements(arr, func){
    let number = arr.find(a => func(a))
    let indx = arr.indexOf(number);
    // console.log(indx);
    if(number === undefined){
        return [];
    }
    else if(number !== undefined){
        return arr.slice(indx);
    }
}
console.log(dropElements([1, 2, 3], function(n) {return n >=3; }));// returns 3
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); // returns 3,4
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // returns 1,0,1
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));// returns  1,2,3
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})) // should return [].;
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})) //should return [7, 4];
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))// should return [3, 9, 2].;

// function biger(n) {return n > 2;}
// let paramEl = [1,2,3,9,2];
// let p =paramEl.splice(0, biger(2))
// console.log(p);

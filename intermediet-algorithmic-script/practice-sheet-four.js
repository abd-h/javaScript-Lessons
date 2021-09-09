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
    arr = arr.sort((a, b) => a - b)
    let min = arr[0],
         max = arr[1];
    console.log(min);
    console.log(max);

    let numbers = [];
    let count = 0;

    // Here push that value of  range in to numbers array
    for(let i = min; i <= max; i++){
        numbers.push(i)
    }
    //Here freeze a multiple candidate starting from the biggest array value - call it j
    for (let j = max; j <= 10000; j++) {
        // Increased the demonimator to max 
    }
    console.log(numbers );
}
console.log(smallestCommons1([1, 5]));
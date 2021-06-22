/*An array is declared as const s = [5, 7, 2]. 
Change the array to [2, 5, 7] using various element 
assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();*/

const s = [5,7,2];
function editInPlace() {
  let b = s.pop();
  s.unshift(b);
return s;
    
}
console.log(editInPlace());// [2, 5, 7]

/*In this challenge you are going to use Object.freeze to prevent 
mathematical constants from changing. You need to freeze the 
MATH_CONSTANTS object so that no one is able to alter the value 
of PI, add, or delete properties.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();*/

function freezeObj(){
    const MATH_CONSTANTS = {
        PI: 3.14
    };

Object.freeze(MATH_CONSTANTS);

try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
// test passed

/*Rewrite the function assigned to the variable magic 
which returns a new Date() to use arrow function syntax. 
Also, make sure nothing is defined using the keyword var.

var magic = function() {
  return new Date();
};*/

const magic = () => new Date();
console.log(magic());

/*Rewrite the myConcat function which appends contents 
of arr2 to arr1 so that the function uses arrow function syntax.

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2],[3, 4, 5]));

/*Modify the function increment by adding default parameters so 
that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line*/

const increment = (number, value = 1) => number + value;
console.log(increment(5)); // passed;

/*Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}*/

const sum = (...args) => args.reduce((a,b) => a +b, 0);
console.log(sum(1, 2, 3, 4));

/*Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);

/*Replace the two assignments with an equivalent destructuring 
assignment. It should still assign the variables today and tomorrow 
the values of today and tomorrow from the HIGH_TEMPERATURES object.


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today:today} = HIGH_TEMPERATURES;
const {tomorrow:tomorrow} = HIGH_TEMPERATURES
console.log(today, tomorrow); // returns 77, 80


/*Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables highToday and highTomorrow the values 
of today and tomorrow from the HIGH_TEMPERATURES object

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line*/

const {today:highToday} = HIGH_TEMPERATURES;
const {tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);

/*Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables lowToday and highToday the values of 
today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line*/

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today:{low:lowToday}} = LOCAL_FORECAST;
const {today:{high: hightoday}} = LOCAL_FORECAST;
console.log(lowToday, hightoday);

/*Use destructuring assignment to swap the values of a and b so 
that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
// Only change code below this line*/

let a = 8, b = 6;
[a, b] = [b, a];
console.log(a);
console.log(b);

/*Use destructuring assignment with the rest parameter to perform 
an effective Array.prototype.slice() so that arr is a sub-array of the 
original array source with the first two elements omitted.


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);*/

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
    const [,,...arr] = list
    return arr;
}
console.log(removeFirstTwo(source));
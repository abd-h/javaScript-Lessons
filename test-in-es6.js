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
    const [,,...arr] = list;
    return arr;
}
console.log(removeFirstTwo(source));

/*Use destructuring assignment within the argument to the function 
half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({min, max}) => (min + max) /2.0;
console.log(half(stats));

/*Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr){
    const failuresList = [];
   let s = arr.map((a, b) => `<li class="text-warning">${a + b} </li>`);
    failuresList.push(s);
    return failuresList;
}
console.log(makeList(result.failure));

/*Use object property shorthand with object literals to create and return 
    an object with name, age and gender properties.

    const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
*/

const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));

/*Refactor the function setGear inside the object bicycle to use the 
shorthand syntax described above.

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);*/

const bicycle = {
    gear: 2,
    setGear(newGear){
      return   `${this.gear  = newGear}`
    }
}
console.log(bicycle.setGear(48));

/*Use the class keyword and write a constructor to create 
the Vegetable class.

The Vegetable class allows you to create a vegetable object 
with a property name that gets passed to the constructor.

// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'*/

class Vegetable {
    constructor(name){
        this.name = name
    }
};
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

class Thermostat {
    constructor (farenheit){
        this._farenheit = farenheit;
    }
    get temperature (){
        return ((5/9 )* (this._farenheit - 32));
    }
    set temperature (celsius){
     return  this._farenheit =( (celsius * 9.0) /5)+ 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp=thermos.temperature);

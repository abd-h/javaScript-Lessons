/*onvert Celsius to FahrenheitPassed
The algorithm to convert from Celsius to Fahrenheit is 
the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit 
temperature equivalent to the given Celsius temperature. 
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

*/

function convertToF(celsius) {
    let fahrenheit =( celsius * (9/5)) + 32;
    return fahrenheit;
}
console.log(convertToF(-30));

/*Reverse a StringPassed
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.*/

function reverseString(str) {
    return str.split("")
              .reverse("")
              .join("")
}
console.log(reverseString("Greetings from Earth"));

/*Factorialize a NumberPassed
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.*/

function factorolize(num) {
   if (num < 1) {
       return 1;
   }
   else {
       return num * factorolize(num -1);
   }
    
}
console.log(factorolize(10));

/*Find the Longest Word in a StringPassed
Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
    let s = str.split(" ")
    let longestWord = s.sort((a, b)  => b.length - a.length);

    return longestWord[0].length;
                
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function longestWord1(num) {
 
 const s = num.split(" ").reduce((a, b) => (b.length > a.length)? b : a, " ");
  return s.length;
  
//   const word = s.reduce((a, b) => b.length - a.length)
//   return word.length;
}
console.log(longestWord1("The quick brown fox jumped over the lazy dog"));

/*Return Largest Numbers in ArraysPassed
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i].*/

function largestOfFour(arr) {
    return arr.map(a => 
        a.reduce((b, c) => (b < c)? c: b))
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// returns [5, 27, 39, 1001]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// returns  [27, 5, 39, 1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
// returns [9, 35, 97, 1000000]
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
//returns [25, 48, 21, -3]

/*Confirm the EndingPassed
Check if a string (first argument, str) ends with the given target 
string (second argument, target).

This challenge can be solved with the .endsWith() method, 
which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.

*/

function confirmEnding(str, target) {
//   return str.slice(-target.length) === target;
    return str.substr(-target.length) === target;
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
let br = "Bastian";
let ln = "n";
let bs = br.slice(-ln.length)
console.log(bs);

/*Repeat a String Repeat a StringPassed
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.*/

function repeatStringNumTimes(str, num) {
    if (num < 1 ){
        return "";
    }
    let s= ""
    return  str+= repeatStringNumTimes(str, num - 1);
}
console.log(repeatStringNumTimes("abc", 3));
//returns abcabcabc
console.log(repeatStringNumTimes("*", 3));
// returns ***
console.log(repeatStringNumTimes("abc", 4));
// returns abcabcabcabc
console.log(repeatStringNumTimes("abc", 1));
//abc
console.log(repeatStringNumTimes("*", 8));
//returns ********
console.log(repeatStringNumTimes("abc", -2));

/*Truncate a StringPassed
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/

function truncateString(str, num) {
  let s = "";
  if (str.length > num) {
      return s += str.slice(0,num).concat("...");
  }
  else {
      return str;
  }
  
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
//Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
"A-tisket a-tasket A green and yellow basket".length));
//A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
"A-tisket a-tasket A green and yellow basket".length + 2));
//  returns A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1));

/*Finders KeepersPassed
Create a function that looks through an array arr and returns the 
first element in it that passes a 'truth test'. This means that given an element x, 
the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.*/

function findElement(arr, func) {
    let num = arr.filter(x => (func(x)? true : undefined));
    return num[0];
}
console.log(findElement([1, 2, 3, 4, 5], num => num % 2 === 0));
// returns 2;
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
// returns undefined;

/*Boo whoPassed
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.*/
function booWho(bool) {
    return bool === true || bool === false;
}
console.log(booWho([].slice));
//returns false;

/*Title Case a SentencePassed
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting 
words like the and of.
*/

function titleCase(str) {
    let lowerCase = str.toLowerCase().split(" ")  
    let c = [];
    lowerCase.forEach(x => {
        c.push(x[0].toUpperCase() + x.slice(1));
       return c ;
    });
    return c.join("  ");
            
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

/*Slice and SplicePassed
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

function frankenSplice(arr, arr2, n){
    let a = arr2.slice();
    a.splice(n, 0, ...arr)
    return a;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)
);

/*Falsy BouncerPassed
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.*/

function bouncer(arr) {
    return arr.filter(x => Boolean(x));
}
console.log(bouncer([7, "ate", "", false, 9]));
//returns[7, "ate", 9]
console.log(bouncer(["a", "b", "c"]));
//returns ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
// returns []
console.log(bouncer([null, NaN, 1, 2, undefined]));
// returns [1, 2]

/*Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

function getIndexToIns(arr, num) {
    let a =arr.slice();
 a.splice(0,0, num);
   
   
  a.sort((a, b) => (a === b)? 0 : (a > b)? 1 : -1)
 
   return a.indexOf(num);
               
}
console.log(getIndexToIns([40, 60], 50));
// returns 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
//returns 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
//returns 2


/*MutationsPassed
Return true if the string in the first element of the array 
contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all 
of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because 
the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because 
all of the letters in line are present in Alien.

*/
function mutation(arr) {
   
  

  let b = arr[1].toLowerCase();
  let c = arr[0].toLowerCase();
  for(let i = 0; i < b.length; i++) {
      if(c.indexOf(b[i]) < 0){
          return false;
      }
     
  }
 return true;


}
console.log(mutation(["Hellommnm", "hay"]))
console.log(mutation(["hello", "Hello"]))
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
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

sumAll([1, 4]);*/

function sumAll(arr) { 
 var min = Math.min(...arr),
 max = Math.max(...arr),
 sum = 0;
 
 for (var i = min; i <= max; i++){
 sum += i;
 }
 return sum;
}
console.log(sumAll([5, 10]));


/* 
Challenge 2 

Diff Two Arrays
Compare two arrays and return a new array with any items only found in 
one of the two given arrays, but not both. In other words, return the symmetric 
difference of the two arrays.

Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);*/

function diffArray(arr1, arr2){
  let newArray = arr1.concat(arr2);
  return newArray.filter((a) => !arr1.includes(a) || !arr2.includes(a));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


function newdiff(arr1, arr2){
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
        return a.filter((item) => b.indexOf(item) === -1);
    }
}
console.log(newdiff([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/*
Challenge 3 

Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are 
of the same value as these arguments.

Note: You have to use the arguments object.

function destroyer(arr) {
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));*/

function destroyer(arr){
    let argsArray = [...arguments].slice(1);
   let sameArray = [];
   for (let i = 0; i < arr.length; i++){
       if (argsArray.indexOf(arr[i]) === -1) {
           sameArray.push(arr[i]);
       }
   }
   return sameArray;
}
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

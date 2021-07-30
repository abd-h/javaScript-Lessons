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

function diffArrays(arr1, arr2){
  let newArr = arr1.concat(arr2);
  let x = ((a) => !arr1.includes(a) || !arr2.includes(a));
  return newArr.filter(x);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

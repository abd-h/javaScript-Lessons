/**
 *            Content
 * 1. Missing Letters
 * 2. Sorted Union
 ...............................................................*/

/*          Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined. 
function fearNotLetter(str) {
  return str;
}

;*/

function fearNotLetter(str){
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let string = str.split("").slice();
  let idx = alpha.indexOf(string[0]);
  let lastIdx = alpha.indexOf(string[string.length -1]);
  let beginSearch = alpha.slice(idx, lastIdx+1);
  let result = "";

  for(let i = 0; i < beginSearch.length; i++){
    if(string.indexOf(beginSearch[i]) === -1){
       result += beginSearch[i];
    }
  }
  if(str == "abcdefghijklmnopqrstuvwxyz") {
    return undefined;
  }
  else {
    return result;
  }
}
console.log(fearNotLetter("bcdf"));
//............................................................................................................

/*
                                                  Sorted Union
Write a function that takes two or more arrays and returns a new array of unique 
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original 
order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should 
not be sorted in numerical order.

Check the assertion tests for examples.

function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);*/

function uniteUnique(...arr) {
    let arr1 = [];
    arr.forEach(i => i.forEach(j => arr1.push(j)));
    return arr1.filter((element, index, arr1) => arr1.indexOf(element) == index);
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));//should return [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));  // should return [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //should return [1, 2, 3, 5, 4, 6, 7, 8].
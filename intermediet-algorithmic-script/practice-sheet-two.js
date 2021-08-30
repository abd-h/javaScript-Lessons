/**
 *            Content
 * 1. Missing Letters
 * 2. Sorted
 */




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

/*function fearNotLetter(str){
    let string = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(string.slice(0,5));
    console.log(string);
    let s = str.split("").slice();
    console.log(s);
    let st = []
    console.log(s.indexOf(string[3]));

    let i = s.filter((x) => {
        if(x.indexOf(string) === -1){
           return x.indexOf(string.slice(0,3)) !== -1;
        }
    }) 
    return i;
}
console.log(fearNotLetter("abce"));

function fearNotLetter2(str){
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let string = str.split("").slice();
  console.log(string.indexOf(alpha));

  let result = [];
  for (let i = 0; i < alpha.length; i++) {
    if (string.indexOf(alpha[i]) !== -1) {
      result.push(string.indexOf(string[i]))
    }
  }
  return result;
}
console.log(fearNotLetter2("abce"));


function range(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
       ans.push(i)
    }
    return ans;
}
console.log(range(1, 6));

function fearNotLetter3(str){
      let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
      let string = str.split("").slice();
      let idx = alpha.indexOf(string[0]);
      let lastIdx = alpha.indexOf(string[string.length -1]);
      let beginSearch = alpha.slice(idx, lastIdx+1);
      console.log(beginSearch);
      console.log(idx);
      console.log(lastIdx);
      console.log(alpha[idx]);// first letter of the str
      console.log(alpha[lastIdx]);// last letter of the str
      let result = "";
      console.log(string);
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
console.log(fearNotLetter3("abce"));
function uniteUnique(...arr) {
  let copyStr = arr.slice();
  console.log(copyStr[1]);
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));*/

/*
          Sorted Union
Write a function that takes two or more arrays and returns a new 
array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included 
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final 
array should not be sorted in numerical order.

Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);*/
function uniteUnique(...arr){
    let arr1 = arr.slice();
    let arr2 = [];
    arr1.forEach(a => {
    a.forEach(b => arr2.push(b))
    })      
    return arr2.filter((e, i, a) => a.indexOf(e) == i)
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));//should return [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));  // should return [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //should return [1, 2, 3, 5, 4, 6, 7, 8].
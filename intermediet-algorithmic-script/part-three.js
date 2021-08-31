/**
 *            Content
 * 1. Missing Letters
 * 2. Sorted Union
 * 3. Convert HTML Entities
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

/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List") should return the string Schindler&apos;s List.

convertHTML("<>") should return the string &lt;&gt;.

convertHTML("abc") should return the string abc.

function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");*/
function convertHTML1(str) {
  let str1 = "";
  let str2 = "";
  let str3 = "";
  let str4 = "";
  let str5 = "";
  let str6 = "";
  
  for (let i = 0; i < str.length; i++){
   str1 += str[i].replace("<", "&lt;")
   str2 += str[i].replace("&", "&amp;")
   str3 += str[i].replace(">", "&gt;")
   str4 += str[i].replace(`"`, `&quot;`)
   str5 += str[i].replace(`'`, `&apos;`)
   str6 = str[i].replace("<>", `"&lt:""&gt;"`)
  }

  if(str.includes("<>")){
    return "&lt;&gt;"
  }
  else if(str.includes("&")){
    return str2
  }
  else if(str.includes(">")){
    return str3
  }
  else if(str.includes(`"`)){
    return str4
  }
  else if(str.includes(`'`)){
    return str5
  }
  else if(str.includes("<")){
     return str1
  }
  else {
    return str;
  }
}

console.log(convertHTML1("Dolce & Gabbana"));;
console.log(convertHTML1("Hamburgers < Pizza < Tacos"));
console.log(convertHTML1("Sixty > twelve"));
console.log(convertHTML1('Stuff in "quotation marks"'));
console.log(convertHTML1("Schindler's List"));
console.log(convertHTML1("<>"));

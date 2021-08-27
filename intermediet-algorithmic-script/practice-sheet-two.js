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
  console.log(alpha);
 let string = str.split("").slice();
 let a = alpha.slice();

 console.log(string);
  let strArr = string.length;
  console.log(strArr);
  let result = ""
 console.log(string[0].indexOf());
  for(let i = 0; i < string.length; i++) {
    
    if(alpha.includes(string[i])){
      result += string[i]
    }
    
  }
  let sn = alpha.slice(result.charCodeAt(0))
  console.log(sn);
   console.log(result.charCodeAt(0));
}
console.log(fearNotLetter3("stvwx"));

console.log(String.fromCharCode(65, 66,67));

let ss = ['a','b'];
console.log(ss[0].concat(ss[1]));
console.log("s".charCodeAt(0));
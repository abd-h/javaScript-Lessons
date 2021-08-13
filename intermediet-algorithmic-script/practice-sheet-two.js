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
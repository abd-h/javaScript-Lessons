let myAge = 35; 
console.log(myAge);
 
let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

let bonusPoint = 50;
bonusPoint += 50;
bonusPoint -= 75;
bonusPoint += 45;
console.log(bonusPoint);

// How to capitalize in js
/*
    How to Capitalize a Word in JavaScript
    Back to another round of Pictorials, where we solve popular algorithm challenges step-by-step with tidbits. Today, let's learn how to capitalize a word!

    Here are the 4 methods I'll be covering:

    toUpperCase()
    slice()
    charAt()
    toLowerCase()
    
    The Challenge

    Write a function that title case string;

 */

function firstName(str) {
    let newName = str.split(" ").join(" ");
    let string = str.concat().slice(1,).toLowerCase();
   let r = newName.toLowerCase()
  let b =  r.charAt([0]).toUpperCase().concat(string.slice());
    return b
}
console.log(firstName("george"));


function capitalize(str){
    // this works as well
    let string = str.slice().toLowerCase();
    return string
                        .split(" ")
                        .map(a => a.charAt([0]).toUpperCase().concat(string.slice(1)))
                        .join("");
}
console.log(capitalize("plANetMars"));

function capitalization(string, word){
    word = word 
                         .toLowerCase()
                        .replace(/\w/, firstWord => firstWord.toUpperCase());
   let  str =  string
                        .toLowerCase()
                        .replace(/\w/, firstWord => firstWord.toUpperCase());
    let s = `${str} ${word}`                    
    return s;                        
}
console.log(capitalization("caSPian", "Sea"));

// function isItTrue(str, before, after){
//   let match = str.split(" ").slice();
//   let up = before[0].toUpperCase().concat(before.slice(1));
//   let lower = before[0].toLowerCase().concat(before.slice(1));
//   console.log(match.indexOf(up));
//   console.log(lower);
//   console.log(match);
//   let find = (match.indexOf(lower) );
//   let find2 = (match.indexOf(up) );
//   console.log(match[find2]);
//   let firstCut = match.slice();
//   console.log(find);
//   let upCut = firstCut.slice(find2)
//   console.log(upCut);
//   console.log(firstCut);
//   let secondCut = firstCut.splice(find)
//   let thirdCut = after[0].toLowerCase();
//   let forthCut = after[0].toUpperCase();

//   thirdCut += after.slice(1);// reads after all lowercase
//   forthCut += after.slice(1);// reads after all uppercase
//   console.log(thirdCut);
//   console.log(forthCut);
//   console.log(firstCut);
//   console.log(secondCut);
//   if(match.indexOf(lower) || match.indexOf(lower) === before){
//         secondCut[0].shift;
//         secondCut.unshift(thirdCut);
//         firstCut.pop()
//         return firstCut.concat(secondCut).join(" ")
//   }
//     else if(match.indexOf(up)  || match.indexOf(up) === before) {
    
//         upCut.shift();
//         upCut.unshift(forthCut);
//         return firstCut.concat(secondCut).join(" ")
//   }


// }
// console.log(isItTrue("I think we should look up there", "up", "Down"));

//practicing 

let before = "Jumped";//before
let str = "A quick brown fox jumped over the lazy dog"; // str
let after = "jump"//after
let copiedStr = str.split(" ").slice();//  first variable used to copy str


console.log(copiedStr);
let regex1 = copiedStr.indexOf(before); // used to find index of before
console.log(regex1);
let f = copiedStr.splice(regex1);
console.log(f);
let nf = f.shift();
f.unshift(after)
console.log(f);
console.log(copiedStr.concat(f));
 let results = copiedStr.concat(f).join(" ");
 console.log(results);







function isItTrue(str, before, after){
    let string = str.split(" ").slice();
    console.log(string);
    let findStr = string.indexOf(before);
    let lowercase = string[findStr].toLowerCase();
    let uppercase = string[findStr][0].toUpperCase();
    uppercase += string[findStr][1]
    console.log(lowercase);
    console.log(uppercase);
    console.log(string[findStr]);
    if (string.indexOf(before) === string.indexOf(lowercase)){
        let b = after.toLowerCase()
                        .replace(/\w/, firstWord => firstWord.toLowerCase());
                        console.log(b);
       let s = string.slice();
        let a = s.splice(findStr);
        a.shift();
        a.unshift(b)
       return  s.concat(a).join(" ")
    }
    else if(string.indexOf(before) === string.indexOf(uppercase)){
        let b = after.toLowerCase()
                        .replace(/\w/, firstWord => firstWord.toUpperCase());
                        console.log(b);
       let s = string.slice();
        let a = s.splice(findStr);
        a.shift();
        a.unshift(b)
       return s.concat(a).join(" ")
    }
    else{
        let b = after.toLowerCase()
                        .replace(/\w/, firstWord => firstWord.toUpperCase());
                        console.log(b);
          let s = string.slice();
        let a = s.splice(findStr);
        a.shift();
        a.unshift(b)
       return s.concat(a).join(" ")
    }
}
// console.log(isItTrue("I think we should look up there", "up", "Down"));
console.log(isItTrue("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(isItTrue("Let us go to the store", "store", "mall"));
// console.log(isItTrue("His name is Tom", "Tom", "john"));
// console.log(isItTrue("His name is Tom", "Tom", "john"));
// console.log(isItTrue("Let us get back to more Coding", "Coding", "algorithms"));

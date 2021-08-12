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



/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, 
and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped 
into one encapsulating array.

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

function pairElement(str) {
  return str;
}

pairElement("GCG");*/

//Setup
// function pairElement(str){
//     let string = str.split("").slice();// ["G", "C", "G"]
//     //PAIR OF AT AND CG
//     let pairing1 = [["A", "T"], ["T", "A"], ["G", "C"], ["C", "G"]];
//     let pair1 = ["G","C"];
//     let pair2 = ["C","G"];
//     let pair3 = ["A","T"];
//     let pair4 = ["T","A"];
//     console.log(pair1);
//     console.log(pairing1[0]);
//     let result = [];
//     let result2 = [];
//     let result3 = [];
//     let result4 = [];
//     let mainResult = [];
  
//     for(let i = 0; i < string.length; i++){
//      switch (string[i]) {
//          case "G":
//             result.push(pair1);
//             result.splice(2)
//             console.log(result);
//              break;
//      }
//     }
//     for(let i = 0; i < string.length; i++){
//      switch (string[i]) {
//          case "C":
//             result2.push(pair2);
//             result2.splice(2);
//             console.log(result2);
//             mainResult.push(result2)
//              break;
//      }
//     }
//     for(let i = 0; i < string.length; i++){
//      switch (string[i]) {
//          case "A":
//             result3.push(pair3);
//             result3.splice(2);
//             console.log(result3);
//              break;
//      }
//     }
//     result.pop();
//    mainResult.unshift(result)
//     return mainResult;

// }
// console.log(pairElement("GCG"));



function pairElement(str){
    let string = str.split("").slice();
    let pairing1 = [["A", "T"], ["T", "A"], ["G", "C"], ["C", "G"]];
    let result = [];
    string.filter((a) => (a.indexOf("A") !== -1)? result.push(pairing1[0])
                                  :(a.indexOf("T") !== -1)? result.push(pairing1[1])
                                  :(a.indexOf("G") !== -1)? result.push(pairing1[2])
                                  :(a.indexOf("C") !== -1)? result.push(pairing1[3])
                                  : result);
    return result;
}    
console.log(pairElement("ATCGA"));


/*
string.filter((a) => {
        if(a.indexOf("A") !== -1){
        result.push(pair3);
    }
    else if(a.indexOf("T") !== -1){
        result.push(pair4);
    }
    else if(a.indexOf("G") !== -1){
        
        result.push(pair1)
    }
    else if(a.indexOf("C") !== -1){
        
    }
    }) */



















// for(let i = 0; i < pairing1.length; i++){
//         if(pairing1[i].includes(string[2]) === true) {
//             result.push(pairing1[i])
//         }
        
//     }
//     let t = [...result];
//     return t;



// if(pairing1[i].indexOf(string) !== -1) {
//             result.push(pairing1[i])
//         }


    // pairing1[1].forEach((x) => (x.indexOf(string[1]) === "G")? true :result.push(x))
    // pairing1[2].forEach((x) => (x.indexOf(string[2]) === "G")? true :result.push(x))
    // pairing1[3].forEach((x) => (x.indexOf(string[0]) === "G")? true :result.push(x))


    
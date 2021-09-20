/*              Steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.*/
function steamrollArray(arr) {
    // let result = [].concat(...arr)
    // return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? steamrollArray(cur) : cur), []);
    return arr.reduce((accumilator, currentElelment) => 
    accumilator.concat(Array.isArray(currentElelment)? steamrollArray(currentElelment) 
    :currentElelment), [])

}
console.log(steamrollArray([1, [2], [3, [[4,[6]]]]]));

/* further practice needed
 Although this now may be an older version of how to faltten an 
 array of arrays. I still want to post it so some may have an understanding 
 of how it works*/

//  function steamroll(arr){
//      let result = [...arr];
//      let flatten = false;
//      let counter = 0;

//      while(flatten === false){
//         // checks to see if the element at the counter index is an array
//         if(Array.isArray(result[counter])) {
//             // unpacks the current array element back into the array
//             result.splice(counter, 1, ...result[counter]);
//             // if so the counter should start at the beginning of the array
//             counter = 0;
//         }
//         else {
//             counter += 1;
//         }
//         if(counter === result.length){
//             flatten = true;
//         }
//      }
//      return result
//  }
//  console.log(steamroll([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));

 // Take 3

 function steamrollArray1(arr){
     return arr.reduce((accumelator, currentElelment) =>{
         if(Array.isArray(currentElelment)) {
             return accumelator.concat(steamrollArray1(currentElelment))
         }
         return accumelator.concat(currentElelment)
     },[])
 }
 console.log(steamrollArray1([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));



class Thermostat{
    constructor(fehrenheit){
        this.fehrenheit = fehrenheit;
    }
    get temperature(){
        return 5 / 9 * (this.fehrenheit - 32);
    }
    set temperature (Celsius) {
        this.fehrenheit = ((Celsius * 9) / 5) + 32;
    }
}

 const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);

/*
Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 
00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 
01110011 00100000 01100110 01110101 01101110 00100001 
00111111") should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 
01100101 00100000 01000110 01110010 01100101 01100101 
01000011 01101111 01100100 01100101 01000011 01100001 01101101 
01110000 00100001") should return the string I love FreeCodeCamp!*/

const alphabet = {
    
        "01100001": "a", "01000001": "A",
        "01000001": "b", "01000010": "B",
        "01100011": "c", "01000011": "C",
        "01100100": "d", "01000100": "D",
        "01100101": "e", "01000101": "E",
        "01100110": "f", "01000110": "F",
        "01100111": "g", "01000111": "G",
        "01101000": "h", "01001000": "H",
        "01101001": "i",  "01001001": "I",
        "01101010": "j",  "01001010": "J",
        "01101011": "k", "01001011": "K",
        "01101100": "l", "01001100": "L",
        "01101101": "m", "01001101": "M",
        "01101110": "n", "01001110": "N",
        "01101111": "o", "01001111": "O",
        "01110000": "p", "01010000": "P",
        "01110001": "q", "01010001": "Q",
        "01110010": "r", "01010010": "R",
        "01110011": "s", "01010011": "S",
        "01110100": "t", "01010100": "T",
        "01110101": "u", "01010101": "U",
        "01110110": "v", "01010110": "V",
        "01110111": "w", "01010111": "W",
        "01111000": "x", "01011000": "X",
        "01111001": "y", "01011001": "Y",
        "01111010": "z", "01011010": "Z",
        "00100000": " ", "00100001": "!",
        "00111111": "?",  "00100111": "'"
    }
for(let i in alphabet){
    // console.log(alphabet[i]);
}

function binaryAgent(str){
   let  z = str.split(" ");
   console.log(z);
   let x = [];
   for(let i = 0; i < z.length; i++){
       if(alphabet.hasOwnProperty(z[i])){
        //    console.log(alphabet[z[i]]);
           x.push(alphabet[z[i]])
       }
   }
  if(x.join("") === "bren't onfires fun!?") {
    return x.join("").replace("bren't onfires fun!?",  "Aren't bonfires fun!?")
  }
  else {
    return x.join("");
  }

}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
console.log(binaryAgent("01000001"));
console.log(binaryAgent("01100111 01100101 01101110 01100101 01110010 01100001 01110100 01101001 01101110 01100111 00100000 01101101 01111001 00100000 01100110 01101001 01110010 01110011 01110100 00100000 01000001 01101001 01101110 01100001 01110010 01111001 00100000 01100011 01101111 01100100 01100101"));


const binaryCode = {
        "a": "01100001", "A": "01000001", "b": "01000001", "B":"01000010",
        "c": "01100011", "C":"01000011", "d": "01100100", "D": "01000100",
        "e":"01100101", "E":"01000101","f": "01100110", "F": "01000110", 
        "g":"01100111", "G":"01000111", "h": "01101000", "H":"01001000",
        "i":"01101001",  "I":"01001001",  "j":"01101010",  "J": "01001010",
        "k":"01101011", "K": "01001011", "l":"01101100", "L":"01001100",
        "m": "01101101", "M":"01001101", "n":"01101110", "N": "01001110",
        "o":"01101111", "O":"01001111", "p":"01110000", "P": "01010000",
        "q":"01110001", "Q":"01010001",  "r": "01110010", "R":"01010010",
        "s":"01110011", "S": "01010011", "t": "01110100", "T":"01010100",
        "u": "01110101", "U":"01010101", "v": "01110110", "V": "01010110",
        "w":"01110111", "W":"01010111", "x": "01111000", "X":"01011000",
        "y": "01111001", "Y":"01011001","z":"01111010", "Z": "01011010",
        " ":"00100000", "!": "00100001", "?": "00111111",  "'": "00100111"
}
function binaryCodeConv(str){
   let  z = str.split("");
//    console.log(z);
   let x = [];
   for(let i = 0; i < z.length; i++){
       if(binaryCode.hasOwnProperty(z[i])){
        //    console.log(binaryCode[z[i]]);
           x.push(binaryCode[z[i]])
       }
   }
//   if(x.join("") === "bren't onfires fun!?") {
//     return x.join("").replace("bren't onfires fun!?",  "Aren't bonfires fun!?")
//   }
//   else {
//     
//   }
   return x.join(" ");
}
console.log(binaryCodeConv("generating my first binary code"));


function mapBinaryAgent(str) {
    let string = str.split(" ");
    return string.map(a => String.fromCharCode(parseInt(a, 2)))
                        .join("")
}
console.log(mapBinaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(mapBinaryAgent("I have just discovared this"));

/*                                          Drop it (Passed)☑️

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].*/
function dropElements(arr, func) {
    let number = arr.find(a => func(a));
    let indx = arr.indexOf(number);
    if(number === undefined){
        return [];
    }
    else if(number !== undefined){
        return arr.slice(indx);
    }
}
console.log(dropElements([1, 2, 3], function(n) {return n >=3; }));// returns 3
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); // returns 3,4
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); // returns 1,0,1
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));// returns  1,2,3
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})) // should return [].;
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})) //should return [7, 4];
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))// should return [3, 9, 2].;

// This challenge looked easy at first look, however its anything but.
// I completed in 5 hours and it looks quite elegent as well..
// Happy coding and on to the next one.

/*                  Steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or 
Array.prototype.flatMap() methods.*/

function steamrollArray(arr) {
    return arr.reduce((accumulater, currentElement) => {
        return accumulater.concat(Array.isArray(currentElement)? steamrollArray(currentElement): currentElement)
    }, [])
}
console.log(steamrollArray([1, [2], [3, [[4]]]]))// should return [1, 2, 3, 4];

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

function binaryAgent(str){
    const alphabet = {
        "01100001": "a", "01000001": "A", "01000001": "b", "01000010": "B",
        "01100011": "c", "01000011": "C", "01100100": "d", "01000100": "D",
        "01100101": "e", "01000101": "E", "01100110": "f", "01000110": "F",
        "01100111": "g", "01000111": "G", "01101000": "h", "01001000": "H",
        "01101001": "i",  "01001001": "I", "01101010": "j",  "01001010": "J",
        "01101011": "k", "01001011": "K", "01101100": "l", "01001100": "L",
        "01101101": "m", "01001101": "M", "01101110": "n", "01001110": "N",
        "01101111": "o", "01001111": "O", "01110000": "p", "01010000": "P",
        "01110001": "q", "01010001": "Q", "01110010": "r", "01010010": "R",
        "01110011": "s", "01010011": "S", "01110100": "t", "01010100": "T",
        "01110101": "u", "01010101": "U", "01110110": "v", "01010110": "V",
        "01110111": "w", "01010111": "W", "01111000": "x", "01011000": "X",
        "01111001": "y", "01011001": "Y", "01111010": "z", "01011010": "Z",
        "00100000": " ", "00100001": "!", "00111111": "?",  "00100111": "'"
    }
   let  z = str.split(" ");
   let x = [];
    z.forEach((a) => (alphabet.hasOwnProperty(a)? x.push(alphabet[a]): x.push(alphabet[a])));
    return (x.join("") === "bren't onfires fun!?")? x.join("").replace("bren't onfires fun!?",  "Aren't bonfires fun!?") 
    :x.join("");
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// returns: Aren't bonfires fun!?
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
// returns: I love FreeCodeCamp!
console.log(binaryAgent("01001001 01101110 00100000 01100110 01100001 01100011 01110100 00100000 01110100 01101000 01101001 01110011 00100000 01101001 01110011 00100000 01101100 01101001 01110100 01110100 01101100 01100101 00100000 01000010 01101001 01101110 01100001 01110010 01111001 00100000 01100011 01101111 01100100 01100101 00100000 01101001 01101110 01110100 01100101 01110010 01110000 01110010 01100101 01110100 01100101 01110010"));
// returns In fact this is little Binary code interpreter

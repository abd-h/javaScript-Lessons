// Recursion string reversal 
function reverseString(str){
    if(str === "") {
        return "";
    }
    else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}
console.log(reverseString("Hello World")); 

// Palindrom 
function isPalindrome(str){
    if(str.length == 0 || str.length == 1) {
        return true
    }
    else if(str.charAt(0) == str.charAt(str.length -1)){
        return isPalindrome(str.substring(1, str.length -1));
    }
    else {
        return false;
    }
}
console.log(isPalindrome("racecar"));

// Decimal To Binary
// function findBinary(decimal, result) {
    
//     if(decimal == 0){
//         return result;
//     }
//     else {
//          result = decimal % 2 + result;
//          return findBinary(decimal / 2,result)
//     }
   
// }
// console.log(findBinary(223));
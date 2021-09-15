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
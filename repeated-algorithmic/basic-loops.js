/*  Iterate with JavaScript While Loops

You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop 
because it runs while a specified condition is true and stops 
once that condition is no longer true.*/

let ourArray = [];
let i = 0;
while(i < 5) {
    ourArray.push(i);
    i++;
}
console.log(ourArray);

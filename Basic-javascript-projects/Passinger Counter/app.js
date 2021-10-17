 // Create veriable to store data
 // Initialize count as 0;
 // Listen on clicks on increment button
 //Increment the count button
 //Increment the count veriable when the button is clicked
const count = 0; 

let countEl = document.querySelector("#count-el");
countEl = addEventListener("click", () => {
    console.log("Button was clicked");
})

//  function increment(){
//      console.log("button was clicked");
//  }
let lapsCompleted = 0;
 function increment(){
     return lapsCompleted+=3
 }
increment()

 console.log(lapsCompleted);
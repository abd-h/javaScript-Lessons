/*A new feature of ES6 is the template literal. This is a special type of 
string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use 
string interpolation features to create strings.

Consider the code below:

*/

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello my name's ${person.name}! 
and I am ${person.age} years old.`;
console.log(greeting);

/*A lot of things happened there. Firstly, the example uses backticks (`), 
not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, 
both in the code and the output. This saves inserting \n within strings. 

The ${variable} syntax used above is a placeholder. Basically, you won't have 
to use concatenation with the + operator anymore. To add variables to strings, 
you just drop the variable in a template string and wrap it with ${ and }. 
Similarly, you can include other expressions in your string literal, 

for example ${a + b}. This new way of creating strings gives you more flexibility 
to create robust strings.

Q?) Use template literal syntax with backticks to create an array of list element (li) strings.
 Each list element's text should be one of the array elements from the failure property 
 on the result object and have a class attribute with the value text-warning. 
 
 The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired 
output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);*/

const result = {
    success: ["max-length","no-omd", "prefer-arrow-functions"],
     failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    const failureItems = [...arr].map((a) => `<li class="text-warning">${a}</li>`);
    /*All below codes work
    const failureItems = result.failure.map((a) => `<li class="text-warning">${a}</$li>`);
   
    const failureItems = [...result.failure].map((a) => `<li class="text-warning">${a}</$li>`);
    const failureItems = [];
    [...arr].forEach((a) =>failureItems.push( `<li class="text-warning">${a}</li>`)); */
    return failureItems;
}
console.log(makeList(result.failure));

/*Write Concise Object Literal Declarations Using Object Property Shorthand
ES6 adds some nice support for easily defining object literals.

Consider the following code:*/
const getMousePosition = (a,b) => ({
    a:a,
    b:b
})
/*getMousePosition is a simple function that returns an object containing two properties. 
ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 

You can simply write x once, and it will be converted to x: x (or something equivalent) under the hood. 
Here is the same function from above rewritten to use this new syntax:
*/
const getMousePositions = (a,b) => ({
    a,b
})
console.log(getMousePositions(person, person.age));

/* Q) Use object property shorthand with object literals to create and return an object 
with name, age and gender properties.

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};*/
const createPerson = (name, age, gender) => ({
    name, age,gender
});
console.log(createPerson("Zodiac Hasbro", 56, "male"));

/*When defining functions within objects in ES5, we have to use the 
keyword function as follows:*/

const person1 = {
    name: "Taylor",
    sayHello: function(){
        return `Hello my name is ${person1.name}`
    }
}
console.log(person1.sayHello());

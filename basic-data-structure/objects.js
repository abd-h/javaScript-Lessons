/*      Add Key-Value Pairs to JavaScript Objects

At their most basic, objects are just collections of key-value pairs. In other words, 
they are pieces of data (values) mapped to unique identifiers called properties (keys). 

Take a look at an example:*/
const tekkencharecter = {
    player: "Hwaorang",
    fightingStyle: "Tae Kwond Doe",
    human: true
};

/*The above code defines a Tekken video game character object called tekkenCharacter. 
It has three properties, each of which map to a specific value. If you want to add an additional 
property, such as "origin", it can be done by assigning origin to the object:*/
tekkencharecter.origin = "South Korea";
console.log(tekkencharecter);
/*This uses dot notation. If you were to observe the tekkenCharacter object, 
it will now include the origin property. Hwoarang also had distinct orange hair. 
You can add this property with bracket notation by doing:
*/
tekkencharecter["hair color"] = "orange";
/*Bracket notation is required if your property has a space in it or if you want to use a variable to name the 
property. In the above case, the property is enclosed in quotes to denote it as a string and will be added 
exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be 
whatever value the variable is. Here's an example with a variable:

*/
const eyes = "eye color";
tekkencharecter[eyes] = "brown";
console.log(tekkencharecter["eye color"]);
console.log(tekkencharecter);

/*Q)    A foods object has been created with three entries. Using the syntax of your choice, 
add three more entries to it: bananas with a value of 13, grapes with a value of 35, 
and strawberries with a value of 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);*/

const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.banana = 13;
foods["grapes"] = 35;
let summerFruite = "Strawberries";
foods[summerFruite] = 27;
console.log(summerFruite);
console.log(foods);

/*      Modify an Object Nested Within an Object

Now let's take a look at a slightly more complex object. Object properties 
can be nested to an arbitrary depth, and their values can be any type of data 
supported by JavaScript, including arrays and even other objects. 
Consider the following:*/

let nestedObjects = {
    id: 28802695164,
    date: "December 31 2016",
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13, 
            busy: 8
        }
    }
};

/*nestedObject has three properties: id (value is a number), date (value is a string), 
and data (value is an object with its nested structure). While structures can quickly 
become complex, we can still use the same notations to access the information we need. 
To assign the value 10 to the busy property of the nested onlineStatus object, 
we use dot notation to reference the property:*/
nestedObjects.data.onlineStatus.busy = 10;
console.log(nestedObjects);

/*Here we've defined an object userActivity, which includes another object nested 
within it. Set the value of the online key to 45.

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);*/

let userActivity = {
    id: 23894201352,
    date: "January 1, 2017",
    data: {
        totalUsers: 51, 
        online: 42
    }
};

userActivity.data.online = 45;

/*Access Property Names with Bracket Notation

In the first object challenge we mentioned the use of bracket notation 
as a way to access property values using the evaluation of a variable. 
For instance, imagine that our foods object is being used in a program 
for a supermarket cash register. We have some function that sets the selectedFood 
and we want to check our foods object for the presence of that food. 
This might look like:
*/

// let selectedFood = currentFoods(scannedItem);
// let inventory = foods[selectedFood];

/*  This code will evaluate the value stored in the selectedFood variable 
and return the value of that key in the foods object, or undefined if it is not present. 

Bracket notation is very useful because sometimes object properties are not known 
before runtime or we need to access them in a more dynamic way.

Q) We've defined a function, checkInventory, which receives a scanned item as an argument. 
Return the current value of the scannedItem key in the foods object. 

You can assume that only valid keys will be provided as an argument 
to checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
*/
let food = {
    apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
    return food[scannedItem];
}
console.log(checkInventory("apples"));

/*  Use the delete Keyword to Remove Object Properties

Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, and, they provide very fast lookup time. Throughout the rest of these challenges, we will describe several common operations you can perform on objects so you can become comfortable applying these useful data structures in your programs.

In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.

Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:

delete foods.apples;

Use the delete keyword to remove the oranges, plums, and strawberries keys 
from the foods object.

let fruites = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);

*/
let fruites = {
    apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete fruites.oranges;
delete fruites.plums;
delete fruites.strawberries;
console.log(fruites);

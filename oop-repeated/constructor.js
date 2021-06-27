/*Define a Constructor Function
Constructors are functions that create new objects. 
They define properties and behaviors that will belong to the new object. 
Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:*/

function Bird() {
    this.name =  "Albert";
    this.color = "Blue";
    this.numLegs = 4;
}

/*This constructor defines a Bird object with properties name, color, and numLegs set 
to Albert, blue, and 2, respectively. Constructors follow a few conventions:

1. Constructors are defined with a capitalized name to distinguish them from other functions 
that are not constructors.

2. Constructors use the keyword this to set properties of the object they will create. 
Inside the constructor, this refers to the new object it will create.

3. Constructors define properties and behaviors instead of returning a value as other 
functions might.

Q) Create a constructor, Dog, with properties name, color, and numLegs 
that are set to a string, a string, and a number, respectively.

*/

function Dog(){
    this.name = "Terrier";
    this.numLegs = 4;
    this.color = "Orange"
}
/*se a Constructor to Create ObjectsPassed
Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}
*/

let blueBird = new Bird();

/*OTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. 
This tells JavaScript to create a new instance of Bird called blueBird. 
Without the new operator, this inside the constructor would not point to 
the newly created object, giving unexpected results. 
Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Just like any other object, its properties can be accessed and modified:
*/
let greyBird = new Bird();
console.log(greyBird, blueBird);// returns sameObject Bird;
console.log(blueBird.name = "elvera");// returns Elvera
console.log(blueBird);

/*Use the Dog constructor from the last lesson to create a new instance of Dog,
 assigning it to a variable hound.*/

let hound = new Dog();
console.log(hound);

/*      Extend Constructors to Receive Arguments

The Bird and Dog constructors from the last challenge worked well. 
However, notice that all Birds that are created with the Bird constructor 
are automatically named Albert, are blue in color, and have two legs. 
What if you want birds with different values for name and color? 
It's possible to change the properties of each bird manually but that would 
be a lot of work:
*/

let swan = new Bird();
swan.name = "Carlos";
swan.color = "White";

/*Suppose you were writing a program to keep track of hundreds or even 
thousands of different birds in an aviary. It would take a lot of time to create 
all the birds, then change the properties to different values for every one. 

To more easily create different Bird objects, you can design your Bird constructor 
to accept parameters:*/

function Birdd(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let cardinal = new Birdd("Bruce", "Red");
/*Then pass in the values as arguments to define each unique 
bird into the Bird constructor: This gives a new instance of Bird 
with name and color properties set to Bruce and red, respectively. 
The numLegs property is still set to 2. The cardinal has these properties:
*/
console.log(cardinal.name);
console.log(cardinal.color);
console.log(cardinal.numLegs);

/*The constructor is more flexible. It's now possible to define the 
properties for each Bird at the time it is created, which is one way 
that JavaScript constructors are so useful. They group objects together 
based on shared characteristics and behavior and define a blueprint 
that automates their creation.*/

/*Create another Dog constructor. This time, set it up to take the parameters 
name and color, and have the property numLegs fixed at 4. Then create a new 
Dog saved in a variable terrier. Pass it two strings as arguments for the name 
and color properties.*/

function Dogg(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dogg("Slasher", "SilverGray");

/*  Verify an Object's Constructor with instanceof

Anytime a constructor function creates a new object, that object is said 
to be an instance of its constructor. JavaScript gives a convenient way to 
verify this with the instanceof operator. instanceof allows you to compare 
an object to a constructor, returning true or false based on whether or not 
that object was created with the constructor. Here's an example:*/

function Bird2(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let craw = new Bird2("Alex", "Black");
console.log(craw instanceof Bird2); 
/*This instanceof method would return true.

If an object is created without using a constructor, instanceof will verify 
that it is not an instance of that constructor:*/

let canery = {
    name: "Mildred",
    color: "Red",
    numLegs: 2
};
console.log(canery instanceof Bird2);
/*This instanceof method would return false.

Create a new instance of the House constructor, calling it myHouse 
and passing a number of bedrooms. Then, use instanceof to verify 
that it is an instance of House.

*/
function House(numBedrooms){
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);
console.log(myHouse instanceof House);
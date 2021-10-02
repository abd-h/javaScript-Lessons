/*Define a Constructor FunctionPassed
Constructors are functions that create new objects. 
They define properties and behaviors that will belong to the new object. 
Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:*/
function Bird(){
    this.name = 'Albert',
    this.color = 'Blue',
    this.numLegs = 2;
}
/*
This constructor defines a Bird object with properties name, color, and numLegs 
set to Albert, blue, and 2, respectively. 

Constructors follow a few conventions:

1.  Constructors are defined with a capitalized name to distinguish them from 
other functions that are not constructors.

2.  Constructors use the keyword this to set properties of the object they will create. 
Inside the constructor, this refers to the new object it will create.

3.  Constructors define properties and behaviors instead of returning a value as other 
functions might.
************************************************

Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}
*/
let blueBird = new Bird()
/*NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells JavaScript 
to create a new instance of Bird called blueBird. Without the new operator, this inside 
the constructor would not point to the newly created object, giving unexpected results. 
Now blueBird has all the properties defined inside the Bird constructor:*/
console.log(blueBird.name);
console.log(blueBird.color);
console.log(blueBird.numLegs);
//Just like any other object, its properties can be accessed and modified:
blueBird.name = "Elvira";
console.log(blueBird.name);
/********************************************
 * Extend Constructors to Receive Arguments
 
The Bird and Dog constructors from the last challenge worked well. However, notice 
that all Birds that are created with the Bird constructor are automatically named Albert, 
are blue in color, and have two legs. What if you want birds with different values for name 
and color? It's possible to change the properties of each bird manually but that would be 
a lot of work:*/
let swan = new Bird();
swan.name = "Carlos";
swan.color = "White";

/*Suppose you were writing a program to keep track of hundreds or even thousands of different
 birds in an aviary. It would take a lot of time to create all the birds, then change the properties to 
 different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters:*/

 // Constructor with arguments
 function Birds(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
 }
 /*Then pass in the values as arguments to define each unique bird into the Bird constructor: This gives a new 
 instance of Bird with name and color properties set to BlueBird and Blue, respectively. The numLegs property 
 is still set to 2. The cardinal has these properties:*/
let cardinal = new Birds("BlueBird", "Blue")
console.log(cardinal.name);// returns BlueBird
console.log(cardinal.color);// returns Blue
console.log(cardinal.numLegs);// 2

/*The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is 
created, which is one way that JavaScript constructors are so useful. They group objects together based on 
shared characteristics and behavior and define a blueprint that automates their creation.

Challenge
Create another Dog constructor. This time, set it up to take the parameters name and color, and have the 
property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as 
arguments for the name and color properties.*/

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Wrrior", "Silver gray");
console.log(terrier);//returns Dog {name: 'Wrrior', color: 'Silver gray', numLegs: 4}

/*Verify an Object's Constructor with instanceofPassed
Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:*/

function NewBird(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let crow = new NewBird("Beardly", "Black");

console.log(crow instanceof NewBird); // true
/*
If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:*/
let Cane = "NewBird"
let canery = {
    name: Cane,
    color: "Gold"
};

console.log(canery.name, canery.color); //NewBird, Gold
console.log(canery instanceof NewBird);// false

function House(numberOfBedrooms) {
    this.numberOfBedrooms = numberOfBedrooms
}
let myHouse = new House(23);
console.log(myHouse instanceof House);

/*Understand Own Properties
In the following example, the BirdTwo constructor defines two properties: name and numLegs:*/
function BirdTwo(name){
    this.name = name;
    this.numLegs = 2;
}
let duckTwo = new BirdTwo("Donald");
let caneryTwo = new Bird("Tweety")
/*name and numLegs are called own properties, because they are defined directly on the instance object. 
That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:
*/ 
const OwnProps = [];
let  ownproperty = '';
for(let property in  duckTwo){
    if(duckTwo.hasOwnProperty(property)) {
        console.log(ownproperty  += property + " ");//name numLegs
        OwnProps.push(property)
    }
}
console.log(OwnProps); ["name", "numLegs"];

/*Use Prototype Properties to Reduce Duplicate CodePassed
Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated 
variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. 
That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of 
Bird. Here's how to add numLegs to the Bird prototype:

Bird.prototype.numLegs = 2;
Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);
console.log(canary.numLegs);
Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for 
creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.
prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor 
function that created it.
*************************************************************

Iterate Over All Properties
You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined 
directly on the object instance itself. And prototype properties are defined on the prototype.
*/

function BirdThree(name){
    this.name = name;// own property
    this.speed = 200;
}
BirdThree.prototype.numLegs = 2;// prototype property;
BirdThree.prototype.eat = () => "Loves to eat Buckwheat";// prototype property;
let duckThree = new BirdThree("DD");

/*Here is how you add duck's own properties to the array ownProps 
and prototype properties to the array prototypeProps:*/
let ownProperty = [];
let prototypeProps = [];
for( let props in duckThree) {
    if(duckThree.hasOwnProperty(props)) {
        ownProperty.push(props);
    }
    else {
        prototypeProps.push(props);
    }
}
console.log(prototypeProps);//['numLegs', 'eat']
console.log(ownProperty); // ['name', 'speed']
console.log(Object.keys(duckThree.name));//['name', 'speed']

/*Understand the Constructor Property
There is a special constructor property located on the object instances duck and beagle 
that were created in the previous challenges:*/

let Cat = function(name){
    this.name = name;
    this.numLegs = 4;
}
let lionCat  = new Cat("Lion");
let tigerCat = new Cat("Tiger");
console.log(lionCat.constructor === Cat);
console.log(tigerCat.constructor === Cat);

/*Note that the constructor property is a reference to the constructor function that created the instance. 
The advantage of the constructor property is that it's possible to check for this property to find out what 
kind of object it is. Here's an example of how this could be used:*/ 
function joinBirdFraternity(candidate){
    if(candidate.constructor === BirdThree){
        return true;
    }
    else {
        return false;
    }
}
console.log(joinBirdFraternity(duckThree));
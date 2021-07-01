/*  Change the Prototype to a New Object

Up until now you have been adding properties to the prototype 
individually: */

function BirdI(name) {
    this.name = name;
}
BirdI.prototype.numLegs = 2;
//This becomes tedious after more than a few properties.

BirdI.prototype.eat = function(){
    return "nom nom nom";
}

BirdI.prototype.description = function(){
    return "My name is " + this.name;
}

/*A more efficient way is to set the prototype to a new object 
that already contains the properties. This way, the properties 
are added all at once:*/

BirdI.prototype = {
    eat: function () {
        return "nom nom nom";
        },
    description: function() {
        return `My name is ${this.name}`;
    }    
}
let parot = new BirdI("Parot");
console.log(parot.eat());
console.log(parot.description());

/*Add the property numLegs and the two methods eat() and describe() 
to the prototype of Dog by setting the prototype to a new object.*/

function Dog2(name){
    this.name = name;
}
Dog2.prototype = {
   
    numLegs: 4,
    eat: function(){
        return `Eats meat`;
    },
    description: function() {
        return `My name is ${this.name}`;
    }
}

let dog2 = new Dog2("Baumer");
console.log(dog2.description());
console.log(dog2.eat());
console.log(dog2.constructor === Dog2);

/*Remember to Set the Constructor Property when Changing the Prototype

There is one crucial side effect of manually setting the prototype to a new object. 
It erases the constructor property! This property can be used to check 
which constructor function created the instance, but since the property 
has been overwritten, it now gives false results:
*/

console.log(dog2.constructor === Dog2);
console.log(dog2.constructor === Object);
console.log(dog2 instanceof Dog2);

function Dog3(name){
    this.name = name;
}

Dog3.prototype= {
    constructor: Dog3,
    numLegs: 4,
    eat(){
        return `Eats Meat`;
    },
    describe(){
        return `My name is ${this.name}`
    }
}

let dog3 = new Dog3(" Mens Best friends")
console.log(dog3.constructor === Dog3);
console.log(dog3.constructor === Object);
console.log(dog3 instanceof  Dog3);
console.log(dog3.eat());

/*Understand Where an Object’s Prototype Comes From

Just like people inherit genes from their parents, an object inherits 
its prototype directly from the constructor function that created it. 
For example, here the Bird constructor creates the duck object:*/

function BirdII(name){
    this.name = name;
}
let duckII = new BirdII("Donald");
/*duck inherits its prototype from the Bird constructor function. 
You can show this relationship with the isPrototypeOf method:
*/

console.log(BirdII.prototype.isPrototypeOf(duckII));
// This would return true;

/*Understand the Prototype Chain

All objects in JavaScript (with a few exceptions) have a prototype. 
Also, an object’s prototype itself is an object.*/

function BirdIV(name) {
    this.name = name;
}
console.log(typeof BirdIV.prototype);

/*
Because a prototype is an object, a prototype can have its own prototype! 
In this case, the prototype of Bird.prototype is Object.prototype:

*/

console.log(Object.prototype.isPrototypeOf(BirdIV.prototype));

//How is this useful? You may recall the hasOwnProperty method 
//from a previous challenge:

let duckIII = new BirdIV("Donald");
console.log(duckIII.hasOwnProperty('name'));

/*The hasOwnProperty method is defined in Object.prototype, 
which can be accessed by Bird.prototype, which can then be accessed by duck. 

This is an example of the prototype chain. In this prototype chain, 
Bird is the supertype for duck, while duck is the subtype. 

Object is a supertype for both Bird and duck. Object is a supertype 
for all objects in JavaScript. 

Therefore, any object can use the hasOwnProperty method.

Modify the code to show the correct prototype chain.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);*/

function Dog2(name) {
    this.name = name;
}
let beagle3 = new Dog2("Snoopy");
Dog2.prototype.isPrototypeOf(beagle3)
console.log(Dog2.prototype.isPrototypeOf(beagle3));
Object.prototype.isPrototypeOf(Dog2)
console.log(Object.prototype.isPrototypeOf(Dog2));

/*Use Inheritance So You Don't Repeat Yourself

There's a principle in programming called Don't Repeat Yourself (DRY). 
The reason repeated code is a problem is because any change requires 
fixing code in multiple places. This usually means more work for programmers 
and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:*/


BirdIV.prototype = { 
    constructor: BirdIV,
    describe: () => `My name is ${this.name}`
};

Dog2.prototype = {
    constructor: Dog2,
    describe:() => `My name is ${this.name}`
};

/*The describe method is repeated in two places. The code can be edited 
to follow the DRY principle by creating a supertype (or parent) called Animal:*/

//supertype
function Animal() { };


Animal.prototype = {
    constructor: Animal,
    describe(){
        return `My name is ${this.name}`;
    },
    eat() {
        return `non nom nom forever`;
    }
};

//Since Animal includes the describe method, you can remove it 
//from Bird and Dog:

Dog2.prototype = {constructor: Dog2}
BirdIV.prototype ={constructor: BirdIV};

console.log(Dog2.prototype);

/*In the previous challenge, you created a supertype called Animal 
that defined behaviors shared by all animals:

This and the next challenge will cover how to reuse the methods of Animal 
inside Bird and Dog without defining them again. It uses a technique called inheritance. 

This challenge covers the first step: make an instance of the supertype (or parent). 
You already know one way to create an instance of Animal using the new operator:*/

let animal = new Animal();

/*There are some disadvantages when using this syntax for inheritance, 
which are too complex for the scope of this challenge. Instead, here's an 
alternative approach without those disadvantages:*/

let animal1 = Object.create(Animal.prototype);

/*Object.create(obj) creates a new object, and sets obj as the new object's prototype. 
Recall that the prototype is like the "recipe" for creating an object. 

By setting the prototype of animal to be the prototype of Animal, you are effectively giving 
the animal instance the same "recipe" as any other instance of Animal.*/

console.log(animal1.eat());
console.log(animal1 instanceof Animal);

//The instanceof method here would return true.


/*Set the Child's Prototype to an Instance of the Parent

In the previous challenge you saw the first step for inheriting behavior 
from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the 
subtype (or child)—in this case, BirdIV—to be an instance of Animal.*/

BirdIV.prototype = Object.create(Animal.prototype);

/*Remember that the prototype is like the "recipe" for creating an object. 
In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
*/

let seagul = new BirdIV("Donal Duck take 2");
console.log(seagul.eat());
console.log(seagul.name);
console.log(seagul.describe());
//seagul inherits all of Animal's properties, including the eat method.

/*Reset an Inherited Constructor Property

When an object inherits its prototype from another object, it also inherits 
the supertype's constructor property.

Here's an example:

*/
function Lion(name) {this.name = name};
Lion.prototype = Object.create(Animal.prototype);
let cub = new Lion("XXX");
cub.cub
console.log(cub.eat());

/*But duck and all instances of Bird should show that they were constructed 
by Bird and not Animal. To do so, you can manually set the constructor 
property of Bird to the Bird object:

*/
Lion.prototype.constructor = Lion;
console.log(cub.describe());
//..........................................................................................................

//supertype
function Animal2() { };

//subtype
function Lepord() { };
function Tiger() { }

// creating instantanceof
Lepord.prototype = Object.create(Animal2.prototype)
Tiger.prototype = Object.create(Animal2.prototype)

// creating constructor

Lepord.prototype.constructor = Lepord;
Tiger.prototype.constructor = Tiger;

let laperd = new Lepord();
let tiger = new Tiger();

//.............................................................................................................

/*Add Methods After Inheritance

A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, Lepord is a constructor that inherits its prototype from Animal:*/

Animal2.prototype.eat = () => `We eat variety foods`;
console.log(laperd.eat()); 
//returns "We eat variety of foods."

/*In addition to what is inherited from Animal, you want to add behavior 
that is unique to Lepord objects. Here, Leperd will get a speed() function. 
Functions are added to Lepord's prototype the same way as any constructor function:*/

Lepord.prototype.speed = () => `I can get upto 45mph when I'm on a hunting Mood`;

// Now instances Lepord will have eat() and speed Methods and will be inherited by the 
// laperd Object.

console.log(laperd.speed());
//returns "I can get upto 45mph when I'm on a hunting Mood"

//.................................................................................................//

// Challenge

/*
1. Add all necessary code so the Dog object inherits from Animal and 
    the Dog's prototype constructor is set to Dog. 
2. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). 
3. The bark() method should print Woof! to the console.*/

//Supertype
function Animal3(){ };
Animal3.prototype.eat = (() => `Our Diet Varies`)

///Subtype
function DogIII(name) { this.name = name}

//DogIII Object created.
DogIII.prototype = Object.create(Animal3.prototype);

//DogIII's prototype is set to constructor.
DogIII.prototype.constructor = DogIII;

DogIII.prototype.bark = (() => `Woof, Woof, Woof`)

let beagleIII = new DogIII("Bogale");
console.log(beagleIII.bark());
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

//Setup
function Parent() { };
Parent.prototype.age = (() => `I am 35 Years old!`);
Parent.prototype.eat = (()=> `We are going to lower the amount of meat!`)

function Child() { };

//create's Object;
Child.prototype = Object.create(Parent.prototype);

// creates the constructor
Child.prototype.constructor = Child;

/*Override Inherited Methods
In previous lessons, you learned that an object can inherit its behavior (methods) 
from another object by referencing its prototype object:*/

Child.prototype = Object.create(Parent.prototype);

//Then the ChildObject received its own methods by chaining them onto its prototype:
Child.prototype.methodeName = (() => `...`);

/*It's possible to override an inherited method. It's done the same way - by adding a method 
to ChildObject.prototype using the same method name as the one to override. 
Here's an example of Bird overriding the eat() method inherited from Animal*/
let firstChild = new Child()
Child.prototype.eat = (() => `We eat only Halal`)

console.log(firstChild.age());
console.log(firstChild.eat());

/*If you have an instance let firstChild = new Bird(); and you call firstChild.eat(), this is how JavaScript looks for the method on the prototype chain of firstChild:

firstChild => Is eat() defined here? No.
Child => Is eat() defined here? => Yes. Execute it and stop searching.
Parent => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
*/
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// Challenge

/*Override the fly() method for Penguin so that it returns the string Alas, 
this is a flightless bird.*/

//Setup

function BirdV(){ };
BirdV.prototype.fly = (() => `This Bird flies really long distance!`);

function Penguin() { }
Penguin.prototype = Object.create(BirdV.prototype);
Penguin.prototype.constructor = BirdV;

// Overriding fly method for Penguin;
Penguin.prototype.fly = (() => `Alas this is a flightless Bird`);

let penguin = new Penguin();
console.log(penguin.fly());




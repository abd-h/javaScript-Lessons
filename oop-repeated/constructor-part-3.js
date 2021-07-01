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

/*Use a Mixin to Add Common Behavior Between Unrelated Objects

As you have seen, behavior is shared through inheritance. However, there are 
cases when inheritance is not the best solution. Inheritance does not work well 
for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not 
a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use 
a collection of functions.*/

let flyMixin = ((obj) => obj.fly = (() => `Flying, woosh! `));
//The flyMixin takes any object and gives it the fly method.

let bird = {
    name: `Donald`,
    numLegs: 4
};

let plane = {
    model: `777`,
    numPassangers: 524
};

flyMixin(bird);
flyMixin(plane);

console.log(bird.fly());
console.log(plane.fly());

/*The console would display the string Flying, wooosh! twice, once for each .fly() call.

Note how the mixin allows for the same fly method to be reused by unrelated 
objects bird and plane.*/


//Challenge
/*Create a mixin named glideMixin that defines a method named glide. 
Then use the glideMixin to give both bird and boat the ability to glide.*/

let glideMixin = ((obj) => obj.glide = (() => `we glidding everyone`));
let boat = {
    name:  `Warrior`,
    type: `Race Boat`
};

let eagle = {
    name: `Owl`,
    numLegs: 2
};

glideMixin(boat);
glideMixin(eagle);

console.log(boat.glide());
console.log(eagle.glide());

/*Use Closure to Protect Properties Within an Object from Being Modified Externally

In the previous challenge, bird had a public property name. It is considered public 
because it can be accessed and changed outside of bird's definition.*/

console.log(bird.name);

bird.name = `Duffy`; // name can be changed... its puplic
console.log(bird.name);// returns Duffy

/* Therefore, any part of your code can easily change the name of bird to any value. 
Think about things like passwords and bank accounts being easily changeable by any 
part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within 
the constructor function. This changes the scope of that variable to be within the constructor 
function versus available globally. This way, the variable can only be accessed and changed 
by methods also within the constructor function.*/

function Reptile(){
    let hatchedEggs =10;
    this.getHatchedEggCount = function(){
        return hatchedEggs;
    }
}
let snake = new Reptile();
console.log(snake.getHatchedEggCount());// returns 10

/*Here getHatchedEggCount is a privileged method, because it has access to the private 
variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as 
getHatchedEggCount. In JavaScript, a function always has access to the context in which it was 
created. This is called closure.

Challenge
Change how weight is declared in the Bird function so it is a private variable. 
Then, create a method getWeight that returns the value of weight 15.

function Reptile() {
  this.weight = 15;


}*/

function Rept(){
    let weight =15;
    this.getWeight = (() => weight);
}

let crocks = new Rept();
console.log(crocks.getWeight());


/*Understand the Immediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared:*/

(function (){console.log("chirp, chirp, chirp")})();

/*This is an anonymous function expression that executes right away, 
and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. 
The two parentheses () at the end of the function expression cause it to be 
immediately executed or invoked. 

This pattern is known as an immediately invoked function expression or IIFE.


Challenge

Rewrite the function makeNest and remove its call so instead it's an anonymous 
immediately invoked function expression (IIFE).

function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();*/

(() => console.log("A cosy nest is ready"))();


/*Use an IIFE to Create a ModulePassed

An immediately invoked function expression (IIFE) is often used to group 
related functionality into a single object or module. For example, an earlier 
challenge defined two mixins:*/

function speedMixin(obj) {
    obj.speed = (() => `0 to 200mph in 10 seconds`);
}
function weightMixin(obj) {
    obj.weight = (() => `1 tone`);
}

//We can group these mixins into a module as follows:

let motionMode = (function (){
    return {
    speedMixin: function(obj) {
    obj.speed = (() => `0 to 200mph in 10 seconds`)
    },
    weightMixin:  function (obj) {
    obj.weight = (() => `1 tone`);
}
}})();

let f1Cars = {
    name: `Mercedes Benz`,
    driver: `Lewis Hamilton`
};
 let f2Cars = {
     make: `Farare`,
     driver: `Michael Schumaker`
 };
/*Note that you have an immediately invoked function expression (IIFE) 
that returns an object motionModule. This returned object contains all of 
the mixin behaviors as properties of the object. The advantage of the module pattern 
is that all of the motion behaviors can be packaged into a single object that can then 
be used by other parts of your code. Here is an example using it:*/

motionMode.speedMixin(f1Cars)
motionMode.weightMixin(f1Cars)
console.log(f1Cars.speed());
console.log(f1Cars.weight());

// Challenge

/*Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. 
funModule should return an object.

Setup
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};*/

let funModule = (function(){
    return {
        isCuteMixin:(() => true),
        
        singMixin: (() => `${console.log("Singing to an awesome tune")}`)
    }
})();






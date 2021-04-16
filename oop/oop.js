/**             Object Oriented Programming
 *          
 * OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes are used to organize code to describe things and what they can do.

In this course, you'll learn the basic principles of OOP in JavaScript including the this keyword, prototype chains, constructors, and inheritance. 

            Create a Basic JavaScript Object
Think about things people see every day, like cars, shops, and birds. These are all objects: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or properties, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. Here's an example using these concepts to create a duck object:*/

let duck = {
    name: "Aflec",
    numLegs: 2
};
/**This duck object has two property/value pairs: a name of Aflac and a numLegs of 2. 
 * 
 * Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
*/
let dog = {
    name: "Terrier",
    numLegs: 4
};

/**Use Dot Notation to Access the Properties of an Object
The last challenge created an object with various properties. Now you'll see how to access the values of those properties. Here's an example: */

console.log(duck.name);// returns "Aflec"
/**Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of Aflac.
 * Print both properties of the dog object to your console.
 */
console.log(dog.name, dog.numLegs); //returns "Terrier", 4

/**         Create a Method on an Object
Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method: */
let duck2 = {
    name: "Hero",
    numLegs: 2,
    sayName:  function() {
        return "The name of this duck is" + duck.name + " .";
    }
};

/**The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name. The next challenge will cover another way to do this.

Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs(); */

let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs() {
        return "This dog has "+ dog2.numLegs + " legs."
    }
};

/**         Make Code More Reusable with the this Keyword
The last challenge introduced a method to the duck object. It used duck.name dot notation to access the value for the name property within the return statement: 
sayName: function() {
    return "The name of this duck is " + duck.name + " .";
}

While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the this keyword:*/

let duck3 = {
    name: "Featherson",
    numLegs: 2,
    sayHi: function() {
        return "Hi my name is " + this.name + " and I'm cool duck";
    }
};

/**this is a deep topic, and the above example is only one way to use it. In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.
 * 
 * Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
 

let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog3.numLegs + " legs.";}
};

dog.sayLegs();*/

let dog3 ={
    name: "Spotify",
    numLegs: 2,
    sayLegs() {
        return "This dog has " + this.numLegs + " legs";
    }
};
/**         Define a Constructor Function
Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

 */
function Bird() {
    this.name = "Albert";
    this.color = "Blue";
    this.numLegs = 2;
}

/**This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

        Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
        Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
        Constructors define properties and behaviors instead of returning a value as other functions might.
        
        Create a constructor, Dog4, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
*/
function Dog4() {
    this.name = "Sniffgrass";
    this.color = "Orange"
    this.numLegs = 4;
}

/**Use a Constructor to Create Objects
Here's the Bird constructor from the previous challenge: 

function Bird() {
    this.name = "Albert";
    this.color = blue;
    this.numLegs = 2;
}*/
let blueBird = Bird();

/**NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;

Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.*/
let hound = new Dog4();
console.log(hound);

/**         Extend Constructors to Receive Arguments
The Bird and Dog constructors from the last challenge worked well. However, notice that all Birds that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:

 */

let swan = new Bird();
swan.name = "Carlos";
swan.color = "White";
console.log(swan);

/**Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters: */

function Birds(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

/**Then pass in the values as arguments to define each unique bird into the Bird constructor: let cardinal = new Bird("Bruce", "red"); This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties: */
let cardinal = new Birds("Bruce", "Red")
console.log(cardinal);

/**The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.
 * 
 * Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
 */
function Adog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Adog("Screamer", "Grey");
console.log(terrier);

/**Verify an Object's Constructor with instanceof
Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example: */

let Bird1 = function(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let crow = new Bird1("Tiker", "Silver");
console.log(crow instanceof Bird1); 
/**This instanceof method would return true.

If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor: */

let bird = {
    name: "zizy",
    color: "Multi",
    numLegs: 2
};
console.log(bird instanceof Bird1 );
/**This instanceof method would return false. 
 * 
 * Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
*/
function House(numBedrooms) {
    this.numBedrooms = numBedrooms
}
let myHouse = new House(5);
console.log(myHouse instanceof House);

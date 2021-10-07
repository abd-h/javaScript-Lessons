/*Use Inheritance So You Don't Repeat Yourself
There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:*/

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
/*The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:
*/
function Property() { };
Property.prototype = {
    constructor: Property,
    eat(){return `nom nom nom`},
    numberOfBedrooms(){
        return `${this.name} has four bedrooms in total`
    },
    describe(){return `${this.name} is located in ${this.location}`}
}
function House(name, location) {
    this.name = name;
    this.location = location;
}
function Flat(name, location = 'Bristol'){
    this.name = name;
    this.location = location;
}
House.prototype = Object.create(Property.prototype)
Flat.prototype = Object.create(Property.prototype)

let house = new House('County Palace', 'Birmingham');
console.log(house.numberOfBedrooms()); // County Palace has four bedrooms in total

let flat = new Flat('Peppermint Height', 'LiverPool');
console.log(flat.describe());//Peppermint Height is located in Cardif


/*The numberOfbedRooms is repeated in two places. The code can be edited to follow 
the DRY principle by creating a supertype (or parent) called property:
*/




/*Inherit Behaviors from a SupertypePassed
In the previous challenge, you created a supertype called Animal that defined 
behaviors shared by all animals:*/
function Animal(){ }
Animal.prototype = {
    constructor: Animal,
    eat()  {return `nom nom nom`},
    describe(){return `Bird Family`}
}


/*This and the next challenge will cover how to reuse the methods of Animal inside 
Bird and Dog without defining them again. It uses a technique called inheritance. 
This challenge covers the first step: make an instance of the supertype (or parent). 
You already know one way to create an instance of Animal using the new operator:
let myAnimal = new Animal('Crow')
*/ 
let animal = Object.create(Animal.prototype);
/*Object.create(obj) creates a new object, and sets obj as the new object's prototype. 
Recall that the prototype is like the "recipe" for creating an object. By setting the prototype 
of animal to be the prototype of Animal, you are effectively giving the animal instance the 
same "recipe" as any other instance of Animal.*/
console.log(animal.eat());
console.log(animal instanceof Animal);//The instanceof method here would return true.
//.............................................................................

/*Use Object.create to make two instances of Animal named duck and beagle.*/
let duckFour = Object.create(Animal.prototype)
let beagle = Object.create(Animal.prototype)
let duc = duckFour instanceof Animal
console.log(duckFour.eat());
console.log(duckFour.describe());
console.log(beagle.eat());
console.log(beagle.describe());
console.log(duc);

/*Set the Child's Prototype to an Instance of the ParentPassed
In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);
Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

let duck = new Bird("Donald");
duck.eat();
duck inherits all of Animal's properties, including the eat method.
.........................................................................................................*/
{
/*
Reset an Inherited Constructor PropertyPassed
When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:*/
 function Animal(){ }
 Animal.prototype = {
     constructor: Animal,
     describe() {
        return `Lives all over World`
     },
     eats(){
         return `Eats other small animals or rodents`
     },
     habitat() {
         return `Every continents`
     }
 }
 function Bird() {}


 Bird.prototype = Object.create(Animal.prototype);
 let bird = Object.create(Bird.prototype)
 console.log(bird.eats());
 Bird.prototype.eats = () => `Hunts Gazel and Antolope`
 console.log(bird.eats());
 Bird.prototype.constructor = Bird
 console.log(bird.constructor === Bird);
 // ******* END **********
}

//Add Methods After Inheritance
{
/*A constructor function that inherits its prototype object from a supertype constructor 
    function can still have its own methods in addition to inherited methods.

    For example, Bird is a constructor that inherits its prototype from Animal:*/
    function Animal() { }
    Animal.prototype.eat = () => {
        `Eats wheat`
    }

    function Bird(){ }
    
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;

    /*
    In addition to what is inherited from Animal, you want to add behavior that is 
    unique to Bird objects. Here, Bird will get a fly() function. Functions are added 
    to Bird's prototype the same way as any constructor function:*/

    Bird.prototype = {
        constructor: Bird,
        name: "Crow",
        color: "black and gray",
        fly(){
            return `flying wooosh`
        },
        eat(){
            return `Eats Whole Grain`
        }
    }
    let bird = Object.create(Bird.prototype)
    console.log(bird.constructor === Bird);
    console.log(bird.fly());//would display the string "flying wooosh"
    console.log(bird.eat());//would display the string  "Eats Whole Grain"
}
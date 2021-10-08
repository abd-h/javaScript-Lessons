/*Use Inheritance So You Don't Repeat Yourself
There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:*/
function Bird(){ }
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
function Dog(){ }
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

    
    {
    //Challenge
    /*Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.*/

    function Animal(){ };
    Animal.prototype.eat = () => `nom nom nom`;

    function Dog(){ };
    Dog.prototype = Object.create(Animal.prototype)
    Dog.prototype.constructor = Dog;
    Dog.prototype.bark = () => `Woof!`;

    let beagle = new Dog();
    console.log(beagle.eat());
    console.log(beagle.bark());
    }
    //.....................  END ...............................
}

{
    /*Override Inherited Methods
In previous lessons, you learned that an object can inherit its behavior (methods) from 
another object by referencing its prototype object:

ChildObject.prototype = Object.create(ParentObject.prototype);
Then the ChildObject received its own methods by chaining them onto its prototype:

ChildObject.prototype.methodName = function() {...};
It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal:
*/
function Animal(){ }
Animal.prototype.eat = () => `nom nom nom`;

function Bird(){ }
Bird.prototype =Object.create(Animal.prototype)
Bird.prototype.constructor = Bird;
Bird.prototype.eat = () => `peck peck peck`;

let duck = new Bird();
console.log(duck.eat());

/*If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.*/

//.....................  END ...............................
}

{
    /*Use a Mixin to Add Common Behavior Between Unrelated ObjectsPassed
As you have seen, behavior is shared through inheritance. However, there are cases 
when inheritance is not the best solution. Inheritance does not work well for unrelated 
objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane 
and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use 
a collection of functions.*/

let flyMixin = obj => {
    obj.fly = () => `Flying Wooooosh`
}

let bird = {
    name: `Seagul`,
    location: `Londom`
};

let eagle = {
    name: `Apax`,
    location: `Alps Mountain range`
};
flyMixin(bird);
flyMixin(eagle);

/*Here bird and eagle are passed into flyMixin, which then assigns the fly function to each object. 
Now bird and eagle can both fly:*/
console.log(bird.fly());
console.log(eagle.fly());
/*The console would display the string Flying, wooosh! twice, once for each .fly() call.

Note how the mixin allows for the same fly method to be reused by unrelated objects bird and eagle.*/

    {// Challenge
        /*Create a mixin named glideMixin that defines a method named glide. 
        Then use the glideMixin to give both bird and boat the ability to glide.*/
        let bird = {
            name: "Donald Duck",
            attribute: "Can fly"
        };

        let speedBoat = {
            name: "Yamaha",
            Attribute: 'Super fast on water'
        }

        function glideMixin(obj){
        return obj.glide = function(){
                return "I have the ability to glide"
            }
        }
        glideMixin(bird)
        glideMixin(speedBoat)
        console.log(bird.glide());
        console.log(speedBoat.glide());

        {// ES6 arrow fuction version
            let bird = {
                name: "Donald Duck",
                attribute: "Can fly"
            };

            let speedBoat = {
                name: "Yamaha",
                Attribute: 'Super fast on water'
            }

            let glideMixin = (obj => obj.glide = () => `I haave the ability to glide effortlessly`)
            glideMixin(bird);
            glideMixin(speedBoat);

            console.log(bird.glide());
            console.log(speedBoat.glide());
        
        }
    }
//.....................  END ...............................
}

{
    /*Use Closure to Protect Properties Within an Object from Being Modified Externally
    In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

    bird.name = "Duffy";
    Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

    The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.*/

    function Bird(){
        let hatchedEggs = 10;
        this.getHatchedEggCount = () => hatchedEggs;
    }
    let ducky = new Bird();
    console.log(ducky.getHatchedEggCount());
    
    /*Here getHatchedEggCount is a privileged method, because it has access to the private variable 
    hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 
    In JavaScript, a function always has access to the context in which it was created. This is called closure.*/
    
    {
        /*Challenge
        Change how weight is declared in the Bird function so it is a private variable. 
        Then, create a method getWeight that returns the value of weight 15.

        function Bird() {
            this.weight = 15;
        }*/

        function Bird(){
            let weight = 15;

            this.getWeight = () => weight;
        }
        let privetWeight = new Bird();
        console.log(privetWeight.getWeight());
    }
//.....................  END ...............................
}

{
    /*Understand the Immediately Invoked Function Expression (IIFE)Passed
    A common pattern in JavaScript is to execute a function as soon as it is declared:

    (function () {
    console.log("Chirp, chirp!");
    })();
    This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

    Note that the function has no name and is not stored in a variable. The two parentheses () at the end of 
    the function expression cause it to be immediately executed or invoked. This pattern is known as an 
    immediately invoked function expression or IIFE.

    Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked 
    function expression (IIFE).
    
    function makeNest() {
        console.log("A cozy nest is ready");
    }
    makeNest();*/
    (() => console.log(`A cozy nest is ready`))();

    /*Use an IIFE to Create a Module
    An immediately invoked function expression (IIFE) is often used to group related functionality 
    into a single object or module. For example, an earlier challenge defined two mixins:*/

    function glideMixin(obj){
        return obj.glide = function(){
            return "Gliding on the water"
        }
    }

    function flyMixin(obj){
        return obj.fly = function(){
            return "Flying, woosh"
        }
    }
    //We can group these mixins into a module as follows:
    let bird = {
                name: "Donald Duck",
                attribute: "Can fly"
            };

            let speedBoat = {
                name: "Yamaha",
                Attribute: 'Super fast on water'
            }
    let motionModule = (function(){
        return {
            flyMixin: function(obj){
                obj.fly = function(){
                    return "Flying, Woosh"
                }
            },
            glideMixin: function(obj){
                obj.glide = function(){
                    return "Gliding on water"
                }
            }
        }
    })();
    motionModule.flyMixin(bird)
    motionModule.glideMixin(speedBoat)
    console.log(bird.fly());
    console.log(speedBoat.glide());

    {
        //We can group these mixins into a module as follows:
        // With arrow functions;
        let bird = {
                name: "Donald Duck",
                attribute: "Can fly"
            };

            let speedBoat = {
                name: "Yamaha",
                Attribute: 'Super fast on water'
            }
        let flyMixin = (obj => obj.fly = (() => `Flying with a Red Arrows`));
        let glideMixin = (obj => obj.glide = (() => `Gliding on water`));
        flyMixin(bird);
        glideMixin(speedBoat);
        console.log(bird.fly());
        console.log(speedBoat.glide());

        let module = (() => {
            return {
                flyMixin(obj){
                    obj.fly = (() => `Flying with blue and red arrows`)
                },
                glideMixin(obj) {
                    obj.glide = (() => `gliding via the river`)
                }
            }
        })();
        module.flyMixin(bird)
        module.glideMixin(speedBoat)
        console.log(bird.fly());
        console.log(speedBoat.glide());
    }

    /*
    Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. 
    funModule should return an object.*/

        let isCuteMixin = function(obj) {
            obj.isCute = function() {
                return true;
            };
        };
        let singMixin = function(obj) {
             obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        };

        let funModule = (() => {
            return {
                singMixin(obj){
                    obj.sing = (() => console.log("Singing to an awesome tune") )
                },
                isCuteMixin(obj){
                    obj.glide = () => true
                }
            }
        })();
        

}




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
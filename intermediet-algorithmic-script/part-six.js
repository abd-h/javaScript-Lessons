    /*          Arguments Optional

    Create a function that sums two arguments together. 
    If only one argument is provided, then return a function 
    that expects one argument and returns the sum.

    For example, addTogether(2, 3) should return 5, and addTogether(2) 
    should return a function.

    Calling this returned function with a single argument will then return the sum:

    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.

    If either argument isn't a valid number, return undefined.

    addTogether(2, 3) should return 5.

    addTogether(23, 30) should return 53.

    addTogether(5)(7) should return 12.

    addTogether("http://bit.ly/IqT6zt") should return undefined.

    addTogether(2, "3") should return undefined.

    addTogether(2)([3]) should return undefined.*/
const addTogether = (a, b ) => {
    function r(c){
        return Number.isInteger(c);
    }
    if(!r(a)) {
        return undefined
    }
    else if(r(a) && r(b)) {
        return a + b;
    }
    else if(!b){
        return function args(n) {
            if(r(n)){
                return a + n
            }
        }
    }
}    
console.log(addTogether(2,3));
console.log(addTogether(5)(7));
console.log(addTogether(2, "3"));
console.log(addTogether(23, 30));

// addTogether answered with arrow functions and ternary operator
function addTogether1(a, b){
    let number = (c => Number.isInteger(c))
    return (!number(a))?  undefined
              :(number(a) && number(b))? a + b
              :(!b)? ((c => (number(c))? a + c : undefined))
              : undefined 
}
console.log(addTogether1(2)(6));
console.log(addTogether1(23, 30));
console.log(addTogether1(5)(7));
console.log(addTogether1("http://bit.ly/IqT6zt"));
console.log(addTogether1(2)([3]));
/*************************************************************
 * Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take 
an argument must accept only one argument and it has to be a string. These methods 
must be the only available means of interacting with the object.


Object.keys(bob).length should return 6.

Passed
bob instanceof Person should return true.

Passed
bob.firstName should return undefined.

Passed
bob.lastName should return undefined.

Passed
bob.getFirstName() should return the string Bob.

Passed
bob.getLastName() should return the string Ross.

Passed
bob.getFullName() should return the string Bob Ross.

bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").

bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").

Passed
bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").

bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").

bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").


 */

function Person(firstAndLast){
    let fullName = firstAndLast;
    let firstName = firstAndLast.split(' ')[0]
    let lastName = firstAndLast.split(' ')[1]
    this.getFirstName = () => firstName;
    this.getLastName = () =>lastName;
    this.getFullName = () => `${this.getFirstName()} ${this.getLastName()}`
    this.setFirstName = function(first) {
        firstName = first
        return firstName
    };
    this.setLastName = function(last) {
        lastName = last
        return lastName
    }
    this.setFullName = function (firstAndLast) {
        firstName = firstAndLast.split(" ")[0]
        lastName = firstAndLast.split(" ")[1]
        fullName = `${firstName} ${lastName}`
      return  fullName;
    }
    
}

let bob = new Person("Bob Ross");
let s = Object.keys(bob);
console.log(s); //returns ['getFirstName', 'getLastName', 'getFullName', 'setFirstName', 'setLastName', 'setFullName']
console.log(Object.keys(bob).length); // returns 6
console.log(bob instanceof Person); // true
console.log(bob.firstName); // undefined
console.log(bob.lastName) // return undefined.
console.log(bob.getFirstName()); //returns Bob.
console.log(bob.getLastName());// returns Ross
console.log(bob.getFullName()); // returns Bob Ross
bob.setFirstName("Haskell");
console.log(bob.getFullName());//returns the string Haskell Ross after bob.setFirstName("Haskell").
bob.setLastName("Curry");
console.log(bob.getFullName()); //bob.getFullName() returns the string Haskell Curry after bob.setLastName("Curry").
bob.setFullName("Christiano Ronaldo");
console.log(bob.getFullName()); //bob.getFullName()  returns the string Christiano Ronaldo after bob.setFullName("Christiano Ronaldo").
console.log(bob.getFirstName()); // returns the string Christiano after bob.setFullName("Christiano Ronaldo").
console.log(bob.getLastName()); // returns the string Ronaldo after bob.setFullName("Christiano Ronaldo").

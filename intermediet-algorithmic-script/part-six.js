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


 */
let bird = {name: "alsa"}
function Person(firstAndLast){
    let fullName = firstAndLast;
    let firstName = firstAndLast.split(' ')[0]
    let lastName = firstAndLast.split(' ')[1]
    this.getFirstName = () => firstName;
    this.getLastName = () =>lastName;
    this.getFullName = () => fullName
    this.setFirstName = function(first) {
        firstName = first.concat(" ", lastName)
        return firstName
    };
    this.setLastName = function(last) {
        lastName = last.concat(" ", firstName)
        return lastName
    }

    this.setFullName = function (firstAndLast) {
      fullName = firstAndLast
      return fullName
    }
    // this.setLastName = (last) => fullName.replace(fullName.split(" ").slice(1), last);
}
// Person.prototype = {
//     constructor: Person,
//     getFirstName() {return this.firstAndLast.split(" ").slice(0,1)},
    
//     // getFullName() {return this.getFirstName().concat(this.getLastName()).join(" ")}
    
// }
let bob = new Person("Bob Ross");
console.log(bob instanceof Person);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskey"));
console.log(bob.getFirstName());
console.log(bob.setLastName("Cury"));
console.log(bob.getLastName());
console.log(bob.setFullName("abdalla Hussein"));
// console.log(bob.setLastName());

// console.log(bob.getFirstName());
// console.log(bob.getFullName());

// let setFirstName = (first => first.getFirstName = () => "Haskel");
// let s = setFirstName(bird)

// let s2 = setFirstName(bob)
// console.log(bob.getFirstName());
// console.log(bob.getFullName());


let s = 'Abdalla, Hussein';
let first = s.split(" ")[0],
 last = s.split(" ")[1];
console.log(first, last);

{
    
}
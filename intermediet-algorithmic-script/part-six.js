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
let Person = ((firstAndLast) => {
    this.firstAndLast = firstAndLast;
    this.getFullName = (() => firstAndLast)
})
let person = new Person('Bob Ross');
console.log(Object.keys(person));

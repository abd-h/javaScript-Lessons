    /* 
        covered topics
        .unshift()
        .push()
        .pop()
        .shift()
       

    Add Items to an Array with push() and unshift()

    An array's length, like the data types it can contain, is not fixed. 
    Arrays can be defined with a length of any number of elements, 
    and elements can be added or removed over time; in other words, 
    arrays are mutable. In this challenge, we will look at two methods 
    with which we can programmatically modify an array: Array.push() 
    and Array.unshift().

    Both methods take one or more elements as parameters and add those elements 
    to the array the method is being called on; the push() method adds elements to 
    the end of an array, and unshift() adds elements to the beginning. Consider the following:*/

    let twentyThree = "XIII";
    console.log(twentyThree);// returns XIII
    let romanNumerals = ["XXI", "XXII"];
    romanNumerals.unshift("XIX", "XX");
    console.log(romanNumerals);
    //returns  ["XIX", "XX", "XXI", "XXII"]

    romanNumerals.push(twentyThree);
    console.log(romanNumerals);
    /*romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. 
    Notice that we can also pass variables, which allows us even greater flexibility 
    in dynamically modifying our array's data.
    --------------------------------------------------------

    Q) We have defined a function, mixedNumbers, which we are passing an array 
    as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' 
    to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array 
    contains representations of the numbers 1-9 in order.

    function mixedNumbers(arr) {
    // Only change code below this line

    // Only change code above this line
    return arr;
    }

    console.log(mixedNumbers(['IV', 5, 'six']));*/

    function mixedNumbers(arr) {
        arr.unshift('I', 2, 'three');
        arr.push(7, 'VIII', 9);
        return arr;
    }

    console.log(mixedNumbers(['IV', 5, 'six']));

    /*Remove Items from an Array with pop() and shift()

    Both push() and unshift() have corresponding methods that are nearly functional 
    opposites: pop() and shift(). As you may have guessed by now, instead of adding, 
    pop() removes an element from the end of an array, while shift() removes an element 
    from the beginning. 

    The key difference between pop() and shift() and their cousins push() and unshift(), 
    is that neither method takes parameters, and each only allows an array to be 
    modified by a single element at a time.

    Let's take a look:*/

    let greetings = ["What's up", "hello", "see ya!"];
    greetings.pop();
    console.log(greetings);
    //greetings would have the value ['whats up?', 'hello'].

    greetings.shift();
    console.log(greetings);
    //greetings would have the value ['hello'].

    //We can also return the value of the removed element with either method like this:


    let popped = greetings.pop();
    console.log(popped);

    /*greetings would have the value [], and popped would have the value hello.
    ____________________________________________________________

    We have defined a function, popShift, which takes an array as an argument 
    and returns a new array. Modify the function, using pop() and shift(), to remove 
    the first and last elements of the argument array, and assign the removed 
    elements to their corresponding variables, so that the returned array contains their values.

    function popShift(arr) {
    let popped; // Change this line
    let shifted; // Change this line
    return [shifted, popped];
    }

    console.log(popShift(['challenge', 'is', 'not', 'complete']));
    */

    function popShift(arr) {
        let popped = arr.pop();
        let shifted = arr.shift();
        return [popped,shifted];

    }
    console.log(popShift(['challenge', 'is', 'not', 'complete']));

    
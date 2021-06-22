    /*Explore Differences Between the var and let Keywords

    One of the biggest problems with declaring variables with 
    the var keyword  is that you can overwrite variable declarations 
    without an error.
    */
    var camper = "James";
    var camper = "David";
    console.log(camper)

    /*Here the console will display the string David.

    As you can see in the code above, the camper variable is originally 
    declared as James and then overridden to be David. In a small application, 
    you might not run into this type of problem, but when your code becomes larger, 
    you might accidentally overwrite a variable that you did not intend to overwrite. 

    Because this behavior does not throw an error, searching and fixing bugs 
    becomes more difficult.
    A new keyword called let was introduced in ES6 to solve this potential issue 
    with the var keyword. 
    If you were to replace var with let in the variable declarations of the code above, 
    the result would be an error.

    */

    let comper = "James";
    // let comper = "David";
    console.log(comper);

    /*This error can be seen in the console of your browser. So unlike var, when using let, 
    a variable with the same name can only be declared once. Note the "use strict". 
    This enables Strict Mode, which catches common coding mistakes and 
    "unsafe" actions. For instance:*/

    "use strict";
    let x = 3.14;
    console.log(x);

    let catName;
    let quote;
    function catTalk() {
        "use strict";
        catName = "Oliver";
    return quote = `my name is ${catName} meo`;
    }
    console.log(catTalk());

    /*  Compare Scopes of the var and let Keywords

    When you declare a variable with the var keyword, it is declared 
    globally, or locally if declared inside a function.

    The let keyword behaves similarly, but with some extra features. 
    When you declare a variable with the let keyword inside a block, 
    statement, or expression, its scope is limited to that block, statement, 
    or expression.

    For example:
    */
    var numArray = [];
    for (var i  =0; i < 3; i++){
        numArray.push(i);
    }
    console.log(numArray);
    // returns [0, 1, 2]
    console.log(i);
    // returns 3
    /*With the var keyword, i is declared globally. So when i++ is executed, 
    it updates the global variable. This code is similar to the following:*/
    var newArray = [];
    var i;
    for (i = 0; i < 3; i++){
        newArray.push(i);
    }

    /*This behavior will cause problems if you were to create a function 
    and store it for later use inside a for loop that uses the i variable. 
    This is because the stored function will always refer to the value 
    of the updated global i variable.
    */
    var printNumberTwo;
    for (var i = 0; i < 3; i++) {
        if(i === 2){
            printNumberTwo = function () {
                return i;
            };
        }
    }
    console.log(printNumberTwo());

    /*Here the console will display the value 3.

    As you can see, printNumTwo() prints 3 and not 2. 
    This is because the value assigned to i was updated 
    and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:
    */
    let printNumTwo;
    for (let j = 0; j< 3; j++){
        if (j === 2) {
            printNumTwo = function(){
            return j;
        }
        }
    }
    console.log(printNumTwo());
    //console.log(j);
    /*Here the console will display the value 2, and an error that i is not defined.

    i is not defined because it was not declared in the global scope. j
    j is only declared within the for loop statement. printNumTwo() returned 
    the correct value because three different i variables with unique 
    values (0, 1, and 2) were created by the let keyword within the loop statement.

    Fix the code so that i declared in the if statement is a separate 
    variable than i declared in the first line of the function. 
    Be certain not to use the var keyword anywhere in your code.

    This exercise is designed to illustrate the difference between how var 
    and let keywords assign scope to the declared variable. 

    When programming a function similar to the one used in this exercise, 
    it is often better to use different variable names to avoid confusion.

    function checkScope() {
    var i = 'function scope';
    if (true) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
    }*/

    function checkScope() {
        let i = "function scope";
        if(true) {
            let b = "block scope";
            console.log("block scope");
            
        }
        console.log("function scope i is: ", i);
        return i;
    }
    console.log(checkScope());

    /* Declare a Read-Only Variable with the const Keyword

    The keyword let is not the only new way to declare variables. In ES6, 
    you can also declare variables using the const keyword.

    const has all the awesome features that let has, with the added bonus that 
    variables declared using const are read-only. They are a constant value, 
    which means that once a variable is assigned with const, it cannot be reassigned.*/

    const FAV_PET = "Cats";
    // FAV_PET = "Dog"; returns error;

    /*The console will display an error due to reassigning the 
    value of FAV_PET.

    As you can see, trying to reassign a variable declared with 
    const will throw an error. You should always name variables 
    you don't want to reassign using the const keyword. 

    This helps when you accidentally attempt to reassign 
    a variable that is meant to stay constant. 

    A common practice when naming constants is to use all uppercase letters, 
    with words separated by an underscore.

    Note: It is common for developers to use uppercase variable identifiers 
    for immutable values and lowercase or camelCase for mutable 
    values (objects and arrays). In a later challenge you will see 
    an example of a lowercase variable identifier being used for an array.

    Change the code so that all variables are declared using let or const. Use let 
    when you want the variable to change, and const when you want the variable 
    to remain constant. Also, rename variables declared with const to conform to 
    common practices, meaning constants should be in all caps.

    function printManyTimes(str) {

    // Only change code below this line

    var sentence = str + " is cool!";
    for (var i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }

    // Only change code above this line

    }
    printManyTimes("freeCodeCamp");

    */
    function printManyTimes(str) {
        const SENTENCE =    `${str} is cool!.`;
        for (let i = 0; i < str.length; i+=2){
            
        console.log(SENTENCE);
            
        }
        return SENTENCE;
    }
    console.log(printManyTimes("Viva Villa Real"));

    /*  Mutate an Array Declared with consP

    The const declaration has many use cases in modern JavaScript.

    Some developers prefer to assign all their variables using const by default, 
    unless they know they will need to reassign the value. 
    Only in that case, they use let.

    However, it is important to understand that objects 
    (including arrays and functions)  assigned to a variable 
    using const are still mutable. Using the const declaration 
    only prevents reassignment of the variable identifier.*/

    const s = [5, 6, 7];
    // s = [1,2,3];
    s[2] = 45;
    console.log(s);
    console.log(typeof s);
    /*s = [1, 2, 3] will result in an error. The console.log will display 
    the value [5, 6, 45].

    As you can see, you can mutate the object [5, 6, 7] itself and the 
    variable s will still point to the altered array [5, 6, 45]. Like all arrays, 
    the array elements in s are mutable, but because const was used, 
    you cannot use the variable identifier s to point to a different array 
    using the assignment operator.

    An array is declared as const s = [5, 7, 2]. Change the array 
    to [2, 5, 7] using various element assignments.

    const s = [5, 7, 2];
    function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid

    // Only change code above this line
    }
    editInPlace();
    */
    const s1 = [5,7,2];
    function editInPlace() {
        let s2 = s1
        let removed = s2.pop();
        s2.unshift(removed);
        return s2; 
    }
    console.log(editInPlace());

        /*  Prevent Object Mutation
        
    As seen in the previous challenge, const declaration alone 
    doesn't really protect your data from mutation. 
    To ensure your data doesn't change, JavaScript provides 
    a function Object.freeze to prevent data mutation.

    Once the object is frozen, you can no longer add, update, or 
    delete properties from it. 

    Any attempt at changing the object will be rejected without an error.
    */

    let obj =
        {
            name : "FCC",
            review: "Awsome"
        };
        Object.freeze(obj);
        obj.review = "Average";
        obj.newProp = "Test";
        console.log(obj);

    /*The obj.review and obj.newProp assignments will result in errors, 
    and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

    In this challenge you are going to use Object.freeze 
    to prevent mathematical constants from changing. 
    You need to freeze the MATH_CONSTANTS object so that no one is able 
    to alter the value of PI, add, or delete properties.

    function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line


    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();*/

    function freezeObj() {
        const MATH_CONSTANTS ={
            PI: 3.14
        };
    Object.freeze(MATH_CONSTANTS);



    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();
    console.log(freezeObj());


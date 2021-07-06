/*
Learn About Functional Programming

Functional programming is a style of programming where solutions are simple, 
isolated functions, without any side effects outside of the function scope: 
INPUT -> PROCESS -> OUTPUT

Functional programming is about:

Isolated functions - there is no dependence on the state of the program, 
which includes global variables that are subject to change

Pure functions - the same input always gives the same output

Functions with limited side effects - any changes, or mutations, to the state 
of the program outside the function are carefully controlled

The members of freeCodeCamp happen to love tea.

In the code editor, the prepareTea and getTea functions are already defined for you. 
Call the getTea function to get 40 cups of tea for the team, and store them 
in the tea4TeamFCC variable.
*/

//Function that returns a string representing a cup of green tea
const prepareTea = () => "greenTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
console.log(prepareTea());
let p = prepareTea();
console.log(p);
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);

/*
Understand Functional Programming Terminology

The FCC Team had a mood swing and now wants two types of tea: 
green tea and black tea. 

General Fact: Client mood swings are pretty common.

With that information, we'll need to revisit the getTea function from last 
challenge to handle various tea requests. We can modify getTea to accept 
a function as a parameter to be able to change the type of tea it prepares. 
This makes getTea more flexible, and gives the programmer more control 
when client requests change.

But first, let's cover some functional terminology:

Callbacks are the functions that are slipped or passed into another function 
to decide the invocation of that function. You may have seen them passed to 
other methods, for example in filter, the callback function tells JavaScript the 
criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, 
or returned from another function just like any other normal value, are called 
first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return 
value are called higher order functions.

When functions are passed in to or returned from another function, then those 
functions which were passed in or returned can be called a lambda.
*/
/*
Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC 
and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been 
modified so it now takes a function as the first argument.

Note: The data (the number of cups of tea) is supplied as the last argument. 
We'll discuss this more in later lessons.
*/

//Function that returns a string representing a cup of green tea
const prepareGreenTea = () => `green Tea`;

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => `black Tea`;

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

const getTeas = (prepareTea, numOfCups) => {
    const teaCups = [];
    for(let cups = 1; cups <= numOfCups; cups += 1){
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
}

const tea4GreenTeamFCC = getTeas(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTeas(prepareBlackTea, 13)

console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC);

/*
Understand the Hazards of Using Imperative Code

Functional programming is a good habit. It keeps your code easy to manage,
 and saves you from sneaky bugs. But before we get there, let's look at an 
 imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give 
commands. Similarly, an imperative style in programming is one that gives 
the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables.
 A classic example is writing a for loop that gives exact directions to iterate over the 
 indices of an array.

In contrast, functional programming is a form of declarative programming. 
You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so 
you don't need to write out how the computer should perform them. 

For example, instead of using the for loop mentioned above, you could 
call the map method which handles the details of iterating over an array. 

This helps to avoid semantic errors, like the "Off By One Errors" that were 
covered in the Debugging section.

Consider the scenario: you are browsing the web in your browser, and want 
to track the tabs you have opened. Let's try to model this using some simple 
object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. 
The titles of each open site in each Window object is held in an array. 

After working in the browser (opening new tabs, merging windows, and closing tabs), 
you want to print the tabs that are still open. Closed tabs are removed from the array 
and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.

Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab.
*/

// tabs is an array of titles of each site open within the window

function Window(tabs) {this.tabs = tabs};
//We keep a record of the array inside the object

//// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
/* returns ["FB", "Gitter", "Reddit", "Twitter", "Medium", "new tab", "Netflix", "YouTube", "Vine", "GMail", 
"Work mail", "Docs", "freeCodeCamp", "new tab"]

Avoid Mutations and Side Effects Using Functional Programming
If you haven't already figured it out, the issue in the previous challenge 
was with the splice call in the tabClose() function. Unfortunately, splice 
changes the original array it is called on, so the second call to 
it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on 
a variable, array, or an object, and the function changes the variable or 
something in the object.

One of the core principles of functional programming is to not change things. 
Changes lead to bugs. It's easier to prevent bugs knowing that your functions 
don't change anything, including the function arguments or 
any global variable.

The previous example didn't have any complicated operations but the splice 
method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, 
and the outcome is called a side effect. A function, ideally, should be a pure function, 
meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

Fill in the code for the function incrementer so it returns the value of the global 
variable fixedValue increased by one.
*/

// The global variable
var fixedValue = 4;

function incrementer1 () {
  // Only change code below this line

return fixedValue + 1;
  // Only change code above this line
}
console.log(incrementer1());

/*Pass Arguments to Avoid External Dependence in a Function

The last challenge was a step closer to functional programming principles, 
but there is still something missing.

We didn't alter the global variable value, but the function incrementer would 
not work without the global variable fixedValue being there.

Another principle of functional programming is to always declare your dependencies 
explicitly. This means if a function depends on a variable or object being present, then 
pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, 
you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would 
know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, 
no matter what part of the code executes it.

Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then returns a result after 
increasing the value by one.

// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer () {


  // Only change code above this line
}
*/
let fixedValue1 = 4;
function incrementer (num) {
    return num + 1;
}
console.log(incrementer(fixedValue1));

/*Refactor Global Variables Out of Functions
So far, we have seen two distinct principles for functional programming:

1. Don't alter a variable or object - create new variables and objects and return them 
if need be from a function. Hint: using something like var newArr = arrVar, where 
arrVar is an array will simply create a reference to the existing variable and not a copy. 
So changing a value in newArr would change the value in arrVar.

2. Declare function parameters - any computation inside a function depends only on the 
arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles 
when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either function. 
The add function should add the given bookName to the end of the array passed to it 
and return a new array (list). 

The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added 
before the bookName parameter.

*/

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {

  let a = arr.slice()
  a.push(bookName);
  return a;
  
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  var book_index = arr.slice();
  if (book_index.indexOf(bookName) >= 0) {
    book_index.splice(book_index.indexOf(bookName), 1);
    return book_index;

    // Change code above this line
    }
}

let newBookList = add(bookList, 'A Brief History of Time');
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
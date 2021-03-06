/*  Use the map Method to Extract Data from an Array;

So far we have learned to use pure functions to avoid side effects in a program. 
Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered 
around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return 
a function from another function. Functions are considered first class objects in JavaScript, 
which means they can be used like any other object. They can be saved in variables, stored in 
an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. 
In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the 
results of calling the callback function on each element. 
It does this without mutating the original array.

When the callback is used, it is passed three arguments. 
1. The first argument is the current element being processed. 
2. The second is the index of that element.
3. And the third is the array upon which the map method was called.

See below for an example using the map method on the users array 
to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.
*/

const users =[
    {
        name: "John",
        age: 23
    },
    {
        name: "Amy",
        age: 24
    },
    {
        name: "CamperCat",
        age: 10
    }
];

const names = users.map((user) => user.name);
console.log(names);
//The console would display the value [ 'John', 'Amy', 'camperCat' ].



// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

// var ratings = [];
// for(var i=0; i < watchList.length; i++){
//   ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// }

// Only change code above this line

// console.log(JSON.stringify(ratings));


/*
            Challenge

The watchList array holds objects with information on several movies. 
Use map on watchList to assign a new array of objects to the ratings variable. 

Each movie in the new array should have only a title key with the name of the film, 
and a rating key with the IMDB rating. 

The code in the editor currently uses a for loop to do this, so you should replace 
the loop functionality with your map expression.

*/

let ratings = [];
let a = watchList.map((a) => ratings.push(
    ({title: a.Title, rating: a.imdbRating})
));

console.log(ratings);

/*      Implement map on a Prototype

As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method 
returns an array of the same length as the one it was called on. It also doesn't alter the original array, 
as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. 
Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of it. 
It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myMap(), which should behave exactly 
like Array.prototype.map(). You should not use the built-in map method. 
The Array instance can be accessed in the myMap method using this.


// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
*/

// The global variable
let s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback){
    let newArray = [];
    this.forEach(a => newArray.push(callback(a)));
    return newArray;
};

let new_s = s.myMap (function(item){
    return item * 2;
})

console.log(new_s);

/*          Introduction

From the classic forloop to the forEach() method, various techniques and 
methods are used to iterate through datasets in JavaScript. 

One of the most popular methods is the .map() method. .map() creates an array 
from calling a specific function on each item in the parent array. .map() is a non-mutating 
method that creates a new array as opposed to mutating methods, which only make changes 
to the calling array.

This method can have many uses when working with arrays. In this tutorial, you???ll look at 
four noteworthy uses of .map() in JavaScript: calling a function of array elements, converting 
strings to arrays, rendering lists in JavaScript libraries, and reformatting array objects.

Step 1 ??? Calling a Function on Each Item in an Array
.map() accepts a callback function as one of its arguments, and an important parameter of that 
function is the current value of the item being processed by the function. This is a required parameter. 
With this parameter, you can modify each item in an array and create a new function.

Here???s an example:

*/
const sweetArray = [2,3,4,5,35];
console.log(sweetArray);
const sweeterArray = sweetArray.map(a => a * 2);
console.log(sweeterArray);
// return [4, 6, 8, 10, 70];

//This can be simplified further to make it cleaner with;

// Create a function to use
const makeSweeter = (sweetItem => sweetItem * 2);

//We have an Array
const sArray = [2,3,4,5,35];
console.log(sArray);

// call the function we made more readeble
const sW = sArray.map(makeSweeter );
console.log(sW);// // return [4, 6, 8, 10, 70];

/*
Step 2 ??? Converting a String to an Array

.map() is known to belong to the array prototype. In this step you will use it 
to convert a string to an array. You are not developing the method to work for strings here. 
Rather, you will use the special .call() method.

Everything in JavaScript is an object, and methods are functions attached to these objects. 
.call() allows you to use the context of one object on another. Therefore, you would be copying 
the context of .map() in an array over to a string.

.call() can be passed arguments of the context to be used and parameters for the arguments of the original function.

Here???s an example:

*/

const name = "Sammy";
const map = Array.prototype.map;

const newName = map.call(name, eachLetter => {
    console.log(name);
    return `${eachLetter}a`;
});

console.log(newName);
/*This output is logged to the console:

Output
[ "Sa", "aa", "ma", "ma", "ya" ]*/

/*
    Here, you used the context of .map() on a string and passed an argument 
    of the function that .map() expects.

This functions like the .split() method of a string, only that each individual string 
characters can be modified before being returned in an array.

*/

/*Sometimes, you need to take an array, transform its elements, and include the 
results in a new array.

Typically, you use a for loop to iterate over the elements, transform each individual one, 
and push the results into a new array.

Let???s take a look at an example.

Suppose that you have an array of numbers where each element represents 
the radius of a circle as follows:*/ 

let circles = [10,30,50];
/*The following illustrates how to calculate the area of each circle and push 
the result into a new array.*/

let areas = []; // to store areas of circles
let area = 0;

// using for loop 
for (let i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);
/*[314, 2827, 7853]

It takes a quite amount of code to accomplish this.

Starting from ES5, JavaScript Array type provides the map() method that 
allows you to transform the array elements in a cleaner way.

*/

function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
//using function
let mapArea = circles.map(circleArea);

/*How it works.

First, define a function that calculates the area of a circle.
Then, pass the circleArea function to the map() method. 
The map() method will call the circleArea function on each 
element of the circles array and return a new array with the 
elements that have been transformed.

To make it shorter, you can pass in the map() method an 
anonymous function as follows.*/

let mapArea1 = circles.map(
    ((radius) => Math.floor(Math.PI *radius * radius))
)
console.log(mapArea1);

/*Also, you can make use of the arrow function in ES6 to achieve 
the same result with a cleaner code:*/
let mapAreas = circles.map((c) => Math.floor(Math.PI *c *c));
console.log(mapAreas);


/*JavaScript Array map() method in detail
The following illustrates the map() method.*/
let arrayObject = ["Jan", "Feb", "March", "April", "May", "Jun", "July"]
let calender = arrayObject.map((currentElement, index, array) => 
                                                    `${index+ " "+ currentElement}`);
console.log(calender);                                                    


/**
    Use the reduce Method to Analyze Data
Array.prototype.reduce(), or simply reduce(), is the most general 
of all array operations in JavaScript. 

You can solve almost any array processing problem using the reduce 
method.

The reduce method allows for more general forms of array processing, 
and it's possible to show that both filter and map can be derived as special 
applications of reduce. The reduce method iterates over each item in an array 
and returns a single value (i.e. string, number, object, array). 

This is achieved via a callback function that is called on each iteration.

    # The callback function accepts four arguments. 

1.  The first argument is known as the accumulator, which gets assigned the return 
    value of the callback function from the previous iteration.

2.  The second is the current element being processed, the third is the index of that 
     element.
     
3.  The fourth is the array upon which reduce is called.

4.  In addition to the callback function, reduce has an additional parameter which takes 
    an initial value for the accumulator. If this second parameter is not used, then the first 
    iteration is skipped and the second iteration gets passed the first element of the array    
    as the accumulator.

See below for an example using reduce on the users array to return the sum of all the 
users' ages. For simplicity, the example only uses the first and second arguments.

 */

const siteUsers = [
    {name: "Gary Liniker", age: 55},
    {name: "Alan Shearer", age: 52},
    {name: "Saka Mahmoud", age: 18},
    {name: "Marcus Rushford", age: 23},
    {name: "Sancho", age: 23}
];

const totalAge = siteUsers.reduce((total, user) => total + user.age, 0);
console.log(totalAge);//The console would display the value 64.

/**
    In another example, see how an object can be returned containing the names of the users 
    as properties with their ages as values.
 */

const footballers = siteUsers.reduce((total, user) =>{
    total[user.name] = user.age;
    return total;
}, {});
console.log(footballers);    
// The console log will display
// {Gary Liniker: 55, Alan Shearer: 52, Saka Mahmoud: 18, Marcus Rushford: 23, Sancho: 23}


            //      Challenge 1

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
     
/**
 The variable watchList holds an array of objects with information on several movies. 
 Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. 
 Recall from prior challenges how to filter data and map over it to pull what you need. 
 You may need to create other variables, and return the average rating from getRating function. 
 Note that the rating values are saved as strings in the object and need to be converted into 
 numbers before they are used in any mathematical operations.
 */


function getRating(watchList){
  // Only change code below this line
  let nolanMovies =watchList.filter((director) => director["Director"] === "Christopher Nolan")
  let count = nolanMovies.length;
  let number = nolanMovies.map((a) => Number(a.imdbRating));
  let sumRating = number.reduce((a,b) => (a + b),0)
  let averageRating = sumRating / count;


  // Only change code above this line
  return averageRating;
}
console.log(getRating(watchList)); 
//  console.log returns 8.675 whichs the correct answer.

/** 
 * Challenge 2
 
Use Higher-Order Functions map, filter, or reduce to Solve a Complex ProblemPassed
Now that you have worked through a few challenges using higher-order functions like 
map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

1.  Complete the code for the squareList function using any combination of map(), filter(), 
    and reduce(). 

2.  The function should return a new array containing the squares of only the positive integers 
    (decimal numbers are not integers) when an array of real numbers is passed to it. An example 
    of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.

const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
 */

const squareList = (arr) => {
    let realNums = arr
        .filter((num) => (num > 0 && num === parseInt(num)))
        .map(num => Math.pow(num, 2));
        // .reduce((sum, num) => sum = Math.floor(Math.pow(num,2)), 1);
    return realNums;
};

const squaredList = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredList);

/*********************          The End         ***************************/
       
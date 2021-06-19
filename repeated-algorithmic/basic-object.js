/*          Build JavaScript Objects

You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access 
and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, 
like a cat.

Here's a sample cat object:

*/
var cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};
/*In this example, all the properties are stored as strings, such as - name, legs, and tails. 
However, you can also use numbers as properties. You can even omit the quotes for 
single-word string properties, as follows:*/

var anotherObject = {
    make: "Ford",
    5: 5,
    "model": "Focus"
};
/*However, if your object has any non-string properties, JavaScript will automatically 
typecast them as strings.

Q) Make an object that represents a dog called myDog which contains the properties 
name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, 
legs and tails are numbers, and friends is an array.

var myDog = {
// Only change code below this line


// Only change code above this line
};*/

var myDog = {
    name: "German Sherpard",
    legs: 4,
    tails: 1,
    friends: ["Yorkshire Terier", "Police"]
};

/*      Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:

*/
var myObj = {
    prop1: "val1",
    prop2: "val2"
};
var prop1val1 = myObj.prop1;
var prop2val2 = myObj.prop2;

/*prop1val would have a value of the string val1, and prop2val would have 
a value of the string val2.

Read in the property values of testObj using dot notation. Set the variable hatValue 
equal to the object's property hat and set the variable shirtValue equal to the object's 
property shirt.

// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line*/

//Setup

var testObj = {
    "hat": "ballcap",
    "shirt": "jersy",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

/*      Accessing Object Properties with Bracket Notation

The second way to access the properties of an object is bracket notation ([]). 
If the property of the object you are trying to access has a space in its name, 
you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

*/
var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

/*myObj["Space Name"] would be the string Kirk, myObj['More Space'] 
would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.

Note that property names with spaces in them must be in quotes (single or double).

Q) Read the values of the properties an entree and the drink of testObj using bracket notation 
and assign them to entreeValue and drinkValue respectively.

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line*/

var testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var antreeValue = testObj1["an entree"];
var drinkValue = testObj1["the drink"];

/*      Accessing Object Properties with Variables

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

*/

var dogs ={
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopy: "Beagle"
};

var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);

/*The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's name is collected 
dynamically during the program execution, as follows:*/
 var someObj = {
     propName: "John"
 };

function propPrefix(str){
    var s = "prop";
    return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);

/*someProp would have a value of the string propName, 
and the string John would be displayed in the console.

Note that we do not use quotes around the variable name 
when using it to access the property because we are using the value of the variable, 
not the name.

Set the playerNumber variable to 16. Then, use the variable to look up 
the player's name and assign it to player.

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber;       // Change this line
var player = testObj;   // Change this line

*/

//Setup

var testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj2[playerNumber]
console.log(testObj2[playerNumber]);

/*      Updating Object Properties

After you've created a JavaScript object, you can update its properties 
at any time just like you would update any other variable. 
You can use either dot or bracket notation to update.

For example, let's look at ourDog:*/ 

var ourDog = {
    name: "Camper",
    legs: 4,
    tails: 1,
    friends: ["Everything"]
};
console.log(ourDog.name);
/*Since he's a particularly happy dog, let's change his name to the string Happy Camper. 
Here's how we update his object's name property: ourDog.name = "Happy Camper"; 
or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead 
of getting Camper, we'll get his new name, Happy Camper.*/
ourDog.name = "Happy Camper";
console.log(ourDog.name);

/*Update the myDog object's name property. Let's change her name from Coder to Happy Coder. 
You can use either dot or bracket notation.


// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
*/
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";

/*You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

*/

ourDog.bark = "bow-wow";
// or ourDog["bark"] = "bow-wow";
console.log(ourDog);
console.log(ourDog.bark);

/*Add a bark property to myDog and set it to a dog sound, such as "woof". 
You may use either dot or bracket notation.
*/

myDog["bark"] = "woof";
console.log(myDog);

/*      Delete Properties from a JavaScript Object

We can also delete properties from objects like this:
*/
delete ourDog.bark;
console.log(ourDog);

/*After the last line shown above, ourDog looks like:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Delete the tails property from myDog. You may use either dot or bracket notation.

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line*/

// Setup
delete myDog.tails;
console.log(myDog);
/*{
    name: "Happy Coder", 
    legs: 4, 
    friends: ["freeCodeCamp Campers"]
    bark: "woof"
}*/

/*      Using Objects for Lookups
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, 
you can use an object to lookup values rather than a switch statement or an if/else chain. 
This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:*/

var alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    24: "C",
    25: "B",
    26: "A"
};
alpha[1];
alpha[2];

var value = 2;
alpha[value]

/*alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

Q) Convert the switch statement into an object called lookup. 
Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");*/

function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
       " bravo": "Boston",
       "charlie": "Chicago",
       "delta": "Denver",
       "echo": "Easy",
       "foxtrot": "Frank" 
    };
     result = lookup[val];
     return result;
}
console.log(phoneticLookup("charlie"));

/*      Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. 
We can use the .hasOwnProperty(propname) method of objects to determine 
if that object has the given property name. .hasOwnProperty() returns true or 
false if the property is found or not.
*/
var myObj1 = {
    top: "hat",
    bottom: "pants"
};

console.log(myObj1.hasOwnProperty("top"));
console.log(myObj1.hasOwnProperty("middle"));
console.log("bottom" in myObj1); //returns true

/*The first hasOwnProperty returns true, while the second returns false.

Q) Modify the function checkObj to test if an object passed to the function (obj) contains 
a specific property (checkProp). If the property is found, return that property's value. 
If not, return "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}*/

// first way of doing
function checkObj1(obj, checkProp){
    if (obj.hasOwnProperty(checkProp) === true) {
        return obj[checkProp];
    }
    else {
        return "Not Found"
    }
}
 console.log(checkObj1({city: "Seattle"}, "city")); 

// second way to search for property
function checkObj(obj, checkProp){
    if(checkProp in obj === true) {
        return obj[checkProp];
    }
    else {
        return "Not Found"
    }
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));


/*      Manipulating Complex Objects

Sometimes you may want to store data in a flexible Data Structure. 
A JavaScript object is one way to handle flexible data. They allow for arbitrary 
combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:*/

var ourMusic = [
    {
        "artist": "Duff Punk",
        "title": "Homework",
        "release_year": 1997,
        "format": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    },
];
console.log(typeof ourMusic[0]["release_year"]);

/*This is an array which contains one object inside. The object has various pieces 
of metadata about an album. It also has a nested formats array. If you want to add more album records, 
you can do this by adding records to the top level array. Objects hold data in a property, which has a 
key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a 
value of Daft Punk. JavaScript Object Notation or JSON is a related data interchange format used to store data.*/
ourMusic.push({
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1999,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
});
console.log(ourMusic);
/*returns
0: {    artist: "Duff Punk", title: "Homework", release_year: 1997, 
        format: (3) ["CD", "Cassette", "LP"], gold: true}
1: {    artist: "Daft Punk", title: "Homework", release_year: 1999, 
        format: (3) ["CD", "Cassette", "LP"], gold: true}
        length: 2
        
Note: You will need to place a comma after every object in the array, 
unless it is the last object in the array.

Q)  Add a new album to the myMusic array. Add artist and title strings, 
release_year number, and a formats array of strings.

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];        */

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
];  

myMusic.push({
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1999,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
});

console.log(myMusic);

/*      Accessing Nested Objects

The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

*/
var ourStorage = {
    "desk": {
        "drawer": "Stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder 1": "a folder",
            "folder 2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
console.log(ourStorage.cabinet["top drawer"]["folder 2"]);
console.log(ourStorage.desk.drawer);

/*ourStorage.cabinet["top drawer"].folder2 would be the string secrets,
 and ourStorage.desk.drawer would be the string stapler.

Q) Access the myStorage object and assign the contents of the glove box property 
to the gloveBoxContents variable. Use dot notation for all properties where possible, 
otherwise use bracket notation.

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined;*/
var myStorage = {
    car: {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);// returns maps;

/*Accessing Nested Arrays

As we have seen in earlier examples, objects can contain both nested objects and nested arrays. 
Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:*/

var ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Franky"
        ]
    }
];
console.log(ourPets[0].names[1]);
console.log(ourPets[1]["names"][0]);

/*ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] 
would be the string Spot.

Q) Using dot and bracket notation, set the variable secondTree to the second item
 in the trees list from the myPlants object.


var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = "";
*/

var myPlants = [
    {
        type: "Flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);




/*      Record Collection
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

    . Your function must always return the entire record collection object.

    . If prop isn't tracks and value isn't an empty string, update or set that 
    album's prop to value.

    . If prop is tracks but the album doesn't have a tracks property, create 
    an empty array and add value to it.

    . If prop is tracks and value isn't an empty string, add value to the end 
    of the album's existing tracks array.

    . If value is an empty string, delete the given prop property from the album.

    . Note: A copy of the recordCollection object is used for the tests.

var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

. Your function must always return the entire record collection object.

    . If prop isn't tracks and value isn't an empty string, update or set that 
    album's prop to value.

    . If prop is tracks but the album doesn't have a tracks property, create 
    an empty array and add value to it.

    . If prop is tracks and value isn't an empty string, add value to the end 
    of the album's existing tracks array.

    . If value is an empty string, delete the given prop property from the album.

    . Note: A copy of the recordCollection object is used for the tests.

*/

var  recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }  
};
console.log(recordCollection[2468].tracks);

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== ""){
       records[id][prop] = value;
  }
  else if(prop === "tracks" && "tracks" in records[id] === false) {
    records[id][prop] = [value];
  }
  else if (prop === "tracks" && value !== ""){
    records[id][prop].push(value);
  }
  else if(value === "") {
       delete records[id][prop];
  }
  return records[id][prop];

// if (prop !== 'tracks' && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

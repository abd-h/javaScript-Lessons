/*      Add Key-Value Pairs to JavaScript Objects

At their most basic, objects are just collections of key-value pairs. In other words, 
they are pieces of data (values) mapped to unique identifiers called properties (keys). 

Take a look at an example:*/
const tekkencharecter = {
    player: "Hwaorang",
    fightingStyle: "Tae Kwond Doe",
    human: true
};

/*The above code defines a Tekken video game character object called tekkenCharacter. 
It has three properties, each of which map to a specific value. If you want to add an additional 
property, such as "origin", it can be done by assigning origin to the object:*/
tekkencharecter.origin = "South Korea";
console.log(tekkencharecter);
/*This uses dot notation. If you were to observe the tekkenCharacter object, 
it will now include the origin property. Hwoarang also had distinct orange hair. 
You can add this property with bracket notation by doing:
*/
tekkencharecter["hair color"] = "orange";
/*Bracket notation is required if your property has a space in it or if you want to use a variable to name the 
property. In the above case, the property is enclosed in quotes to denote it as a string and will be added 
exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be 
whatever value the variable is. Here's an example with a variable:

*/
const eyes = "eye color";
tekkencharecter[eyes] = "brown";
console.log(tekkencharecter["eye color"]);
console.log(tekkencharecter);

/*Q)    A foods object has been created with three entries. Using the syntax of your choice, 
add three more entries to it: bananas with a value of 13, grapes with a value of 35, 
and strawberries with a value of 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);*/

const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.banana = 13;
foods["grapes"] = 35;
let summerFruite = "Strawberries";
foods[summerFruite] = 27;
console.log(summerFruite);
console.log(foods);

/*      Modify an Object Nested Within an Object

Now let's take a look at a slightly more complex object. Object properties 
can be nested to an arbitrary depth, and their values can be any type of data 
supported by JavaScript, including arrays and even other objects. 
Consider the following:*/

let nestedObjects = {
    id: 28802695164,
    date: "December 31 2016",
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13, 
            busy: 8
        }
    }
};

/*nestedObject has three properties: id (value is a number), date (value is a string), 
and data (value is an object with its nested structure). While structures can quickly 
become complex, we can still use the same notations to access the information we need. 
To assign the value 10 to the busy property of the nested onlineStatus object, 
we use dot notation to reference the property:*/
nestedObjects.data.onlineStatus.busy = 10;
console.log(nestedObjects);

/*Here we've defined an object userActivity, which includes another object nested 
within it. Set the value of the online key to 45.

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);*/

let userActivity = {
    id: 23894201352,
    date: "January 1, 2017",
    data: {
        totalUsers: 51, 
        online: 42
    }
};

userActivity.data.online = 45;

/*Access Property Names with Bracket Notation

In the first object challenge we mentioned the use of bracket notation 
as a way to access property values using the evaluation of a variable. 
For instance, imagine that our foods object is being used in a program 
for a supermarket cash register. We have some function that sets the selectedFood 
and we want to check our foods object for the presence of that food. 
This might look like:
*/
function currentFoods(scannedItem){
    return foods[scannedItem];
}

let selectedFood = currentFoods("apples");
console.log(selectedFood);

let inventory = foods.selectedFood;
console.log(inventory);

/*  This code will evaluate the value stored in the selectedFood variable 
and return the value of that key in the foods object, or undefined if it is not present. 

Bracket notation is very useful because sometimes object properties are not known 
before runtime or we need to access them in a more dynamic way.

Q) We've defined a function, checkInventory, which receives a scanned item as an argument. 
Return the current value of the scannedItem key in the foods object. 

You can assume that only valid keys will be provided as an argument 
to checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
*/
let food = {
    apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
    return food[scannedItem];
}
console.log(checkInventory("apples"));

/*  Use the delete Keyword to Remove Object Properties

Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, and, they provide very fast lookup time. Throughout the rest of these challenges, we will describe several common operations you can perform on objects so you can become comfortable applying these useful data structures in your programs.

In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.

Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:

delete foods.apples;

Use the delete keyword to remove the oranges, plums, and strawberries keys 
from the foods object.

let fruites = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);

*/
let fruites = {
    apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete fruites.oranges;
delete fruites.plums;
delete fruites.strawberries;
console.log(fruites);


/*      Check if an Object has a Property

Now we can add, modify, and remove keys from objects. But what if we just wanted to know 
if an object has a specific property? JavaScript provides us with two different ways to do this. 
One uses the hasOwnProperty() method and the other uses the in keyword. If we have 
an object footballPlayers.manUnited with a property of goalKeeper, we could check 
for its presence in either of the following ways:*/

let footballPlayers = {
    manUnited: {
        goalKeeper: "Mike Henderson",
        centeralDefeder: "Baily"
    }
}
console.log(footballPlayers.manUnited.hasOwnProperty("goalKeeper"));
console.log("goalKeeper" in footballPlayers.manUnited);
/*Both cases return trues;

Finish writing the function so that it returns true if the object passed 
to it contains all four names, Alan, Jeff, Sarah and Ryan and returns f
alse otherwise.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));*/

let users = {
    Alan: {
        age : 27,
    online: true
    },
    jef: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
console.log(users);

function isEveryoneHere(userObj){   
    if  ("Alan" in userObj && "jef" in userObj && "Sarah"  in userObj && "Ryan" in userObj) {
        return true;
    }
    else {
        return false;
    }

//     if  (
//     userObj.hasOwnProperty("Alan") && 
//     userObj.hasOwnProperty("Jeff") &&
//     userObj.hasOwnProperty("Sarah") &&
//     userObj.hasOwnProperty("Ryan")
//   ) {
//         return true;
//     }
    
//     return  false; this works as well;

/*this works as well
   return ("Alan" in userObj && "jef" in userObj && 
                "Sarah"  in userObj && "Ryan" in userObj) === true;
                */
}

console.log(isEveryoneHere(users));

/*      Iterate Through the Keys of an Object with a for...in Statement
Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:*/
let firstUser= "";
for (let user in users) {
    firstUser += user  + " " ;
}
console.log(firstUser);

/*This would log Alan, Jeff, Sarah, and Ryan - each value on its own line.

In this statement, we defined a variable user, and as you can see, this variable 
was reset during each iteration to each of the object's keys as the statement 
looped through the object, resulting in each user's name being printed to the console.

NOTE: Objects do not maintain an ordering to stored keys like arrays do; 
thus a key's position on an object, or the relative order in which it appears, 
is irrelevant when referencing or accessing that key.

----------------------------------------------------------------

Q)  We've defined a function countOnline which accepts one argument (a users object). 
Use a for...in statement within this function to loop through the users object passed into 
the function and return the number of users whose online property is set to true. 

An example of a users object which could be passed to countOnline is shown below. 
Each user will have an online property with either a true or false value.

{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}


function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}*/

function countOnline(usersObj) {
    let newUser = "";
    for (let user in usersObj){
        if (usersObj[user].online === true) {
       
            newUser++
        }
    }
    return newUser;
}
console.log(countOnline(users));

/*Generate an Array of All Object Keys with Object.keys()
We can also generate an array which contains all the keys stored in an object 
using the Object.keys() method and passing in an object as the argument. 
This will return an array with strings representing each property in the object. 
Again, there will be no specific order to the entries in the array.

Finish writing the getArrayOfUsers function so that it returns an array containing 
all the properties in the object it receives as an argument.*/

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
let muObj = getArrayOfUsers({users})
muObj.push({james:{
    age: 29,
    online: true
}})
console.log(muObj);
console.log(getArrayOfUsers(users));

/*      Modify an Array Stored in an Object

Now you've seen all the basic operations for JavaScript objects. You can add, modify, 
and remove key-value pairs, check if keys exist, and iterate over all the keys in an object. 

As you continue learning JavaScript you will see even more versatile applications of objects. 
Additionally, the Data Structures lessons located in the Coding Interview Prep section of the 
curriculum also cover the ES6 Map and Set objects, both of which are similar to ordinary 
objects but provide some additional features. Now that you've learned the basics of arrays and 
objects, you're fully prepared to begin tackling more complex problems using JavaScript!

Take a look at the object we've provided in the code editor. The user object contains three keys. 
The data key contains five keys, one of which contains an array of friends. From this, 
you can see how flexible objects are as data structures. 

We've started writing a function addFriend. Finish writing it so that it takes a user object 
and adds the name of the friend argument to the array stored in user.data.friends 
and returns that array.

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));*/

let arrUser = {
    name: "Keneth",
    age: 28,
    data: {
        userName: "KennethCodesAllDay",
        jointhDate: "March 26 2016",
        organisation: "freeCodeCamp",
        friends: [
            "Sam",
            "Kira",
            "Tomo"
        ],
        location: {
            city: "San Francisco",
            state: "California",
            Country: "USA",

        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}
console.log(addFriend(arrUser, 'Pete'));
console.log(arrUser.data.friends);

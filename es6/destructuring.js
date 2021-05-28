    /* Use Destructuring Assignment to Extract Values from Objects

    Destructuring assignment is special syntax introduced in ES6, for 
    neatly assigning values taken directly from an object.

    Consider the following ES5 code:*/

        const user =  {
            name: "John Doe",
            age: 34,
            mobile: "+447932417612",
            email: "john.doe1934@gmail.com"
        }
        

    const name = user.name;
    const age = user.age
    console.log(name, age);
    /*name would have a value of the string John Doe, and age 
    would have the number 34.

    Here's an equivalent assignment statement using the 
    ES6 destructuring syntax:*/

    const {mobile,email} = user;
    console.log(name, age, mobile, email);

    /*Again, name would have a value of the string John Doe 34 
    +447932417612 
    john.doe1934@gmail.com, and age would have the number 34.

    Here, the name and age variables will be created and assigned the 
    values of their respective values from the user object. You can see how 
    much cleaner this is.

    You can extract as many or few values from the object as you want.

    Replace the two assignments with an equivalent destructuring assignment. 
    It should still assign the variables today and tomorrow the values of today 
    and tomorrow from the HIGH_TEMPERATURES object.

    const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
    };

    // Only change code below this line

    const today = HIGH_TEMPERATURES.today;
    const tomorrow = HIGH_TEMPERATURES.tomorrow;

    // Only change code above this line*/

    const HIGH_TEMPERATURES ={
        yersterday: 75,
        today:77,
        tomorrow: 80
    };
    const {today, tomorrow} = HIGH_TEMPERATURES;
    console.log(today, tomorrow);

    /*Use Destructuring Assignment to Assign Variables from Objects

    Destructuring allows you to assign a new variable name when extracting values. 
    You can do this by putting the new name after a colon when assigning the value.

    Using the same object from the last example:

    const user =  {
            name: "John Doe",
            age: 34,
            mobile: "+447932417612",
            email: "john.doe1934@gmail.com"
        }*/
    const {name: userName, age: userAge} = user;
    console.log(userName, userAge);    

    /*You may read it as "get the value of user.name and assign it to a new 
    variable named userName" and so on. The value of userName would be 
    the string John Doe, and the value of userAge would be the number 34.

    Replace the two assignments with an equivalent destructuring assignment. 
    It should still assign the variables highToday and highTomorrow the values 
    of today and tomorrow from the HIGH_TEMPERATURES object.

    const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
    };

    // Only change code below this line
    
    const highToday = HIGH_TEMPERATURES.today;
    const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

    // Only change code above this line*/

    const HIGH_TEMPERATURE = {
    yesterday: 75,
    today: 77,
    tomorrow: 80 
    }

    const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURE;
    console.log(highToday, highTomorrow);

    /*You can use the same principles from the previous two lessons to destructure 
    values from nested objects.

    Using an object similar to previous examples:
    */
    const users = {
        johnDoe: {
            age: 34,
            contactDetails: {
                email: "john.doe1934@SpeechGrammarList.com",
                mobile: "+447932417612"
            }
            
        }
    };

    /*Here's how to extract the values of object properties and assign them 
    to variables with the same name:*/

    const {johnDoe: {contactDetails:{mobile: userMobile}}} = users;
    console.log(userMobile);

    /*And here's how you can assign an object properties' values 
    to variables with different names:*/

    const {johnDoe: {age: usersAge, contactDetails: {email: usersEmail, mobile: usersMobile}}} =users
    console.log(usersAge, usersEmail,usersMobile);

    /*Replace the two assignments with an equivalent destructuring assignment. 
    It should still assign the variables lowToday and highToday the values of today.low 
    and today.high from the LOCAL_FORECAST object.

    const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
    };

    // Only change code below this line
    
    const lowToday = LOCAL_FORECAST.today.low;
    const highToday = LOCAL_FORECAST.today.high;

    // Only change code above this line
    */

    const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
    };

    const {today: {low: lowToday, high: highTodays}} = LOCAL_FORECAST;
    console.log(lowToday, highTodays);

    /*Use Destructuring Assignment to Assign Variables from Arrays

    ES6 makes destructuring arrays as easy as destructuring objects.

    One key difference between the spread operator and array destructuring 
    is that the spread operator unpacks all contents of an array into 
    a comma-separated list. 

    Consequently, you cannot pick or choose which elements you want to 
    assign to variables.

    Destructuring an array lets us do exactly that:
    */
    const [a, b] = [1,2,3,4,5,6];
    console.log(a,b);
    /*The console will display the values of a and b as 1, 2.

    The variable a is assigned the first value of the array, and b 
    is assigned the second value of the array. We can also access the value 
    at any index in an array with destructuring by using commas to reach the 
    desired index:*/
    
    const [x, y,,,z] = [1,2,3,4,5,6];
    console.log(x,y,z);
    //The console will display the values of a, b, and c as 1, 2, 5.

    /*Use destructuring assignment to swap the values of a and b 
    so that a receives the value stored in b, and b receives the value s
    tored in a.

    let a = 8, b = 6;
    // Only change code below this line
    */
    let u = 8, v = 6;
    [u, v] =[v, u];
    console.log(u,v);

    /*Use Destructuring Assignment with the Rest Parameter to 
    Reassign Array Elements

    In some situations involving array destructuring, we might want to 
    collect the rest of the elements into a separate array.

    The result is similar to Array.prototype.slice(), as shown below:*/

    const [c, d,...e] = [1,2,3,4,5,6,7,8,9];
    console.log(c,d,e);
    //returns 1 2  [3, 4, 5, 6, 7, 8, 9]
    /*The console would display the values 1, 2 and [3, 4, 5, 7].

    Variables c and d take the first and second values from the array. 
    After that, because of the rest parameter's presence, e gets the rest 
    of the values in the form of an array. The rest element only works 
    correctly as the last variable in the list. As in, you cannot use the 
    rest parameter to catch a subarray that leaves out the last element 
    of the original array.

    Use destructuring assignment with the rest parameter to perform 
    an effective Array.prototype.slice() so that arr is a sub-array of the 
    original array source with the first two elements omitted.

    const source = [1,2,3,4,5,6,7,8,9,10];
    function removeFirstTwo(list) {
    // Only change code below this line
    const arr = list; // Change this line
    // Only change code above this line
    return arr;
    }
    const arr = removeFirstTwo(source);*/

    const source = [1,2,3,4,5,6,7,8,9,10];
    function removeFirstTwo(list) {
    const [,,...arr] = list;
        return arr;
    }
    console.log(removeFirstTwo(source));
    const arr = removeFirstTwo(source);
    console.log(arr);
    // returns [3, 4, 5, 6, 7, 8, 9, 10]

    /* Use Destructuring Assignment to Pass an Object as a Function's Parameters
    In some cases, you can destructure the object in a function argument itself.

    Consider the code below:*/
    const profileUpdate = (profileData) => {
        const {name, age, nationality, location} = profileData
    }
    /*This effectively destructures the object sent into the function. 
    This can also be done in-place:*/

    const profileUpdates = ({name, age, nationality, location}) => {

    }
    /*When profileData is passed to the above function, the values are destructured 
    from the function parameter for use within the function

    Use destructuring assignment within the argument to the function half to 
    send only max and min inside the function.

    const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
    };

    // Only change code below this line
    const half = (stats) => (stats.max + stats.min) / 2.0; 
    // Only change code above this line
    */

    const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
    };

    const half = ({max, min}) => ( (max + min) / 2 );
    console.log(half(stats));
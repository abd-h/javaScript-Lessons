/* Remove Items Using splice()
    Ok, so we've learned how to remove elements from the beginning and end of arrays 
    using shift() and pop(), but what if we want to remove an element from somewhere in the middle? 
    Or remove more than one element at once? Well, that's where splice() comes in. 

    splice() allows us to do just that: remove any number of consecutive elements from 
    anywhere in an array.

    splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. 
    The first two parameters of splice() are integers which represent indexes, or positions, 
    of the array that splice() is being called upon. And remember, arrays are zero-indexed, 
    so to indicate the first element of an array, we would use 0. splice()'s first parameter 
    represents the index on the array from which to begin removing elements, while the second 
    parameter indicates the number of elements to delete. For example:*/

    let spliced = ["today", "was", "not","so","great"];
    spliced.splice(2,2);
    console.log(spliced);
    /*Here we remove 2 elements, beginning with the third element (at index 2). 
    spliced would have the value ['today', 'was', 'great'].

    splice() not only modifies the array it's being called on, but it also returns 
    a new array containing the value of the removed elements:
    */

    let splicedArray = ["I", "am","feeling", "really", "happy"];
    let sArray = splicedArray.splice(3,2);
    console.log(sArray);

    /*sArray has the value ['really', 'happy'].

    ---------------------------------------------------
    Q) We've initialized an array arr. Use splice() to remove elements from arr, 
    so that it only contains elements that sum to the value of 10.

    const arr = [2, 4, 5, 1, 7, 5, 2, 1];
    // Only change code below this line

    // Only change code above this line
    console.log(arr);
    */

    const arr = [2, 4, 5, 1, 7, 5, 2, 1];
    arr.splice(0,1);
    arr.splice(3,4);
    console.log(arr);

    /*      Add Items Using splice()

    Remember in the last challenge we mentioned that splice() 
    can take up to three parameters? Well, you can use the third parameter, 
    comprised of one or more element(s), to add to the array. 

    This can be incredibly useful for quickly switching out an element, 
    or a set of elements, for another.
    */
    const numbers = [10, 11, 12, 12, 15];
    let startIndex = 3;
    let amountToDelete = 1;
    numbers.splice(startIndex, amountToDelete, 13,14);
    console.log(numbers);

    /*The second occurrence of 12 is removed, and we add 13 and 14 at the same index. 
    The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

    Here, we begin with an array of numbers. Then, we pass the following to splice(): 
    The index at which to begin deleting elements (3), the number of elements to be deleted (1), 
    and the remaining arguments (13, 14) will be inserted starting at that same index. 

    Note that there can be any number of elements (separated by commas) following amountToDelete, 
    each of which gets inserted.
    ........................................................................

    Q) We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. 
    Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' 
    and 'BlanchedAlmond' in their respective places.

    htmlColorNames should return ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]

    The htmlColorNames function should utilize the splice() method

    You should not use shift() or unshift().

    You should not use array bracket notation.

    function htmlColorNames(arr) {
    // Only change code below this line

    // Only change code above this line
    return arr;
    }

    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 
    'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
    */
    function htmlColorNames(arr) {
        arr.splice(0,2, "DarkSalmon", "BlanchedAlmond");
        return arr;
    }
    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 
    'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
    /* Match Single Character with Multiple Possibilities

    You learned how to match literal patterns (/literal/) and wildcard character (/./). 
    Those are the extremes of regular expressions, where one finds exact matches and 
    the other matches everything. 

    There are options that are a balance between the two extremes.

    You can search for a literal pattern with some flexibility with character classes. 
    Character classes allow you to define a group of characters you wish to match 
    by placing them inside square ([ and ]) brackets.

    For example, you want to match bag, big, and bug but not bog. 
    You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will 
    only match the characters a, i, or u.

    */

    let bagStr = "bag";
    let bigStr = "big";
    let bugStr = "bug";
    let bogStr = "bog";
    let bagRegex = /b[aiu]g/g
    console.log(bagStr.match(bagRegex));
    console.log(bigStr.match(bagRegex));
    console.log(bugStr.match(bagRegex));
    console.log(bogStr.match(bagRegex));
    //In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

    /*Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex 
    to find all the vowels in the string quoteSample.

    Note: Be sure to match both upper- and lowercase vowels.

    let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
    let vowelRegex = /[a-z]gi/; // Change this line
    let result = vowelRegex; // Change this line*/

    let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
    let vowelRegex = /[aeiou]/gi
    let vowelResult = quoteSample.match(vowelRegex);
    console.log(vowelResult);

    /*      Match Letters of the Alphabet

    You saw how you can use character sets to specify a group of characters to match, 
    but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

    Inside a character set, you can define a range of characters to match using a hyphen character: -.

    For example, to match lowercase letters a through e you would use [a-e].*/
    let catStr = "cat";
    let batStr = "bat";
    let matStr = "mat";
    let cbmRegex = /[a-e]at/;
    console.log(catStr.match(cbmRegex));
    console.log(batStr.match(cbmRegex));
    console.log(matStr.match(cbmRegex));
    //In order, the three match calls would return the values ["cat"], ["bat"], and null.

    /*Match all the letters in the string quoteSample.

    Note: Be sure to match both uppercase and lowercase letters.

    let quoteSample = "The quick brown fox jumps over the lazy dog.";
    let alphabetRegex = /change/; // Change this line
    let result = alphabetRegex; // Change this line*/

    let qSample = "The quick brown fox jumps over the lazy dog.";
    let alphabetRegex = /[a-z]/gi;
    let alphabetResult = qSample.match(alphabetRegex);
    console.log(alphabetResult);

    /*  Match Numbers and Letters of the Alphabet

    Using the hyphen (-) to match a range of characters is not limited to letters. 
    It also works to match a range of numbers.

    For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

    Also, it is possible to combine a range of letters and numbers in a single character set.*/
    let jennyStr = "Jenny8675309";
    let jennyRegex = /[a-z0-9]/gi;
    let jennyResult = jennyStr.match(jennyRegex);
    console.log(jennyResult);

    /*Create a single regex that matches a range of letters between h and s, and 
    a range of numbers between 2 and 6. Remember to include the appropriate 
    flags in the regex.

    let quoteSample = "Blueberry 3.141592653s are delicious.";
    let myRegex = /change/; // Change this line
    let result = myRegex; // Change this line
    */

    let quoteSampleA = "Blueberry 3.141592653s are delicious.";
    let myRegex1 = /[h-s2-6]/gi;
    let myResult = quoteSampleA.match(myRegex1);
    console.log(myResult);


    /*  Reuse JavaScript Code Using import

    import allows you to choose which parts of a file or module to load. 
    In the previous lesson, the examples exported add from the module-script.js file. 
    Here's how you can import it to use in another file: */

    // import { add } from "./module-script.js";

    /*Here, import will find add in module-script.js, import just that function 
    for you to use, and ignore the rest. The ./ tells the import to look for the 
    module-script.js file in the same folder as the current file. 

    The relative file path (./) and file extension (.js) are required when using 
    import in this way. You can import more than one item from the file by adding 
    them in the import statement like this:*/

    // import {addValue, subtract} from "./module-script.js";

    /*Add the appropriate import statement that will allow the current file to 
    use the uppercaseString and lowercaseString functions you exported in 
    the previous lesson. These functions are in a file called ./module-scripting.js 
    which is in the same directory as the current file.*/

    import {uppercaseString, lowercaseString, addValue} from "./export-module-script.js";
    console.log(uppercaseString("hello"));
    console.log(lowercaseString("WORLD"));
    console.log(addValue(2, 3));

/*  Use * to Import Everything from a File

    Suppose you have a file and you wish to import all of its contents into the current file. 
    This can be done with the import * as syntax. Here's an example where the contents of 
    a file named math_functions.js are imported into a file in the same directory:
    */
    
    import * as myMathModule from "./export-module-script.js"

    /*The above import statement will create an object called myMathModule. 
    This is just a variable name, you can name it anything. The object will contain 
    all of the exports from export-module.js in it, so you can access the functions like 
    you would any other object property. Here's how you can use the add and subtract 
    functions that were imported:*/
  
    console.log(myMathModule.addValue(10,20));

    /*The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.*/

    import * as stringFunctions from "./export-module-script.js";
   console.log( stringFunctions.uppercaseString("hello"));
    console.log(stringFunctions.lowercaseString("WORLD"));

    /*Import a Default Export
    In the last challenge, you learned about export default and its uses. To import a 
    default export, you need to use a different import syntax. In the following example, 
    add is the default export of the ./export-module-script.js Here is how to import it:*/

    import multiply from "./export-module-script.js";
    console.log(multiply(2,30));

    /*The syntax differs in one key place. The imported value, add, is not surrounded 
    by curly braces ({}). add here is simply a variable name for whatever the default export 
    of the ./export-module-script.js file is. You can use any name here when importing a default.

*/
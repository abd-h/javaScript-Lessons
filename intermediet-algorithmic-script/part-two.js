/*  Challenge 6
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, 
move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English 
words in all lowercase.

translatePigLatin("california") should return the string aliforniacay.

translatePigLatin("paragraphs") should return the string aragraphspay.

translatePigLatin("glove") should return the string oveglay.

translatePigLatin("algorithm") should return the string algorithmway.

translatePigLatin("eight") should return the string eightway.

Should handle words where the first vowel comes in the middle of the word. 
translatePigLatin("schwartz") should return the string artzschway.

Should handle words without vowels. translatePigLatin("rhythm") should return 
the string rhythmay. 

** The instructions for this challenge are short and to the point. **

Our one input is str, a string. Looking at the test cases, they are all lower cased letters,
 no white spaces or non letter characters.

We must return a string.

We need to check what str begins with. If it is a consonant, take the consonant or streak 
of consonant before we find a vowel, move it to the end of the word plus 'ay'. If word begins 
with a vowel, just add 'way' at the end. Looks like we'll need some if/else logic.

Looks like we're going to have to dive into Regular Expressions again!

We are working with vowels and non-vowels. Vowels are a, e, i, o, u. 
I think we will make a RegEx which contains all letters but the vowels. 
We can use a string method, match(), to see if the word begins with a vowel.

match() will return you an array of the characters which matches the RegEx you provide. 
For example -*/
let greetingBe = "Hello World";
let regex = /o/g;
console.log(greetingBe.match(regex));

/* I think using match() is good because once we have an array, it would be easy 
to add on 'way' or 'ay' to the array.

If we (try) to begin to build our RegEx for vowels, we would start off with something like [aeiou]. 
After a little exploring with how to build it, it might be better to build a RegEx for consonants and 
not the vowels. So a cononant is every letter which isn't a vowel. 
Reading notes again, ^ will be of use to us.*/

let reading = "Chemitry";
let eight = "Eight"
let regexRe = /^[^aeiou]+/g;
let regexRea = /^[aeiou]/gi;
console.log(reading.match(regexRe)); // true only when begining with one or more constants
console.log(eight.match(regexRea)); //matchs all vowels


/* 
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");*/

function translatePigLatin(str){
    let regex = /^[^aeiou]+/g,
        vowels = /^[aeiou]/gi;
    const constant = str.match(regex);
    if (vowels.test(constant)) {
        return str.concat("way");
    }
    else {
        return str.replace(regex, "").concat(constant).concat("ay");
    }
}
console.log(translatePigLatin("paragraphs"));
//translatePigLatin("paragraphs") should return the string aragraphspay.

/*
Search and Replace
Perform a search and replace on the sentence using the arguments provided 
and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument 
with (after).

Note: Preserve the case of the first character in the original word 
when you are replacing it. For example if you mean to replace the 
word Book with the word dog, it should be replaced as Dog

myReplace("Let us go to the store", "store", "mall") should return 
the string Let us go to the mall.

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
should return the string He is Sitting on the couch.

myReplace("I think we should look up there", "up", "Down") 
should return the string I think 
we should look down there.

myReplace("This has a spellngi error", "spellngi", "spelling") 
should return the string This has a spelling error.

myReplace("His name is Tom", "Tom", "john") should return the string His name is John.

myReplace("Let us get back to more Coding", "Coding", "algorithms") 
should return the string Let us get back to more Algorithms.
...............................................

function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");*/



 //Challenge Complete  ***
 //capitalization matter on this challenge

 function isItTrue(str, before, after){
    let string = str.split(" ").slice();
    console.log(string);
    let findStr = string.indexOf(before);
    let lowercase = string[findStr].toLowerCase();
    let uppercase = string[findStr][0].toUpperCase();
    uppercase += string[findStr][1]
    console.log(lowercase);
    console.log(uppercase);
    console.log(string[findStr]);
    if(string.indexOf(before) === string.indexOf(lowercase)){
        let b = after.toLowerCase()
                        .replace(/\w/, firstWord => firstWord.toLowerCase());
                        console.log(b);
       let s = string.slice();
        let a = s.splice(findStr);
        a.shift();
        a.unshift(b)
       return  s.concat(a).join(" ")
    }
    else if(string.indexOf(before) === string.indexOf(uppercase)){
        let b = after.toLowerCase()
                        .replace(/\w/, firstWord => firstWord.toUpperCase());
                        console.log(b);
       let s = string.slice();
        let a = s.splice(findStr);
        a.shift();
        a.unshift(b)
       return s.concat(a).join(" ")
    }
    else{
        let b = after.toLowerCase()
                        .replace(/\w/, firstWord => firstWord.toUpperCase());
                        console.log(b);
          let s = string.slice();
        let a = s.splice(findStr);
        a.shift();
        a.unshift(b)
       return s.concat(a).join(" ")
    }
}









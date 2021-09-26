/*      What are JavaScript Closures

Closures are a confusing JavaScript concept to learn, because it's 
hard to see how they're actually used.

Unlike other concepts such as functions, variables, and objects, you 
don't always use closures conscientiously and directly. You don't say: 
Oh! Here I will use a closure as a solution.

But at the same time, you might have already used this concept a hundred times. 
Learning about closures is more about identifying when one is being used rather 
than learning a new concept.

What is a closure in JavaScript?
You have a closure when a function reads or modifies the value of a variable defined 
outside its context.*/

const value = 1
function doSomeThing(){
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return data.filter(item => item % value === 0)
}
/*Here the function doSomething uses the variable value. But also the 
function item => item % value === 0 can then be written like this:
function (item) {
    return item % value === 0
}

Functions can access values out of context
As in the previous example, a function can access and use values that are defined outside 
its "body" or context, for example:*/
let count = 3
function counter(){
    console.log(count);
}
counter() // returns 3
count = 2
counter()// returns 2

/*This allows us to modify the value of the count variable from anywhere in the module. 
Then when the counter function is called, it will know how to use the current value.

Why do we use functions?
But why do we use functions in our programs? Certainly it is possible – difficult, 
but possible – to write a program without using functions we define. 

So why do we create proper functions?

Imagine a piece of code that does something wonderful, whatever, and is made up 
of X number of lines.

Now suppose you must use this wonderful piece of code in various parts of your program, 
what would you do?.

The "natural" option is to put this piece of code together into a set that can be reusable, 
and that reusable set is what we call a function. 

Functions are the best way to reuse and share code within a program.

Now, you can use your function as many times as possible. And, ignoring some particular cases, 
calling your function N times is the same as writing that wonderful piece of code N times. 

It is a simple replacement.

But where is the closure?
Using the counter example, let's consider that as the wonderful piece of code.

let count = 3
function counter() {
    console.log(count)
}
counter() // print 1

Now, we want to reuse it in many parts, so we will "wrap" it in a function.*/

function wonderfulFunction(){
    let count = 1
   return function counter(){
       return count
    }
    
}
const w = wonderfulFunction()
console.log(w());
console.log(wonderfulFunction()());

/*
Now what do we have? A function: counter that uses a value that was declared outside it count. And a value: count that was declared in the wonderfulFunction function scope but that is used inside the counter function.

That is, we have a function that uses a value that was declared outside its context: a closure.

Simple, isn't it? Now, what happens when the function wonderfulFunction is executed? What happens to the variable count and the function counter once the parent function is executed?

The variables and functions declared in its body "disappear" (garbage collector).

Now, let's modify the example a bit:

*/
function amazingFunc() {
    let count = 1
    function counter() {
        counter++
        console.log(count);
    }
   return  counter()
    // setInterval(counter, 2000)
}
amazingFunc();

/*What will happen now to the variable and function declared inside wonderfulFunction?

In this example, we tell the browser to run counter every 2 seconds. So the JavaScript engine must keep a 
reference to the function and also to the variable that is used by it. Even after the parent function 
wonderfulFunction finishes its execution cycle, the function counter and the value count will still "live".

This "effect" of having closures occurs because JavaScript supports the nesting of functions. Or in other 
words, functions are first class citizens in the language and you can use them like any other object: nested, 
passed as an argument, as a value of return, and so on.

What can I do with closures in JavaScript?
Immediately-invoked Function Expression (IIFE)
This is a technique that was used a lot in the ES5 days to implement the "module" design pattern (before this
was natively supported). The idea is to "wrap" your module in a function that is immediately executed.
(function(arg1, arg2){
...
...
})(arg1, arg2)

This lets you use private variables that can only be used by the module itself within the function – that is, 
it's allowed to emulate the access modifiers.
const module = (function(){
	function privateMethod () {
	}
	const privateValue = "something"
	return {
	  get: privateValue,
	  set: function(v) { privateValue = v }
	}
})()

var x = module()
x.get() // "something"
x.set("Another value")
x.get() // "Another Value"
x.privateValue //Error*/

/*Function Factory
Another design pattern implemented thanks to closures is the “Function Factory”. 
This is when functions create functions or objects, for example, a function that allows 
you to create user objects.*/
function createdId(){
    return "17hakg9a7jas";
}
console.log(createdId("17hakg9a7jas"));
const createUser = ({userName, avatar}) => ({
    id: createdId(),
    userName,
    avatar,
    changeUserName (userName){
        this.userName = userName
        return this;
    },
    changeAvatar (url){
        
        // execute some logic to retrieve avatar image
        const newAvatar = fetchAvatarFromUrl(url)
        this.avatar = newAvatar
        return this;
    }
});
console.log(createUser({userName: "Avatar", avatar: "bender.png"}));

/*And using this pattern you can implement an idea from functional programming called currying.

Currying
Currying is a design pattern (and a characteristic of some languages) where a function is immediately evaluated and returns a second function. This pattern lets you execute specialization and composition.

You create these "curried" functions using closures, defining and returning the inner function of the closure.

*/

function multiplu(x) {
    return (y)=>{
        return(z) =>{
            return x * y *z
        }
    }
}
const result = multiplu(2)
const result2= result(4)
const result3 = result2(6);
console.log(result3);
console.log(multiplu(2)(4)(6));

/*These types of functions take a single value or argument and return another function that also receives an 
argument. It is a partial application of the arguments. It is also possible to rewrite this example using ES6.*/
const multiplu2 = ((x)=> (y) => (z) => x * y * z)
console.log(multiplu2(3)(10)(10));

/*Where can we apply currying? In composition, let's say you have a function that creates HTML elements.*/
function createElement(element){
    const el = document.createElement(element)
    return (content) =>{
        return el.textNode = content
    }
}
const bold = createElement("b")
const italic = createElement("i")
const content = "My content"
const myElement = bold(italic(content))
console.log(myElement);

/*
Event Listeners
Another place you can use and apply closures is in event handlers using React.

Suppose you are using a third party library to render the items in your data collection. This library exposes a component called RenderItem that has only one available prop onClick. This prop does not receive any parameters and does not return a value.

Now, in your particular app, you require that when a user clicks on the item the app displays an alert with the item's title. But the onClick event that you have available does not accept arguments – so what can you do? Closures to the rescue:*/

const onItemClick = title =>  alert(`Clicked ${title}`)
// return(
//     <container>
//     {
//         item.map(item => {
//             return (
//                 <RenderItem onClick={onItemClick(ItemTitle)}>
//                 <Title>{item.title}</Title>
//                 </RenderItem>
//             )
//         })
//     }
//     </container>
// )
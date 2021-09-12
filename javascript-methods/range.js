/*          How to create range in Javascript

    range is a function that basically takes in a starting index and ending index 
    then return a list of all integers from start to end.

    The most obvious way would be using a for loop.*/

function range(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
       ans.push(i)
    }
    return ans;
}
console.log(range(1, 6));

/*  As a fan of FP, let's come up with an recursive solution. So the base case is obviously 
when the start and end are the same, the answer would simply be [start].

function range(start, end) {
    if(start === end) return [start];
    // recursive case
}*/
function range2(start, end) {
    if(start === end) return [start];
    //recursive case
}

/*Now take the leap of faith, assume that range(start, end) will just work. Then how do we 
solve the problem range(start, end)? Simple! Just do [start, ...range(start + 1, end)].

So combining both, we get
*/

function range3(start, end) {
    if(start === end) return [start];
    return [start, ...range3(start +1, end)];
}

/*A lot more elegant than the for-loop solution in my opinion. But we could even go 
further if we use new Array(n) which creates an array with n elements.

If we have an n element list, we could build a range from it by mapping each element 
to its index, i.e. arr.map((_, i) => i).

However, according to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Description, 
map will not call for unassigned element. 
This mean we need to initialise the new Array(n) before mapping. 
One standard technique is to use fill. The final result is the following.

function range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}*/

function range4(start, end) {
    return (new Array(end - start +1))
              .fill(undefined)
              .map((_, i) => i + start );
}

/*
We could also make use of Array.from to create range:
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}*/

function range5(start, end){
    return Array.from({lenght: end - start +1}, (_, i) => i);
}
/*  Thank you Step for mentioning about efficiency when handling large ranges, 
     which essentially build a huge   array. We could have a more efficient way of 
     doing this by using generators.
*/
function* range6(start, end) {
    for (let i = start; i <= end; i++){
        yield i;
    }
}

/* 
    We could use this generator in a for...of loop (which would be very efficient) 
    or use an array spread to retrieve all values (note that this essentially builds 
    the array which is essentially the same as the non-generator approaches.)*/

    for (i of range6(1, 5)) {
        console.log(i);
    }
    [...range6(1,5)]

/*
    Since I always try to avoid for loops, we could also define the generator recursively 
    as follows.*/    

    function* range7(start, end) {
        yield start;
        if (start === end) return;
        yield* range(start + 1, end)
    }
    console.log([...range7(1,5)]);
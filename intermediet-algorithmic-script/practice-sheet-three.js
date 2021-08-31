// A simple function to add something
    const add = (n) => (n + 10);
    console.log(add(9)); 

    // A simple memoized function to add something;
    const memoizedAdd = () => {
        let cache = {};
        return (n) => {
            if(n in cache){
                console.log(`Fetching from cache`);
                return cache[n]
            }
            else {
                console.log(`Calculating result`);
                let result = n + 10;
                cache[n] = result;
                console.log(cache);
                return result
            }
        }
    }
    // returned fuction from memoizedAdd
    const newAdd = memoizedAdd();
    console.log(newAdd(9));
    console.log(newAdd(9));

                //Memozation takeaways.
 /* Some takeaways fro the above code

    1. memoizedAdd returns a function which is invoked later. 
    This is possible because in JavaScript, functions are first class 
    objects which lets us use them as higher order functions and 
    return another function.

    2. cache can remember its values since the returned function has 
    a closure over it.
    
    3. It’s essential that the memoized function is pure. A pure function 
    will return the same output for a particular input no mater how many 
    times it’s called, which makes the cache work as expected.

    Writing your own memoize function

    The previous code works fine but what if we wanted to turn any function 
    into a memoized function?

    Here’s how to write your own memoize function
    */
   // a simple pure function to get a value adding 10
   const addition = (n) => (n + 10);
   console.log(`Simple call`, add(3));
   // a simple memoize function that takes in a function
  // and returns a memoized function
  const memoize = (fn) => {
      let cache = {};
      return (...args) => {
          let n = args[0] // just taking one Arguments here
          if(n in cache){
              console.log(`Fetching from cache`);
              console.log(cache[n]);
              return cache[n];
          }
          else {
              console.log(`Calculsting result`);
              let result = fn(n);
              cache[n] = result;
              
              return result
          }
      }
  }
  // Creationg memoized function for the add pure function
  const memoizedAddition  = memoize(addition);
  console.log(memoizedAddition(3)); // calculated
  console.log(memoizedAddition(3)); // cached
  console.log(memoizedAddition(4)); // calculated
  console.log(memoizedAddition(4)); // cached

 // a simple pure function to get a value subtracting  by 10 
 const subtruct = (n) => (n -10);

 // a simple memoize function that takes in a function
  // and returns a memoized function
  const memoizeSubtruct = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if(n in cache){
            console.log(`Fetching from cache`);
            return cache[n];
        }
        else {
            let result = fn(n);
            cache[n] = result;
            console.log(`Calculation`);
            return result;
        }
    }
  }
  const memoizeSubtruction = memoizeSubtruct(subtruct);
  console.log(memoizeSubtruction(25));
  console.log(memoizeSubtruction(25));

  //// a simple pure function to get a value multiplying by 10;
  const multiply = (n) => (n * 10);

   // a simple memoize function that takes in a function
  // and returns a memoized function
  const memiozedMultiply = (fn) => {
      let cache = {};
      return (...args) => {
          let n = args[0];
          if(n in cache){
              return cache[n];
          }
          else {
              let result = fn(n);
              cache[n] = result;
              return result;
          }
      }
  }
  const memiozeMulti = memiozedMultiply(multiply);
  console.log(memiozeMulti(10));
  console.log(memiozeMulti(12));

 

  // same memoize function from before
  const memiozeRecursive = (fn) => {
      let cache = {};
      return (...args) =>{
          let n = args[0];
          if(n in cache) {
              console.log(`Fetching from cache`, n);
              return cache[n];
          }
          else {
              console.log(`Calculating result`, n);
              let result = fn(n);
              cache[n] = result;
              return result
          }
      }
  }

  const factorials = memiozeRecursive(
      (x) => {
          if (x === 0){
              return 1;
          }
          else{
              return x * factorials(x -1)
          }
      }
  );
  console.log(factorials(5));
  console.log(factorials(6));
function multiple(n){
    let product = 1;
    for(let i = 1; i < n; i++){
        if(n * i) {
            return true;
        }
    }
    return false;
}
console.log(multiple(10));

function smallerstCommon(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] * arr[i]);
    }
    return result
}
console.log(smallerstCommon([1,5]));
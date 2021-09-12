let arr = [1, 2, 4,30,5, 12,6, 50, 9,60];
function greaterThanTen(params) {
    let s = [];
    params.forEach((element, index) => {
        (element> 10)? s.push(element): element; 
    });

    return s;
}
console.log(arr);
console.log(greaterThanTen(arr));


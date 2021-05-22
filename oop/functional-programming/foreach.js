let arr = [1, 2, 4,30,5, 12,6, 50, 9,60];
function greaterThanTen(params) {
    let s = [];
    params.forEach((element, index) => {
        (element[index]> 10)? s.push(element[index]): element; 
    });

    return s;
}
console.log(arr);
console.log(greaterThanTen(arr));


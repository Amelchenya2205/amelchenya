// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.



const numbers = [5, 43, 63, 23, 90];


let delArr = function(arr) {
    
    arr.splice(0, arr.length);
    console.log(arr);
}

let delArr2 = function(arr) {
    for(let a in arr) {
        if(arr.length > 0) {
        arr.pop();
    }
}
    console.log(arr);
}


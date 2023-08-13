// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.







const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]



let matValue = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let y = 0; y < arr[i].length; y++) {
            sum += arr[i][y];
        }
    }
    console.log(sum)
}
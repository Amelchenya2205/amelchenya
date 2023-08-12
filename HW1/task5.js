// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.






const cats = ['Gachito', 'Tom', 'Batman']

let showElem = function(arr) {
    for(let a in arr) {
        console.log(arr[a]);
    }
} 


let showElem2 = function(arr) {
    for(a of arr) {
        console.log(a);
    }
} 
// Дан массив:

// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
 
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'



const binary = [0, 0, 0, 0];



let noBinArr = function(arr) {
    for(let a in arr) {
        if(arr[a] == 0) {
            arr.splice(a + 1, 0, 1);
        } 
        if(a > 0){
            continue;
        }
    }
    return arr;

}
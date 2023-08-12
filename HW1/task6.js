
// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**





const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];


const newArr = evenNumbers.concat(oddNumbers);

console.log(newArr);


let numAndIndex = function(arr, number) {
    for( let a in arr) {
        if (number == arr[a]) {
            console.log(a)
        }
        if (number > arr.length) {
            console.log(-1);
        }
    }
};

// Потом соединю с сотрировкой если не забуду

let arrSort = function(arr) {
    
    function sortArray (a, b) {
   
        if(a > b) {  
            return 1;
          }
        
        if(a < b) {  
            return -1;
          }
        if(a == b) {
          return 0;
        }
        
    };

    return arr.sort(sortArray);
}


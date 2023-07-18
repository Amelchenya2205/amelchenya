"use strict"



// Фильтрация по диапазону "на месте"

let arr = [5, 3, 8, 1];


let filterRangeInPlace = function(arr, a, b) {
    for(let key of arr) {
        if(arr[key] <= a && arr[key] >= b) {
            arr.slice(key, 1);
        }
    }
    console.log(finishArr);
}
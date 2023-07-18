"use strict"



let arr = [5, 3, 8, 1];


let filterRange = function(arr, a, b) {
    let arrNew =arr.slice(0);
   
    let finishArr = [];
    for(let key of arr) {
        if(arr[key] >= a && arr[key] <= b) {
            return finishArr += arr[key]
        }
        else {
            return
        }
    }
   
}
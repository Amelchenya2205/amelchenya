"use strict"



// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8,];


let fSort = function (massive) {


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
        
    }
    return massive.sort(sortArray);
  };

"use strict"




// Отсортировать пользователей по возрасту

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };



let mass = [vasya, petya, masha];


let foo = function (arr) {

    
    
    function sortArray (a, b) {
      if(a.age > b.age) {
        return 1;
      }
      if(a.age < b.age) {
        return -1;
      }
      if(a.age == b.age) {
        return 0;
      }
    };
    return (mass.sort(sortArray));
    
    };











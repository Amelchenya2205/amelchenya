"use strict"




// Получить средний возраст

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };




let mass = [vasya, petya, masha];



let foo = function(massive) {
    let result = 0;
    for(let obj of massive) {
        result += obj.age;
        
    }
    return result / 3;
}

console.log(foo(mass))
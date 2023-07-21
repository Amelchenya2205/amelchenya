"use strict"



// Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };


let mass = [];

mass.push(vasya)
mass.push(petya)
mass.push(masha)

console.log(mass);

let secondMass = mass.map(item => item.name);

console.log(secondMass);
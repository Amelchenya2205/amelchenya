"use strict"




let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };



let a = [];

let namesMass = [vasya, petya, masha]

console.log(namesMass);

let usersMapped = namesMass.map(namesMass => ({
    fullname: namesMass.name + ' ' + namesMass.surname
}))


console.log(usersMapped);



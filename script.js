"use strict";

// let foo = function (obj1, obj2) {
//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   for (let key in obj2) {
//     if (obj2[key] !== obj1[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// let obj1 = {
//   name: "Ilya",
//   age: 24,
// };

// let obj2 = {
//   name: "Ilya",
//   age: 24,
//   eyecolor: "gray",
// };

// let result = foo(obj1, obj2);
// console.log(result);

//  console.log(obj2.name)
//  let x = 'name'
//  console.log(obj2[x])

// for (let key in obj2) { // 'name'
//    let str = key + ' - ' + obj2[key]
//     console.log(str)

// }

// let obj3 = {
//   name: 'Ilya',
//   city: 'Minsk',
//   population: null,
//   temp: 21
// }

// foo(obj3, obj3)

// oHV(obj3, 'Vitebsk')
// oHV(obj3, 2000001)

// kIO(obj3, 'name')

// oWN(obj3)

// let oWN = function(obj3) {
//   for (let key in obj3) {
//     if (obj3[key] === null) {
//       return false
//     }
//   } return true
// }

// console.log(oWN())

// let oHV = function(obj3, x) {
//   for (let key in obj3) {
//     if (obj3[key] === x) {
//       return true
//     }
//   } return false
// }

// console.log(oHV(obj3, 'Minsk'))

// let kIO = function(a, y) {
//   return y in a
// }

// console.log(kIO(obj3, 'name'))

// console.log(typeof 24)
// console.log(typeof 'Amelchenya')
// console.log(typeof asd41)

// console.log('Amelchenya'.charAt(9));
// console.log('Amelchenya'.substring(0, 4));
// console.log('Amelchenya'.slice(-8));
// console.log('Amelchenya'.substr(0, 4));

// let foo = function(x) {
//   return Number(x)
// }

// let nation = ["russian", "belarusian", "french"];
// let massive = ["name", "age", "height", nation];
//   console.log(massive[0]);
//   console.log(massive[3][1]);

// function a(a, b, c) {
//   console.log('Ваш возраст - ' + a)
//   console.log('Ваш рост - ' + b)
//   console.log('Ваш вес - ' + c)
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function learnJavaScript() {
//   const divisibleBy = (numbers, divisor)

//   }

// let mas = [-5, -4, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = mas

// let foo = function (start, end) {
//   let result = 0;
//   for (let i = start; i < end; i++) {
//     if (i % 2 != 0) {
//       result += 1
//      }
//   }
//   return result

// };

// let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function  newMas(a, b) {
//   let mas2 = []
//   for(let i of mas) {

//     if(a[i] % b == 0) {
//       mas2.push(a[i])
//     }
//   }
//    console.log(mas2)
// }

// function year(dad, son) {
//   let result = 0;

//   if (dad / son === 2) {
//     return result = 0
//   }
//   else  {
//     if (dad/son > 2) {
//      return result += -1
//     }
//     else {
//      return result += 1
//     }
//   }

// }

// function year  (dad, son) {
//   const x = dad/son
//   if (dad/son === 0) {
//     return 0

//   } else {
//     if (dad/son > 2) {
//       let result = 0
//       do{
//         dad++
//         son++
//         result++
//       }while(dad / son !== 2); {
//       return result
//     }
//         }

//     else {
//       let result = 0
//       do{
//         dad--
//         son--
//         result--
//       }while(dad / son !== 2); {
//       return result
//     }
//     }
//   }
// }

// function year(dad, son) {
//   let result = 0
//   do{
//     dad++
//     son++
//     result++
//   }while(dad / son !== 2);
//   return result
// }
// console.log(year(36, 7));

// function tri(icon, value) {
//   let result = '';
//   for (let i = 1; i <= value; i++) {
//     if (i <= value) {
//       result += icon;
//     }
//     console.log(result);
//   }
//   return result
// };

// let chess = function (icon, size) {
//   for (let i = 1; i <= size; i++) {
//     let result = "";
//     for (let y = 1; y <= size; y++) {
//       if ((i % 2 !== 0 && y % 2 === 0) || (i % 2 === 0 && y % 2 !== 0)) {
//         result += icon;
//       } else {
//         result += " ";
//       }
//     }

//     console.log(result);
//   }
// };

// let foo = function () {
//   let name = prompt("Введите свое имя");
//   const year = prompt("Введите год рождения");
//   let age = 2023 - year;

//   let result = "";
//   if (age % 10 == 1) {
//     return (result += name + ": " + age + "год");
//   }
//   if (age % 10 <= 4 && age % 2 > 1) {
//     return (result += name + ": " + age + "года");
//   }
//   if (age % 10 <= 9 && age % 2 > 4 && age % 2 == 0) {
//     return (result += name + ": " + age + "лет");
//   }
//   console.log(result);
// };

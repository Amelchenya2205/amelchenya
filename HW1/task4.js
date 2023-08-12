// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.




const students = ['Polina', 'Dasha', 'Masha']


let changeNames = function(arr) {
    arr.shift();
    arr.unshift('Andrey');
    arr.pop();
    arr.push('Borya');
    console.log(arr)
};
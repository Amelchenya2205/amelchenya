const task5numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]



let numbers2 = task5numbers.find(function(elem, index, task5numbers) {
    if(elem % 2 == 0) {
        return elem
    }
});

console.log(numbers2);
const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

let sum = 0;


 let newFib = fibonacci2.reduce(function(previousValue, elem, index, fibonacci2) {
    return previousValue + elem;
 });

 console.log(newFib);
// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 







const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];




let filtNumbers = function(arr) {
    let positiveNum = [];
    let negativeNum = [];
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] >= 0) {
            positiveNum.push(arr[i]);
        }
        if(arr[i] < 0) {
            negativeNum.push(arr[i]);
        }
    }
    console.log(positiveNum);
    console.log(negativeNum);
}
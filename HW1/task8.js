// Реализуйте функцию которая будет проверять, является ли слово палиндромом.




let word = 'шалаш';


let paliWord = function(a) {
    debugger
    a.split('');
    for(let i = 0; i < Math.floor(a.length / 2); i++) {
        if(a[i] !== a[a.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(paliWord(word));
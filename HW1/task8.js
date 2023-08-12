// Реализуйте функцию которая будет проверять, является ли слово палиндромом.




let word = 'ifkfi';


let paliWord = function(a) {
    a.split('');
    for(let i = 0; i <= a.length / 2; i++) {
        if(a[i] !== (a.length - i - 1)) {
            return false;
        }
        else if(a[i] == (a.length - i - 1)) {
            return true;
        }
    }
}
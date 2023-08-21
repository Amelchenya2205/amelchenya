let str3 = 'ilya';



let upperCase = function (a) {
    let result = '';
    for(let i = 0; i <= str3.length; i ++) {
        result += a[i] * (i + 1);
    }
    return result
}

let splitted = str3.split('');



let toUp = function(str3) {
    return str3[0].toUpperCase() + str3.slice(1);
}


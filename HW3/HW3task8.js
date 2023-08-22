let str3 = 'ilya';



let upperCase = function (str) {
    let result = [];
    let newArr = Array.from(str);
    for(let i = 0; i < newArr.length; i++) {
        let repeated = newArr[i].repeat(i+1)
        repeated.toUpperCase() + repeated.slice(1)
        let toUP = repeated.charAt(0).toUpperCase() + repeated.slice(1) 
        result.push(toUP)
        newResult = result.join('--');
    }
    return newResult;
}



// let str10 = str3.repeat(3);
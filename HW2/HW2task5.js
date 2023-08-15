
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}




let payday = function (obj) {
    let sum = 0;
   
    for(let key in obj) {
        sum += obj[key];
    }
    console.log(sum / Object.keys(obj).length)
}
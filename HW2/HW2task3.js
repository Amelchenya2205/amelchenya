const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

let showKeys = function(obj) {
    for(let key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
}
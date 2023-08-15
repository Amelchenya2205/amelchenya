let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 26,
}




let compare = function(a, b) {
    if(a.length == b.length) {
        for(let key in a) {
            if(a[key] == b[key]) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    else 
    {
        return false;
    }
}
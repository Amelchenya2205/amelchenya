'use strict'

let obj1 = {
	name: 'Name'
};


let obj2 = {
	name: 'Name',
	friend: {
		name: 'Friend\'s name'
	},
};



let obj3 = Object.assign({}, obj1)

let obj4 = structuredClone(obj2);


console.log(obj1);
console.log(obj3);
console.log(obj2);
console.log(obj4);
'use strict'

let smallString = 'my-short-string';

let foo = function(a) {
  let b = a.split('-')
  console.log(b);
  let c = b.join('');
  console.log(c);
}

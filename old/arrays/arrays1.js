// https://learn.javascript.ru/task/create-array
'use strict';

let styles = ['Djuzz', 'Blues'];
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles);
let middle_index = Math.floor(styles.length / 2);
styles[middle_index] = 'Classics';
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('Rap', 'Raggy');
console.log(styles);

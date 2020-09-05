// https://learn.javascript.ru/task/filter-through-function

'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(min, max) {
  return value => value >= min && value <= max
}

function inArray(arr) {
  return value => arr.includes(value);
}

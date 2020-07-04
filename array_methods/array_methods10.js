// https://learn.javascript.ru/task/shuffle
'use strict';

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]

shuffle(arr);
console.log(arr);
// arr = [2, 1, 3]

shuffle(arr);
console.log(arr);
// arr = [3, 1, 2]

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let newIndex = Math.round(Math.random() * i);
    [arr[i], arr[newIndex]] = [arr[newIndex], arr[i]]
  }
}

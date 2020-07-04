// https://learn.javascript.ru/task/array-unique
'use strict';

function unique(arr) {
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 1; j < newArr.length; j++) {
      if (newArr[j] === newArr[i]) newArr.splice(j, 1)
    }
  }
  return newArr;
}

let strings = ["krishna", "krishna", "hare", "hare",
  "hare", "hare", "krishna", "krishna", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O

// https://learn.javascript.ru/task/array-unique-map
'use strict';
function unique(arr) {
  const set = new Set(arr);
  return [...set.values()];
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O

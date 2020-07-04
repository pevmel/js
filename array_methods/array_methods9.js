// https://learn.javascript.ru/task/sort-objects
'use strict';

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].age); // Вася
alert(arr[1].age); // Маша
alert(arr[2].age); // Петя

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age )
}

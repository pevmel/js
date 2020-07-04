// https://learn.javascript.ru/task/array-get-names
'use strict';

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(obj => obj.name)

alert( names ); // Вася, Петя, Маша

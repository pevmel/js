// https://learn.javascript.ru/task/ucfirst

'use strict';


alert( ucFirst("vasya") );

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

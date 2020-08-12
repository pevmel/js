// https://learn.javascript.ru/task/factorial

'use strict';

alert( factorial(5) ); // 120

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
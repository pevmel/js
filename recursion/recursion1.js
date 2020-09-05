// https://learn.javascript.ru/task/sum-to

'use strict';

alert( sumToCycle(100) ); // 5050
alert( sumToRecursion(100));
alert( sumToFormula(100));

function sumToCycle(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  if (n == 0) return 0;
  return sumToRecursion(n - 1) + n
}

function sumToFormula(n) {
  return (n + 1) * n / 2
}

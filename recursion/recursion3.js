// https://learn.javascript.ru/task/fibonacci-numbers

'use strict';
// function fib(n) {
//   if (n == 1 || n == 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

function fib(n) {
  if (n == 1 || n == 2) return 1;
  let prev1 = 1, prev2 = 1;
  let next;
  for (let i = 3; i <= n; i++) {
    next = prev1 + prev2;
    prev1 = prev2;
    prev2 = next;
  }
  return next;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

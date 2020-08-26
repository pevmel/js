// https://learn.javascript.ru/task/sum-many-brackets

'use strict';
alert( sum(1)) // 3
alert( sum(1)(2)(3) ) // 6
alert( sum(5)(-1)(2) ) // 6
alert( sum(6)(-1)(-2)(-3) ) // 0
alert( sum(0)(1)(2)(3)(4)(5) ) // 15

function sum(num) {
  let s = num;

  function summa(n) {
    s += n;
    return summa
  }

  summa.toString = function() {
    return s;
  }

  return summa;
}

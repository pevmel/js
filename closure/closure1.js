// https://learn.javascript.ru/task/closure-sum

'use strict';

alert( sum(1)(2) );
alert( sum(5)(-1) );

function sum(n) {
  return function(m) {
    return n + m
  }
}

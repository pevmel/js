// https://learn.javascript.ru/task/random-min-max

'use strict';

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

function random(min, max) {
 return min + Math.random() * ( max - min )
}

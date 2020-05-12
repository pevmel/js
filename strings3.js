// https://learn.javascript.ru/task/truncate

'use strict';

alert( truncate("European JSConf on 8 November 2009, it has seen wide usage across the tech industry", 20) );
alert( truncate("European", 20) );

function truncate(str, maxLength) {
  if (str.length > maxLength) return str.slice(0, 19) + "…";
  return str;
}

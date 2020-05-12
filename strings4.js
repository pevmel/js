// https://learn.javascript.ru/task/extract-currency
'use strict';

alert( extractCurrencyValue('$120') );

function extractCurrencyValue(str) {
  return ( str[0] >=0 && str[0] <= 9 ) ? +str : +str.slice(1);
}

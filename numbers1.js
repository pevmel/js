// https://learn.javascript.ru/task/repeat-until-number

'use strict';

alert( readNumber() )

function readNumber() {
  let number;
  do {
    number = prompt('Enter number', "");
  } while( isNaN(number) );
  return (number === null || number === '') ? null : number
}

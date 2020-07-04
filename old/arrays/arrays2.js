'use strict';

function sumInput() {
  let sum = 0;
  let number;
  do {
    number = prompt('Enter the number to sum');
    if (number == null) number = '';
    number = number.trim() === '' ? NaN : +number;
    if ( !isNaN(number) ) sum += number;
  } while ( !isNaN(number) );
  alert('sum is: ' + sum);
}

sumInput();

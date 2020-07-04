'use strict';

const arr = [-1, 2, 3, -9, 11];
alert (getMaxSubSum(arr));

function getMaxSubSum(arr) {
  let max = 0;
  let sum = 0;
  let index = 0;
  while (index < arr.length) {
    sum += arr[index];
    if (sum < 0) sum = 0;
    if (sum > max) max = sum;
    index ++;
  }
  return max;
}

// https://learn.javascript.ru/task/output-numbers-100ms

'use strict';

function printNumbersSetInterval(from, to) {
  let counter = from;
  let timerId = setInterval(() => console.log(counter++), 1000);
  setTimeout(() => clearInterval(timerId), (to - from + 1) * 1000);
}

function printNumbersSetTimeout(from, to) {
  for (let counter = from; counter <= to; counter++) {
    setTimeout(() => console.log(counter), (counter - from +1) * 1000);
  }
}

function printNumbersRecursive(from, to) {
  let counter = from;
  let timerId = setTimeout(function tick() {
    console.log(counter++);
    if (counter <= to) {
      timerId = setTimeout(tick, 1000)
    }
  }, 1000)
}

// printNumbersSetInterval(1, 10);
// printNumbersSetTimeout(1, 10);
printNumbersRecursive(1, 10);